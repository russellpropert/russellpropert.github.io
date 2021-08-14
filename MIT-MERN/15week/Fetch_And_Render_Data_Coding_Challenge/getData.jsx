//Pagination

const Pagination = ({states, pageSize, onPageChange}) => {
  const {Button} = ReactBootstrap;
  if (states.length <= pageSize) return null;

  const pages = Array(Math.ceil(states.length / pageSize)).fill(0).map((item, i) => i + 1);
  const buttons = pages.map(page => {
    return (
      <Button key={page} onClick={onPageChange} className="page-item" style={{marginRight: "3px"}}>
        {page}
      </Button>
    );
  });
  return (
    <nav>
      <ul className="pagination">{buttons}</ul>
    </nav>
  );
}

const paginate = (states, pageNumber, pageSize) => {
  const start = (pageNumber - 1) * pageSize;
  let page = states.slice(start, start + pageSize).map((state, i) => {return {aircraft: state, aircraftNumber: start + 1 + i, data: true}});
  return page;
}


// Get data from API

const useDataApi = (initialUrl, initialData, useState) => {
  console.log('useDataApi');
  const {useEffect, useReducer} = React;
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  });

  useEffect(() => {
    console.log('useEffect');
    let didCancel = false;
    const fetchData = async () => {
      dispatch({type: "FETCH_INIT"})
      try {
        const result = await axios(url);
        if (!didCancel) {
          dispatch({type: "FETCH_SUCCESS", payload: result.data});
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({type: "FETCH_FAILURE"})
        }
      }
    }

    fetchData();
    return () => {
      didCancel = true;
    }

  }, [url]);
  return [state, setUrl];
}

const dataFetchReducer = (state, action) => {
  console.log('dataFetchReducer');
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
      case "FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload
        };
      case "FETCH_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true
        };
      default:
        throw new Error();
  }
}


// Components

const Aircraft = ({data, rowIndex}) => {
  return (
    <>
      
    </>
  );
}

const Table = ({page, Fragment}) => {
  return (
    <Fragment>
      <table className="table" style={{fontSize: ".75em"}}>
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">ICAO24 ID</th>
            <th scope="col">Call Sign</th>
            <th scope="col">Country of Origin</th>
            <th scope="col">Last Position</th>
            <th scope="col">Last Contact</th>
            <th scope="col">Longitude</th>
            <th scope="col">Latitude</th>
            <th scope="col">Barometric Alt</th>
            <th scope="col">On Ground</th>
            <th scope="col">Velocity</th>
            <th scope="col">True Bearing</th>
            <th scope="col">Vertical Rate</th>
            <th scope="col">Sensors</th>
            <th scope="col">Geometric Alt</th>
            <th scope="col">Transponder Code</th>
            <th scope="col">SPI</th>
            <th scope="col">Position Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {page.map((item, rowIndex) => (
              <Fragment key={item.aircraft[0]}>
                {console.log(item.aircraftNumber)}
                <th key={`row${rowIndex}`} scope="row">{item.aircraftNumber}</th>
                {item.aircraft.map((item, dataIndex) => (
                  <>
                    {console.log(item[dataIndex])}
                    <td key={String(rowIndex) + String(dataIndex)}>{item[dataIndex]}</td>
                  </>
                ))}
              </Fragment>
            ))}
          </tr>
        </tbody>
      </table>


      {/* <ul className="list-group" style={{marginBottom: "20px", listStyleType: "none"}}>
        {page.map((item, i) => (
          <li className="list-group-item" key={i}>
            {item.data ?
              <li>{item.aircraftNumber}. {item.aircraft[0]}</li> :
              <span>&nbsp;</span>
            }
          </li>
        ))}
      </ul> */}
    </Fragment>
  );

} 

const App = () => {
  console.log('Render App');
  const {Fragment, useState} = React;
  const [latitude, setLatitude] = useState(40.6908725658254);
  const [longitude, setLongitude] = useState(-74.17475007315302);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  let lamin = latitude - .1
  let lamax = latitude + .1
  let lomin = longitude - .1
  let lomax = longitude + .1

  const [{isLoading, isError, data}, setUrl] = useDataApi(
    `https://opensky-network.org/api/states/all?lamin=${lamin}&lamax=${lamax}&lomin=${lomin}&lomax=${lomax}`,
    {time : null, states: []},
    useState
  );

  let states = []
  if (data.states !== null) {states = data.states};
  
  if (data.time) {
    const time = new Date(data.time * 1000).toUTCString();
    console.log(time);
  }
  console.log('States: ', states);
  let page = [];

  const handlePageChange = e => {
    setCurrentPage(Number(e.target.textContent));
  }

  const handlePageSizeChange = e => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  }

  const dataCleanup = (pageIndex) => {
    for (let i = 0; i < page[pageIndex].aircraft.length; i++) {
      switch (page[pageIndex].aircraft[i]) {
        case null:
          page[pageIndex].aircraft[i] = 'none'
          break;
        case false:
          page[pageIndex].aircraft[i] = 'no'
          break;
        case true:
          page[pageIndex].aircraft[i] = 'yes'
          break;
        default:
          break;
      }
    }
  }

  const positionSource = (pageIndex) => {
    switch (page[pageIndex].aircraft[16]) {
      case 0:
        page[pageIndex].aircraft[16] = 'ADS-B'
        break;
      case 1:
        page[pageIndex].aircraft[16] = 'ASTERIX'
        break;
      case 2:
        page[pageIndex].aircraft[16] = 'MLAT'
        break;
      default:
        break;
    }
  }

  if (states.length >= 1) {
    page = paginate(states, currentPage, pageSize);
    for (let i = 0; i < page.length; i++) {
        dataCleanup(i)
        // console.log(page[i].aircraft[3] * 1000);
        page[i].aircraft[3] = new Date(page[i].aircraft[4] * 1000).toUTCString(); 
        page[i].aircraft[4] = new Date(page[i].aircraft[4] * 1000).toUTCString();
        positionSource(i);
    }
    console.log(`currentPage: ${currentPage}`);
    console.log('Page: ', page);
  }

  if (page.length >= 1 && page.length < pageSize) {
    const emptyArray = Array(page[0].aircraft.length).fill('');
    let filler = Array(pageSize - page.length).fill(0).map((item, i) => {return {aircraft: emptyArray, data: false}});
    page = [...page, ...filler];
    console.log('Page With Filler: ', page);
  }

  return (
    <Fragment>
      <h1>React Get Data</h1>
      <form
        onSubmit={(event) => {
          setUrl(`https://opensky-network.org/api/states/all?lamin=${lamin}&lamax=${lamax}&lomin=${lomin}&lomax=${lomax}`,          )
          setCurrentPage(1);
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={latitude}
          onChange={event => setLatitude(event.target.value)}
        />
        <input
          type="text"
          value={longitude}
          onChange={event => setLongitude(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isError && <div>The data could not retrieved.</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        // <div>test</div>
        <Table page={page} Fragment={Fragment} />
      )}

      <Pagination
        states={states}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      >
      </Pagination>

      <label style={{marginRight: "10px"}}>Number of aircraft per page</label>
      <select onChange={handlePageSizeChange} defaultValue="10">
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>25</option>
        <option>50</option>
      </select>
    </Fragment>
  );

  // return (
  //   <h1>test</h1>
  // );
}


// Render
ReactDOM.render(<App />, document.getElementById("root"));
