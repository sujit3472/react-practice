import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './component/Home.js';
import Login from './component/Login.js';
import Register from './component/Register.js';
import Dashboard from './component/Dashboard.js';
import MyProfile from './component/MyProfile.js';
import PageNotFound from './component/PageNotFound.js';

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
                            <Route exact path="/dashboard" component={Dashboard}><Dashboard/></Route>
                            <Route exact path="/my-profile" component={MyProfile}><MyProfile/></Route> 
                            <Route exact path="/*" component={PageNotFound}><PageNotFound/></Route>
                    
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
