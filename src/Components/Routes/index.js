import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import App from '../Global';
import SinSeleccionar from '../Elements/sinSeleccionar'
import AddElement from '../Elements/addElement'

const AppRoutes = _ =>
    <App>
        <Switch>
            <Route exact path="/" component={SinSeleccionar}></Route>
            <Route exact path="/addElement" component={AddElement}></Route>
            <Route exact path="/addElement/:id" component={AddElement}></Route>
        </Switch>
    </App>


export default AppRoutes;