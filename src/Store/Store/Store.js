import {useState} from "react";
import CartProvider from '../CartProvider';
import Header from '../../components/header/Header';
import Music from '../../components/Items/Music';
import Cart from '../../components/Cart/Cart';
import Generic2 from "../../components/header/Generic2";


const Store = () => {
    const [cartState,setCartState]=useState(false);
    const cartOpenHandler=()=>{
   
       setCartState(true);
        console.log('cart button')
      
    }
    const cartCloseHandler=()=>{
     setCartState(false);
    }
  return (
    <div>
       <div className="App">
     <CartProvider>
      <Header cartClick={cartOpenHandler}/>
      <Generic2 />
     {cartState && <Cart onClose={cartCloseHandler}/>}
     <Music/>
     </CartProvider>
   
    </div>
    </div>
  )
}

export default Store
