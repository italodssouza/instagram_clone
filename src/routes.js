import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Feeds from './pages/Feeds';
import Logins from './pages/Login';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Feeds}/>
                <Route path="/login" component={Logins}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;