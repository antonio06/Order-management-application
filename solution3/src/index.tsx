import React from "react";
import ReactDOM from "react-dom";
import { OrderContainer } from "./order.container";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <ToastProvider>
    <OrderContainer />
  </ToastProvider>,
  document.getElementById("root")
);
