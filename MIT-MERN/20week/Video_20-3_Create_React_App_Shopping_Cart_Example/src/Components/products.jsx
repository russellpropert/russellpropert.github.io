import React from 'react';
import axios from 'axios';

// React Bootstrap 
import {
  Card,
  Accordion,
  Button,
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';

// simulate getting products from DataBase
// Initial list of products
let products = [
  { itemID: 1, name: "Apple", country: "Italy", cost: 3, instock: 10 },
  { itemID: 2, name: "Orange", country: "Spain", cost: 4, instock: 3 },
  { itemID: 3, name: "Beans", country: "USA", cost: 2, instock: 5 },
  { itemID: 4, name: "Cabbage", country: "USA", cost: 1, instock: 8 },
];

let itemID = 5;
let cartItemID = 0;
let itemsToUpdate = false;

// Fetch Data
const useDataApi = (initialUrl, initialData) => {
  const {useState, useEffect, useReducer} = React;
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    isEmptyURL: false,
    data: initialData,
  });

  console.log(`useDataApi called`);

  useEffect(() => {
    console.log("useEffect Called");
    console.log(`URL: ${url}`)
    let didCancel = false;
    const fetchData = async () => {
      console.log("FETCH INIT")
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(url);
        console.log("FETCH FROM URL");
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    if (url !== 'reset' && url !== 'emptyURL') {
      fetchData();
    } else if (url === 'reset') {
      dispatch({ type: "RESET"});
    } else if (url === 'emptyURL') {
      dispatch({ type: "EMPTY_URL"});
    }

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
};

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return {
        ...state,
        isLoading: false,
        isError: false,
        isEmptyURL: false,
        data: [],
      };
      case "EMPTY_URL":
        return {
          ...state,
          isLoading: false,
          isError: true,
          isEmptyURL: true,
          data: [],
        };
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isEmptyURL: false,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        isEmptyURL: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isEmptyURL: false,
        data: [],
      };
    default:
      throw new Error();
  }
};

const Products = (props) => {
  // React
  const {useState} = React;

  // State
  const [items, setItems] = useState(products);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("http://localhost:1337/products");
  const [{data, isLoading, isError, isEmptyURL}, doFetch] = useDataApi('reset',[]);

  // Move Items To Cart
  const addToCart = (e) => {
    let name = e.target.name;
    let item = items.filter((item) => item.itemID === Number(name))[0];
    item = {...item, cartItemID};
    cartItemID++;
    if (item.instock > 0) {
      setCart([...cart, item]);
      const productIndex = items.findIndex((object) => object.itemID === item.itemID);
      items[productIndex].instock--
      setItems(items);
    }
  };

  // Remove Items From Cart
  const deleteCartItem = (item, index) => {
    let newCart = cart.filter((item) => item.cartItemID !== index);
    const productIndex = items.findIndex((object) => object.itemID === item.itemID);
    items[productIndex].instock++
    setItems(items);
    setCart(newCart);
  };

  //Product List
  console.log(`Items: ${JSON.stringify(items)}`);
  let list = items.map((item, index) => {
    let n;
    switch (item.name) {
      case 'Apple':
        n = 1049;
        break;
      case 'Orange':
        n = 1050;
        break;
      case 'Beans':
        n = 1051;
        break;
      case 'Cabbage':
        n = 1052;
        break;
      case 'Nuts':
        n = 1053;
        break;
      case 'Plum':
        n = 1054;
        break;
      default:
        n = index + 1055;        
    }
    let url = "https://picsum.photos/id/" + n + "/70";

    return (
      <li key={item.itemID} style={{marginBottom: "15px"}}>
        <Image src={url} width={70} height={70} roundedCircle style={{margin: "4px 4px 4px 0"}}></Image>
        <Button variant="primary" size="large" style={{marginBottom: "4px"}} name={item.itemID} onClick={addToCart}>
          {item.name}&nbsp;&#124;&nbsp;{`Cost: $${item.cost}`}&nbsp;&#124;&nbsp;{`Stock: ${item.instock}`}
        </Button><br/>
        <input name={item.itemID} type="submit" onClick={addToCart}></input>
      </li>
    );
  });

  //Cart Contents
  console.log(`Cart: ${JSON.stringify(cart)}`);
  let cartList = cart.map((item) => {
    return (
      <Card key={item.cartItemID} style={{width: "80%"}}>
        <Card.Header style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr"}}>
          <div style={{alignSelf: "center"}}>{item.name}</div>
          <Accordion.Toggle as={Button} variant="link" eventKey={item.cartItemID + 1} style={{justifySelf: "end"}}>
            Delete
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse
          onClick={() => deleteCartItem(item, item.cartItemID)}
          eventKey={item.cartItemID + 1}
        >
          <Card.Body>
            Delete item – ${item.cost} from {item.country}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });

  // Checkout Items
  let finalList = () => {
    let total = checkOut();
    let final = cart.map((item, index) => {
      return (
        <div key={item.cartItemID} index={index}>
          {item.name}
        </div>
      );
    });
    return { final, total };
  };

  // Checkout Total
  const checkOut = () => {
    let costs = cart.map((item) => item.cost);
    const reducer = (accum, current) => accum + current;
    let newTotal = costs.reduce(reducer, 0);
    return newTotal;
  };

  // Restock Products
  const restockProducts = () => {
    console.log(`Restock Products ${JSON.stringify(data)}`);
    const newItems = data.map((newItem) => {
      const {name, country, cost, instock} = newItem;
      const newItemID = itemID;
      itemID++;
      return {itemID: newItemID, name, country, cost, instock};
    });
    setItems([...items, ...newItems]);
    doFetch('reset');
  };

  console.log(`Items to update: ${itemsToUpdate}`);

  // Restock Only After Data Fetch
  if (itemsToUpdate && data.length) {
    itemsToUpdate = false;
    restockProducts()
  }

  //Page
  return (
    <Container>
      <Row>
        <Col>
          <h1>Product List</h1>
          <ul style={{listStyleType: "none", padding: "0"}}>{list}</ul>
        </Col>
        <Col>
          <h1>Cart Contents</h1>
          <Accordion>{cartList}</Accordion>
        </Col>
        <Col>
          <h1>CheckOut </h1>
          <Button>CheckOut ${finalList().total}</Button>
          <div> {finalList().total > 0 && finalList().final} </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {isError && !isEmptyURL && <div style={{color: "red", height: "25px"}}>Invalid URL for data source.</div>}
          {isError && isEmptyURL && <div style={{color: "red", height: "25px"}}>A URL must be provided.</div>}
          {!isError && <div style={{height: "25px"}}></div>}
          <form
            onSubmit={(event) => {
              doFetch(query ? query : 'emptyURL');
              itemsToUpdate = true;
              console.log(`Restock called on ${query}`);
              event.preventDefault();
            }}
            style={{marginBottom: "20px"}}
          >
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              style={{width: "300px", marginRight: "10px"}}
            />
            <button type="submit">{!isLoading ? 'Restock Products' : 'Loading...'}</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;