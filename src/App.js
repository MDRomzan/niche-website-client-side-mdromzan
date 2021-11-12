
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';
import Detailes from './pages/Detailes/Detailes';
import Explores from './pages/Explores/Explores';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Resgister from './pages/Login/Resgister/Resgister';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explores">
            <Explores></Explores>
          </Route>
          <PrivateRoute path="/detaile/:id">
            <Detailes></Detailes>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
            <Route path="/resgister">
            <Resgister></Resgister>
          </Route>
           <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
