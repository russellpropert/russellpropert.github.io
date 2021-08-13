const Pagination = ({items, pageSize, onPageChange}) => {
  const {Button} = ReactBootstrap;
  if (items.length <= pageSize) return null;

  let num = Math.ceil(items.length / pageSize);
  let pages = range(num);
  const list = pages.map(page => {
    return (
      <Button key={page} onClick={onPageChange} className="page-item" style={{marginRight: "3px"}}>
        {page}
      </Button>
    );
  });
  return (
    <nav>
      <ul className="pagination">{list}</ul>
    </nav>
  );
}

const range = (num) => {
  return Array(num)
    .fill(0)
    .map((item, i) => i + 1);
}

const paginate = (hits, pageNumber, pageSize) => {
  const start = (pageNumber - 1) * pageSize;
  let page = hits.slice(start, start + pageSize).map((hit, i) => {return {...hit, pageNumber: start + 1 + i}});
  return page;
}

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

const Hits = ({page}) => {
  return (
    <>
      <ul className="list-group" style={{marginBottom: "20px"}}>
        {page.map((item) => (
          <li className="list-group-item" key={item.objectID}>
            {item.data ?
              <a href={item.url}>{`${item.pageNumber}. ${item.title}`}</a> :
              <span>&nbsp;</span>
            }
          </li>
        ))}
      </ul>
    </>
  );

} 

const App = () => {
  console.log('Render App');
  const {Fragment, useState} = React;
  const [query, setQuery] = useState("MIT");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const numberOfHits = 64;

  const [{isLoading, isError, data}, setUrl] = useDataApi(
    `https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=${numberOfHits}`,
    { hits: [] },
    useState
  );

  let hits = data.hits;
  let page = [];

  const handlePageChange = e => {
    setCurrentPage(Number(e.target.textContent));
  }

  const handlePageSizeChange = e => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  }

  if (hits.length >= 1) {
    page = paginate(hits, currentPage, pageSize).map((hit) => {return {...hit, data: true}});
    console.log(`currentPage: ${currentPage}`);
  }

  if (page.length < pageSize) {
    const filler = Array(pageSize - page.length).fill(0).map((item, i) => {return {objectID: i, url: '', title: '', data: false}});
    page = [...page, ...filler];
  }

  console.log(page);


  return (
    <Fragment>
      <h1>React Get Data</h1>
      <form
        onSubmit={(event) => {
          setUrl(`https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=${numberOfHits}`)
          setCurrentPage(1);
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isError && <div>The data could not retrieved.</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <Hits page={page} />
      )}

      <Pagination
        items={hits}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      >
      </Pagination>

      <label style={{marginRight: "10px"}}>Number of articles per page</label>
      <select onChange={handlePageSizeChange} defaultValue="10">
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>25</option>
        <option>50</option>
      </select>
    </Fragment>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));

//  // "https://hn.algolia.com/api/v1/search?query=redux"
