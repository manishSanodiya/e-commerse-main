import React from 'react'
import classes from './cartItem.module.css'


const CartItem = (props) => {
  return (
    <div className="bg-warning border ms-auto">
        <li>
          <h4>{props.title}</h4>
         <img src={props.imageUrl} className={classes.image}/>
    <span className={classes.price}> ${props.price} </span><span className={classes.quantity}>quantity-{props.amount}</span>
    <button className={classes.addremove} onClick={props.onRemove}>-</button>
    <button className={classes.addremove} onClick={props.onAdd}>+</button>
    </li>
    </div>
    
  )
}

export default CartItem
