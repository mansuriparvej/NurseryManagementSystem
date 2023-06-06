import React, { Component } from "react";
import Home from "./home.js";
import Header from "./Header";
import Catalog from "./Catalog";
import { Flowers, Veggies, Herbs, Trees } from "./PlantCategories";
import ShoppingBasket from "./ShoppingBasket";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        {/* Subpages */}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/catalog" component={Catalog} />

          {/* Separate Plant Categories */}
          <Route exact path="/flowers" component={Flowers} />
          <Route exact path="/shopping_basket" component={ShoppingBasket} />
          <Redirect to="/home" />
        </Switch>

      </div>
    );
  } // End of render()
} // End of the Main Component

export default withRouter(Main);
