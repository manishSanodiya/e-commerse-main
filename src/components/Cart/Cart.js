import React from "react";
import { useContext } from "react";
import CartContext from "../../Store/context";
import CartItem from "./CartItem";
import { Button,Stack } from "react-bootstrap";
import classes from './cartItem.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemRemoveHandler=(id)=>{
    cartCtx.removeItem(id);
  }
  
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartList = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          imageUrl={item.imageUrl}
          title={item.title}
          amount={item.amount}
          price={item.price}
          key={item.id}
          id={item.id}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <div className={classes.maindiv}>
        <Stack direction="horizontal" gap={3}>
    <div className="bg-warning border ms-auto">
      {cartList}

      <h4>Total Amount-{cartCtx.totalAmount}</h4>
      <Button onClick={props. onClose}>close</Button>
    </div>
    </Stack>
    </div>
    
  );
};

export default Cart;




