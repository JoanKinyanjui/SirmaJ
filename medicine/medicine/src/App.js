import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import Login from './Components/Account/login';
import Signup from './Components/Account/signup';
import Contactus from './Components/Contact Us/contact';
import Faqs from './Components/Faqs/faqs';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
       <Router>
        <div>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/faqs'>
                    <Faqs />
                </Route>
                <Route exact path='/contactus'>
                    <Contactus />
                </Route>
                <Route exact path='/account'>
                    <Login />
                </Route>
                <Route exact path='/signup'>
                    <Signup />
                </Route >
                
            </Switch>

        </div>
        </Router>
    </div>
  );
}

export default App;