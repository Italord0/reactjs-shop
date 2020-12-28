import React from 'react'
import { BrowserRouter ,Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import Shop from './pages/shop';

export default function Routes() {
    return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={ Login } />
                    <Route path="/shop" component={ Shop } />
                    <Route path="/register" component={ Register } />
                </Switch>
             </BrowserRouter>
    );
}