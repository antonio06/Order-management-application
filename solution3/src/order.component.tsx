import React from "react";
import { HeaderComponent, ProductListComponent } from "./components";
import { Order, Action } from "./order.vm";

interface Props {
  order: Order;
  totalAmount: number;
  isValid: boolean;
  onSend: () => void;
  onValid: () => void;
  onInvalid: () => void;
  dispatch: React.Dispatch<Action>;
}

export const OrderComponent: React.FunctionComponent<Props> = ({
  order,
  totalAmount,
  isValid,
  onSend,
  onValid,
  onInvalid,
  dispatch,
}) => {
  return (
    <>
      <HeaderComponent
        order={order}
        totalAmount={totalAmount}
        isValid={isValid}
        onSend={onSend}
        onValid={onValid}
        onInvalid={onInvalid}
      />
      <ProductListComponent products={order.products} dispatch={dispatch} />
    </>
  );
};
