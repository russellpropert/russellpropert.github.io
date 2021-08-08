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
        throw new Error()
  }
}

function App() {
  console.log('Render App');
  const {Fragment, useState} = React;

  const numberOfHits = 55;
  const [query, setQuery] = useState("MIT");
  const [{data, isLoading, isError}, setUrl] = useDataApi(
    `https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=${numberOfHits}`,
    { hits: [] },
    useState
  );

  return (
    <Fragment>
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
        <ul style={{listStyleType: "none"}}>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));

//  // "https://hn.algolia.com/api/v1/search?query=redux"
