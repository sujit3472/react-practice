import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './component/Home.js';
import Login from './component/Login.js';
import Register from './component/Register.js';

function App() {
  return (
    <div className="App">
        <div className="login">
            <div className="container-fluid">
                <div className="row row_wrap">
                    <Router>
                        <Switch>
                            <Route exact path="/"><Home/></Route> 
                            <Route exact path="/login" component={Login}><Login/></Route> 
                            <Route exact path="/register" component={Register}><Register/></Route> 
                    
                        </Switch>
                    </Router>

                </div>
                <div className="text-center footer_link">
                    <p>&copy; Copyrights Reserved by MedPenny 2021</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
