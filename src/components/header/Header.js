import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../Store/context";
import { NavLink } from "react-router-dom";
import classes from "./generic.module.css";
import AuthContext from "../../Store/auth-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  // const { items } = cartCtx;
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + Number(item.amount);
  }, 0);

  //logout
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
 
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className={classes.nav}>
            <NavLink className={classes.header} to="/home">
              Home
            </NavLink>
            <NavLink className={classes.header} to="/store">
              Store
            </NavLink>
            <NavLink className={classes.header} to="/about">
              About
            </NavLink>
            <NavLink className={classes.header} to="/contact">
              Contact Us
            </NavLink>
           <NavLink className={classes.header} to="/login">
              Login
            </NavLink>
          </Nav>

      
          <Button variant="primary" onClick={props.cartClick}>
            <span>Cart-</span>
            <span>{numberOfCartItems}</span>
          </Button>
        </Container>
      </Navbar>
      <br />
    </>
  );
};
export default Header;
