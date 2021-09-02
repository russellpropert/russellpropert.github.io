function Nav({getTab}) {
  const [tab, setTab] = useState(getTab());

  const counts = useContext(Fred);
  counts[tab] += 1;
  counts.all += 1;
  console.log(JSON.stringify(counts));

  console.log('Nav: render');

  return (
    <nav className="nav nav-tabs justify-content-center">
      <Link className="nav-item"
        className={tab === 'home' ? 'nav-link active' : 'nav-link'} 
        onClick={tab !== 'home' ? () => setTab('home') : false} 
        to="/"
      >Home</Link>
      <Link className="nav-item"
        className={tab === 'about' ? 'nav-link active' : 'nav-link'} 
        onClick={tab !== 'about' ? () => setTab('about') : false} 
        to="/about"
      >About</Link>
      <Link className="nav-item"
        className={tab === 'products' ? 'nav-link active' : 'nav-link'} 
        onClick={tab !== 'products' ? () => setTab('products') : false}
        to="/products"
      >Products</Link>
      <Link className="nav-item"
        className={tab === 'test1' ? 'nav-link active' : 'nav-link'} 
        onClick={tab !== 'test1' ? () => setTab('test1') : false} 
        to="/test1"
      >Test 1</Link>
      <Link className="nav-item"
        className={tab === 'test2' ? 'nav-link active' : 'nav-link'} 
        onClick={tab !== 'test2' ? () => setTab('test2') : false} 
        to="/test2"
      >Test 2</Link>
    </nav>
  );
}