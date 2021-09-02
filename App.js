import React, { Component } from "react";
import TabNavigator from "./navigation/TabNavigator.js";
import { init } from "@rematch/core";
import { nameModel } from "./models/NameModel";
import { weatherModel } from "./models/WeatherModel";
import { Provider } from "react-redux";

const store = init({ models: { nameModel, weatherModel } });

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
  }
}
