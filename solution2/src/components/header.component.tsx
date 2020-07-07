import React from "react";
import { OrderContext } from "../order.context";
const classes = require("./header.styles.scss");

export const HeaderComponent: React.FunctionComponent = () => {
  const {
    order,
    isValid,
    onSend,
    onValid,
    onInvalid,
    totalAmount,
  } = React.useContext(OrderContext);

  return (
    <div className={classes.root}>
      <div className={classes.dataHeader}>
        <span>Número</span>
        <input type="text" value={order.number} disabled />
        <span>Proveedor</span>
        <input type="text" value={order.provider} disabled />
        <span>Fecha</span>
        <input type="text" value={order.date} disabled />
        <span>Importe total</span>
        <input type="number" value={totalAmount} disabled />
      </div>
      <div className={classes.buttonContainer}>
        <button disabled={!isValid} onClick={onSend}>
          Enviar
        </button>
        <button onClick={onValid}>Validar</button>
        <button onClick={onInvalid}>Invalidar</button>
      </div>
    </div>
  );
};
