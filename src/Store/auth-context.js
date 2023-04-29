import React,{useState} from 'react'


const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{}
})

export const AuthContextProvider = (props) =>{
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const [isLogedIn,setisLogedIn] = useState(false)
    
    
    // !!token = if token is a string that is not empty this will return true boolean value if token is a string that is empty this will return false
    let userIsLoggedIn = isLogedIn;
  
    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token',token)
        setisLogedIn(true);
        setTimeout(logoutHandler(),5000)
    }
    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
      setisLogedIn(false);
    }

    const contextValue = {
        token: token,
        isLoggedIn: isLogedIn,
        login: loginHandler,
        logout: logoutHandler
    } 

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext
