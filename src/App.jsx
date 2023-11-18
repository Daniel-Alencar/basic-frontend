import { Route, Routes as Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>

        <Header />

        <Switch>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
        </Switch>

      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
