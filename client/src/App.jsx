import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components";
import { inspectUser, duelUsers } from './services/userService'
import { useEffect } from "react";
import Welcome from "./components/Welcome";
import '../src/App.css';
import Home from './pages/HomePage';
import { Route, Switch } from "react-router-dom";
import Inspect from "./pages/InspectPage";
import Duel from "./pages/DuelPage";

function App() {


  // Hook that runs after React has updated the DOM
  useEffect(() => {
    inspectUser()
  }, [])

  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path='/inspect' component={Inspect} />
        <Route path='/duel' component={Duel} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
