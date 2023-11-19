import { createContext, useState, useEffect } from 'react';

import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export default AuthContext;



export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [authTokens, setAuthTokens] = useState(null);

  const loginUser = async (e) => {
    e.preventDefault();

    let response = await fetch('http://localhost:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      })
    })

    let data = await response.json();
    if(response.status == 200) {

      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      console.log('data.access', jwtDecode(data.access));

      alert('Você está logado! Acesse a página Home');

    } else {
      alert('Nome de usuário ou senha incorretas!');
    }

  }



  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser
  }
  
  return(
    <AuthContext.Provider value={contextData}>
      { children }
    </AuthContext.Provider>
  )
}