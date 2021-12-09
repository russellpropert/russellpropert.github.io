import { useContext, useState } from 'react';
import AppContext from '../components/context';
import Layout from '../components/layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  let { user, isAuthenticated, setUser, cart, addItem, removeItem } = useContext(AppContext);
  const [cartState, setCartState] = useState({cart: cart});
  console.log('_app.js cartState: ', cartState);

  addItem = (item) => {
    let { items } = cartState.cart;
    let foundItem = true;
    let newCart = {};
    if (items.length > 0) {
      foundItem = items.find((i) => i.id === item.id);
      if (!foundItem) foundItem = false;
    } else {
      foundItem = false;
    }

    if (!foundItem) {
      let temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      newCart = {
        items: [...cartState.cart.items, temp],
        total: cartState.cart.total + item.price
      }
      setCartState({ cart: newCart });
    } else {
      newCart = {
        items: items.map((item) => {
          if(item.id === foundItem.id) {
            return Object.assign({}, item, { quantity: item.quantity + 1 })
          } else {
            return item;
          }
        }),
        total: cartState.cart.total + item.price
      }
    }
    setCartState({ cart: newCart });
  }

  removeItem = (item) => {
    let { items } = cartState.cart;
    let newCart = {};
    const foundItem = items.find((i) => i.id === item.id);
    if (foundItem.quantity > 1) {
      newCart = {
        items: items.map((item) => {
          if(item.id === foundItem.id) {
            return Object.assign({}, item, { quantity: item.quantity - 1 })
          } else {
            return item;
          }
        }),
        total: cartState.cart.total - item.price
      }
    } else {
      const index = items.findIndex((i) => i.id === foundItem.id);
      items.splice(index, 1);
      newCart = { 
        items: items, 
        total: cartState.cart.total - item.price
      }
    }
    setCartState({ cart: newCart });
  }

  return (
    <AppContext.Provider value={{ user, isAuthenticated, setUser, cart: cartState.cart, addItem, removeItem }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp
