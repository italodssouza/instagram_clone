import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Feeds from './pages/Feeds';
import Logins from './pages/Login';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Feeds}/>
            <Route path="/login" component={Logins}/>
        </BrowserRouter>
    );
}

export default Routes;