const {useState, useEffect} = React;

function App () {

  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function getData() {
      const response  = await fetch('./books.json');
      const json      = await response.json();
      setData(json);
      setLoaded(true);
    }

    getData();
  }, []);

  console.log('loaded:', loaded, ' ', 'data:', data);

  return (
    <div className="container">
      <h1>Books</h1>
      {loaded && data.books.map((book) => 
        <mit-book
          key={book.isbn}
          title={book.title}
          subtitle={book.subtitle}
          author={book.author}
          publisher={book.publisher}
          description={book.description}
        />)}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
