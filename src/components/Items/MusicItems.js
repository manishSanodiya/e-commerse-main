import React, { useContext } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Image} from "react-bootstrap";

import CartContext from "../../Store/context";
import ProductForm from "./ProductForm";

const MusicItems = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      imageUrl: props.imageUrl,
      title: props.title,
      price: props.price,
      id:props.id,
      key:props.id,
      amount: amount
    });
    console.log("clicked");
    console.log(cartCtx.addItem);
  };
  return (
    
    <div>
      
      <h2>{props.title}</h2>
      <Image src={props.imageUrl} rounded />
      <h4>${props.price}</h4>
      <ProductForm onAddToCart={addToCartHandler} />
    </div>
 
  );
};

export default MusicItems;
