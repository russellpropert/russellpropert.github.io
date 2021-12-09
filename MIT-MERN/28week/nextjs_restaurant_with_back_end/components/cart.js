import { useContext } from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  Button,
  Badge
} from 'reactstrap';
import AppContext from './context';
import Link from 'next/link';

function Cart () {
  let { cart, addItem, removeItem } = useContext(AppContext);

  const renderItems = () => {
    let { items } = cart;
    if (items && items.length) {
      const itemList = cart.items.map((item) => {
        if (item.quantity > 0) {
          return (
            <div
              className='items-one'
              style={{ marginBottom: "15px"}}
              key={item.id}
            >
              <div>
                <span id='item-price'>&nbsp; ${item.price}</span>
                <span id='item-name'>&nbsp; {item.name}</span>
              </div>
              <div>
                <Button
                  style={{
                    height: "25px",
                    padding: 0,
                    width: "15px",
                    marginRight: "5px",
                    marginLeft: "10px"
                  }}
                  onClick={() => addItem(item)}
                  color="link"
                >+</Button>
                <Button
                  style={{
                    height: "25px",
                    padding: 0,
                    width: "15px",
                    marginRight: "10px",
                  }}
                  onClick={() => removeItem(item)}
                  color="link"
                  >-</Button>
                  <span style={{ marginLeft: 5 }} id="item-quantity">
                    {item.quantity}x
                  </span>
              </div>
            </div>
          );
        }
      });
      return itemList;
    } else {
      return (
        <div></div>
      );
    }
  }

  const checkoutItems = () => {
    return (
      <div>
        <Badge styele={{ width: "200px", padding: "10px" }} color="light">
          <h5 style={{ fontWeight: 100, color: "gray" }}>Total:</h5>
          <h3 style={{ color: "black" }}>${cart.total}</h3>
        </Badge>
        <Link href="/checkout">
          <Button style={{ width: "60%" }} color="primary">
            <a>Order</a>
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <style jsx>{`
        #item-price {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
        #item-quantity {
          font-size: 0.95em;
          padding-bottom: 4px;
          color: rgba(158, 158, 158, 1);
        }
        #item-name {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
      `}</style>
      <h1>Cart</h1>
      <Card style={{ padding: "10px 5px" }} className="cart">
        <CardTitle style={{ margin: "10px" }}>Your order:</CardTitle>
        <hr/>
        <CardBody style={{ padding: "10px" }}>
          <div style={{ marginBottom: "6px" }}>
            <small>Items:</small>
          </div>
          <div>
            {renderItems()}
          </div>
          <div>
            {checkoutItems()}
          </div>
        </CardBody>
      </Card>
    </div>
  );

}

export default Cart;