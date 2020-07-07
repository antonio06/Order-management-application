import React from "react";
import { Order } from "order.vm";
const classes = require("./header.styles.scss");

interface Props {
  order: Order;
  totalAmount: number;
  isValid: boolean;
  onSend: () => void;
  onValid: () => void;
  onInvalid: () => void;
}

export const HeaderComponent: React.FunctionComponent<Props> = ({
  order,
  totalAmount,
  isValid,
  onSend,
  onValid,
  onInvalid,
}) => {
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
