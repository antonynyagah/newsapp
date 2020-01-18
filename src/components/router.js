import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Anime from './anime';
import Love from './love';
import Politics from './politics';
import Strategy from './strategy';
import Tech from './tech';
import App from '../App';




const Router = () => (


   <BrowserRouter>
   
   <Switch>
    <Route exact path = "/" component={App} />
    <Route path = "/anime" component={Anime} />
    <Route path = "/love" component={Love} />
    <Route path = "/politics" component={Politics} />
    <Route path = "/strategy" component={Strategy} />
    <Route path = "/tech" component={Tech} />
    </Switch>

   </BrowserRouter>

);

export default Router;