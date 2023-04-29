import React from 'react'
import { Button,Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import Header from '../components/header/Header'
import Generic2 from '../components/header/Generic2'
import { useContext,useRef,useState } from 'react'
import AuthContext from '../Store/auth-context'

const Login = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
  
    const history = useHistory();
  
    const authCtx = useContext(AuthContext);
  
    const [isLogin, setIsLogin] = useState(true);
    // const [isLoading, setIsLoading] = useState(false);
  
    const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
  
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
  
    //   setIsLoading(true);
      let url;
      if (isLogin) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBb1DLbIal0yvryfqz7ZNv5MgjpDORPZjw";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBb1DLbIal0yvryfqz7ZNv5MgjpDORPZjw";
      }
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "content-type": "authentication/json",
        },
      }).then((res) => {
        // setIsLoading(false);
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            // if(data && data.error && data.error.message){
  
            //   errorMessage = data.error.message
            // }
           
            throw new Error(errorMessage)
          });
        }
      }).then(data =>{
        console.log(data);
        const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace('/store');
  
      }).catch(err=>{
        alert(err.message);
      })
    };
    const logoutHandler = () => {
        authCtx.logout();
        console.log(authCtx.isLoggedIn);
      };
  
  
  return (
 <div>
    <Header/>
    <Generic2/>
       <Form onSubmit={submitHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" ref={emailInputRef} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"   ref={passwordInputRef} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit" onClick={switchAuthModeHandler}>
   Login
    </Button>
    <Button variant="primary" type="button" onClick={logoutHandler}>
     Logout
    </Button>
  </Form>
  <Generic2/>
 </div>
  )
}

export default Login
