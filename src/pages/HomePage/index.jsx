import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

const HomePage = () => {

  const { user } = useContext(AuthContext);

  if(!user) {
    return(
      <div>
        <p>VOCÊ NÃO ESTÁ LOGADO</p>
      </div>
    )
  }

  return(
    <div>
      <p>VOCÊ ESTÁ LOGADO {user.username}!</p>
    </div>
  )
}

export default HomePage;
