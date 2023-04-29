import { Route, Redirect } from "react-router-dom/cjs/react-router-dom";

import Store from "./Store/Store/Store";
import Home from "./HomePage/Home";
import About from "./About/About";
import Contadt from "./About/Contadt";
import { Fragment, useContext } from "react";
import Login from "./About/Login";
import AuthContext from "./Store/auth-context";
import { AuthContextProvider } from "./Store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <AuthContextProvider>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Redirect to="/home" />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/contact">
        <Contadt />
      </Route>

    <Route path="/store">
<Store />
  
      </Route>
    <Route path="/login">
        <Login />
      </Route>
      </AuthContextProvider>
      
    </Fragment>
  );
}

export default App;
