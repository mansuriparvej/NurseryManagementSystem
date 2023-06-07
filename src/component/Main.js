import React, { Component } from "react";
import Home from "./home.js";
import Header from "./Header";
import Catalog from "./Catalog";
import { Flowers, Veggies, Herbs, Trees } from "./PlantCategories";
import ShoppingBasket from "./ShoppingBasket";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

function Main() {

    const HomePage = () => {
      return <Home />;
    }

    return (
      <div className="container-fluid">
        <Header />
        <Switch>

          {/* Separate Plant Categories */}
          <Route exact path="/home" component={Flowers} />
          <Route exact path="/flowers" component={Catalog} />
          <Route exact path="/shopping_basket" component={ShoppingBasket} />
          <Redirect to="/home" />
        </Switch>

      </div>
    );
  }

export default withRouter(Main);
