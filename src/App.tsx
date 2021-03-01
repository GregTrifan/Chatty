import React from "react";
import Template from "./components/Template";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Home from "./routes/home";

import Lost from "./routes/notfound"
import "./App.less";
import { General } from "./routes/general";

const App = () => {
    return (
        <Router>
        <Template>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/404' component={Lost}/>
                <Route exact path="/general-chat" component={General}/>
                <Route component={Lost}/>
            </Switch>
        </Template>
        </Router>
    );
}

export default App;