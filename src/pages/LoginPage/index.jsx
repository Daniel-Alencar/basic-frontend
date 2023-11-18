import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const LoginPage = () => {

  const { loginUser } = useContext(AuthContext);

  return(
    <div>
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Username"/>
        <input type="password" name="password" placeholder="Password"/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default LoginPage;
