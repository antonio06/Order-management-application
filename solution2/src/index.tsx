import React from "react";
import ReactDOM from "react-dom";
import { OrderContainer } from "./order.container";
import { OrderProvider } from "./order.context";

ReactDOM.render(
  <OrderProvider>
    <OrderContainer />
  </OrderProvider>,
  document.getElementById("root")
);
