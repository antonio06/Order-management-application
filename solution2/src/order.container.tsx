import React from "react";
import { OrderComponent } from "./order.component";
import { OrderContext } from "./order.context";

export const OrderContainer: React.FunctionComponent = () => {
  const {
    order,
    isValid,
    onSend,
    onValid,
    onInvalid,
    onChangeProduct,
    totalAmount,
  } = React.useContext(OrderContext);

  return (
    <OrderComponent
      order={order}
      isValid={isValid}
      totalAmount={totalAmount}
      onSend={onSend}
      onValid={onValid}
      onInvalid={onInvalid}
      onChangeProduct={onChangeProduct}
    />
  );
};
