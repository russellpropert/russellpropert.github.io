function App() {
  const {useState, useEffect} = React;
  const {Container} = ReactBootstrap;
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState("https://hn.algolia.com/api/v1/search?query=MIT");
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("MIT");
  const [isError, setIsError] = useState(false);

  console.log("Rendering App");

  useEffect(() => {
    console.log("Fetching data...");
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return (
    <Container>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() => setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)}
      >
        Search
      </button>

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
    </Container>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));

//  // "https://hn.algolia.com/api/v1/search?query=redux"
