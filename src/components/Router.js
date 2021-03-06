import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Recipe from "./Recipe";
import App from "../App";

function Router() {
    return (
        <div>
            {/* Adding the basename fixed the blank deploy page issue */}
            <BrowserRouter basename={window.location.pathname || ''}>
                <Switch>
                    <Route path="/" component={App} exact />
                    <Route path="/recipe/:name" component={Recipe}  />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router

