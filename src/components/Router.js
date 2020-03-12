import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Recipe from "./Recipe";
import App from "../App";

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={App} exact />
                    <Route path="/recipe/:name" component={Recipe}  />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router

