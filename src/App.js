import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import CheckoutPageUp from "./pages/CheckoutPageUp";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the component load
    auth.onAuthStateChanged((authUser) => {
      console.log(`The user is`, authUser);

      if (authUser) {
        // the user just logged in / the user was logged in(doesn't mean he logged out)

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route path="/checkout-up">
            <CheckoutPageUp />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
    // Header
    // Home
  );
}

export default App;
