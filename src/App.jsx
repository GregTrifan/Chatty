import React from "react";
import Template from "./components/Template";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Home from "./routes/home";

import Lost from "./routes/notfound"
import "./App.less";

const App = () => {
    return (
        <Router>
        <Template>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route component={Lost}/>
            </Switch>
        </Template>
        </Router>
    );
}

export default App;