import React from "react";
import Header from "./Header";
import Catalog from "./Catalog";
import { Flowers } from "./PlantCategories";
import ShoppingBasket from "./ShoppingBasket";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Main() {
  return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/home" component={Flowers} />
          <Route exact path="/flowers" component={Catalog} />
          <Route exact path="/shopping_basket" component={ShoppingBasket} />
          <Redirect to="/home" />
        </Switch>

      </div>
    );
  }

export default withRouter(Main);
