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
      <div>
        <Header />
        {/* Subpages */}
        <Switch>
          {/* <Route path="/home" component={HomePage} /> */}

          {/* Separate Plant Categories */}
          <Route exact path="/home" component={Flowers} />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/shopping_basket" component={ShoppingBasket} />
          <Redirect to="/home" />
        </Switch>

      </div>
    );
  } // End of render()


export default withRouter(Main);
