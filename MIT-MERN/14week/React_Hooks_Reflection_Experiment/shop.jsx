// provide a button and use onClick to move 1 item into the Shopping Cart
// use React.useState to keep track of items in the Cart.
// list out the Cart items in another column
function ShoppingCart({ availableItems }) {
  const [stock, setStock] = React.useState(availableItems);
  const [cart, setCart] = React.useState([]);
  const [showCart, setShowCart] = React.useState(true);
  const { Button } = ReactBootstrap;

  // TODO: create state for stock and cart using React.useState

  const moveToCart = (e) => {
    // TODO: create product and numInStock variables
    const [product, numInStock] = e.target.innerHTML.split(':');
    // TODO: Determine if numInStock is greater than 0. If not, find the product that was clicked and update its numInStock
    if (numInStock < 1) return;
    // TODO: Update the stock state to include the new stock
    stock.filter(item => item.product === product).forEach(item => item.inStock --);
    setStock(stock);
    // TODO: Update the cart state to include the updated item
    const newCart = [...cart, product];
    console.log(newCart);
    setCart(newCart);
  };

  const toggleCart = () => {
    const newShowCart = !showCart;
    setShowCart(newShowCart);
  }

  // No need to update code beyond this point
  const availableItemsButtons = availableItems.map((item, index) => {
    return (
      <Button id={item.product} key={index} onClick={moveToCart}>
        {item.product}:{item.inStock}
      </Button>
    );
  });

  // Note: React requires a single Parent element, that's why we use <>
  return (
    <>
      <ul key="stock" style={{ listStyleType: 'none' }}>
        {availableItemsButtons}
      </ul>
      <h1>Shopping Cart</h1>
      <div style={{marginLeft: "40px", marginBottom: "10px"}}><Button onClick={toggleCart}>Show/Hide Cart</Button></div>
      <Cart cartitems={cart} showCart={showCart} setCart={setCart}> Cart Items</Cart>
    </>
  );
}

function Cart({ cartitems, showCart }) {
  if (!showCart) return <></>;
  const { Button } = ReactBootstrap;
  console.log('rendering Cart');
  const availableItemsButtons = cartitems.map((item, index) => {
    return (
      <Button id={item} key={index}>{item}</Button>
    );
  });
  return (
    <ul id="cart-items" style={{ listStyleType: 'none' }} key="cart">
      {availableItemsButtons}
    </ul>
  );
}

const availableItems = [
  { product: 'Jacket', inStock: 2 },
  { product: 'Pants', inStock: 3 },
  { product: 'Scarf', inStock: 0 },
  { product: 'Pajamas', inStock: 3 },
  { product: 'Shirt', inStock: 1 },
];

ReactDOM.render(<ShoppingCart availableItems={availableItems} />, document.getElementById('root'));
