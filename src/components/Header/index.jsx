import { Link } from "react-router-dom";

const Header = () => {
  return(
    <div>
      <Link to={'/home'}>Home</Link>
      <span> | </span>
      <Link to={'/'}>Login</Link>
    </div>
  )
}

export default Header;