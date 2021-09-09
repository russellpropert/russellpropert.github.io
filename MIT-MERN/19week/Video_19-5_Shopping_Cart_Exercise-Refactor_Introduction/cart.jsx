// simulate getting products from DataBase
// Initial list of products
const products = [
  { name: "Apples", country: "Italy", cost: 3, instock: 10 },
  { name: "Oranges", country: "Spain", cost: 4, instock: 3 },
  { name: "Beans", country: "USA", cost: 2, instock: 5 },
  { name: "Cabbage", country: "USA", cost: 1, instock: 8 },
];

let itemID = 0;

//=========Cart=============
const Cart = (props) => {
  const { Card, Accordion, Button } = ReactBootstrap;
  let data = props.location.data ? props.location.data : products;
  console.log(`data:${JSON.stringify(data)}`);

  return <Accordion defaultActiveKey="0">{list}</Accordion>;
};

// Fetch Data
const useDataApi = (initialUrl, initialData) => {
  const { useState, useEffect, useReducer } = React;
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });
  console.log(`useDataApi called`);
  useEffect(() => {
    console.log("useEffect Called");
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(url);
        console.log("FETCH FROM URl");
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);
  return [state, setUrl];
};

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const Products = (props) => {
  const [items, setItems] = React.useState(products);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const {
    Card,
    Accordion,
    useAccordionButton,
    Button,
    Container,
    Row,
    Col,
    Image,
    Input,
  } = ReactBootstrap;

  //  Fetch Data
  const { Fragment, useState, useEffect, useReducer } = React;
  const [query, setQuery] = useState("http://localhost:1337/products");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "http://localhost:1337/products",
    {
      data: [],
    }
  );
  console.log(`Rendering Products ${JSON.stringify(data)}`);

  // Move Items
  const addToCart = (e) => {
    let name = e.target.name;
    let item = items.filter((item) => item.name == name)[0];
    item = {...item, itemID};
    itemID++;
    if (item.instock > 0) {
      console.log(`add to Cart ${JSON.stringify([...cart, item])}`);
      setCart([...cart, item]);
      const productIndex = products.findIndex((object) => object.name === item.name);
      products[productIndex].instock--
      setItems(products);
      //doFetch(query);
    }
  };

  const deleteCartItem = (item, index) => {
    let newCart = cart.filter((item) => item.itemID != index);
    const productIndex = products.findIndex((object) => object.name === item.name);
    products[productIndex].instock++
    setItems(products);

    setCart(newCart);
  };

  //const photos = ["apple.png", "orange.png", "beans.png", "cabbage.png"];

  //Product List
  let list = items.map((item, index) => {
    let n = index + 1049;
    let url = "https://picsum.photos/id/" + n + "/50/50";

    return (
      <li key={item.name} style={{marginBottom: "15px"}}>
        <Image src={url} width={70} height={70} roundedCircle style={{margin: "4px 4px 4px 0"}}></Image>
        <Button variant="primary" size="large" style={{marginBottom: "4px"}}>
          {item.name}&nbsp;&#124;&nbsp;{`Cost: ${item.cost}`}&nbsp;&#124;&nbsp;{`Stock: ${item.instock}`}
        </Button><br/>
        <input name={item.name} type="submit" onClick={addToCart}></input>
      </li>
    );
  });

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);
  
    return (
      <div
        onClick={decoratedOnClick}
      >
        {children}
      </div>
    );
  }

  //Cart Contents
  let cartList = cart.map((item) => {
    return (
      <Card key={item.itemID}>
        <Card.Header>
          <CustomToggle as={Button} variant="link" eventKey={item.itemID}>
            {item.name}
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse
          onClick={() => deleteCartItem(item, item.itemID)}
          eventKey={item.itemID}
        >
          <Card.Body>
            $ {item.cost} from {item.country}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });

  //CheckOut
  let finalList = () => {
    let total = checkOut();
    let final = cart.map((item, index) => {
      return (
        <div key={item.itemID} index={index}>
          {item.name}
        </div>
      );
    });
    return { final, total };
  };

  const checkOut = () => {
    let costs = cart.map((item) => item.cost);
    const reducer = (accum, current) => accum + current;
    let newTotal = costs.reduce(reducer, 0);
    console.log(`total updated to ${newTotal}`);
    return newTotal;
  };

  // TODO: implement the restockProducts function
  const restockProducts = (url) => {};


  return (
    <Container>
      <Row>
        <Col>
          <h1>Product List</h1>
          <ul style={{ listStyleType: "none" }}>{list}</ul>
        </Col>
        <Col>
          <h1>Cart Contents</h1>
          <Accordion>{cartList}</Accordion>
        </Col>
        <Col>
          <h1>CheckOut </h1>
          <Button onClick={checkOut}>CheckOut $ {finalList().total}</Button>
          <div> {finalList().total > 0 && finalList().final} </div>
        </Col>
      </Row>
      <Row>
        <form
          onSubmit={(event) => {
            restockProducts(`http://localhost:1337/${query}`);
            console.log(`Restock called on ${query}`);
            event.preventDefault();
          }}
        >
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">Restock Products</button>
        </form>
      </Row>
    </Container>
  );
};

// ========================================
ReactDOM.render(<Products />, document.getElementById("root"));
