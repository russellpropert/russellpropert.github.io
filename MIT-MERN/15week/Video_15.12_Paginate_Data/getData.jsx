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

const paginate = (items, pageNumber, pageSize) => {
  const start = (pageNumber -1) * pageSize;
  let page = items.slice(start, start + pageSize);
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

function App() {
  console.log('Render App');
  const {Fragment, useState} = React;
  const [query, setQuery] = useState("MIT");

  const [currentPage, setCurrentPage] = useState(1);
  const numberOfHits = 74;

  const [{isLoading, isError, data}, setUrl] = useDataApi(
    `https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=${numberOfHits}`,
    { hits: [] },
    useState
  );

  let page = data.hits;

  const handlePageChange = e => {
    setCurrentPage(Number(e.target.textContent));
  }

  const pageSize = 10;

  if (page.length >= 1) {
    page = paginate(page, currentPage, pageSize);
    console.log(`currentPage: ${currentPage}`);
  }

  if (page.length < pageSize) {
    const filler = Array(pageSize - page.length).fill(0).map((item, i) => {return {objectID: i, url: '', title: ''}});
    page = [...page, ...filler];
  }

  return (
    <Fragment>
      <h1>React Get Data</h1>
      <form
        onSubmit={(event) => {
          setUrl(`https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=${numberOfHits}`)
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

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul className="list-group" style={{marginBottom: "20px"}}>
          {page.map(item => (
            <li className="list-group-item" key={item.objectID}>
              <a href={item.url}>{item.title}</a><span>&nbsp;</span>
            </li>
          ))}
        </ul>
      )}

      <Pagination
        items={data.hits}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      >
      </Pagination>
    </Fragment>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));

//  // "https://hn.algolia.com/api/v1/search?query=redux"
