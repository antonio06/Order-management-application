import React from "react";
import ReactDOM from "react-dom";
import { OrderContainer } from "./order.container";
import { OrderProvider } from "./order.context";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <ToastProvider>
    <OrderProvider>
      <OrderContainer />
    </OrderProvider>
  </ToastProvider>,
  document.getElementById("root")
);
