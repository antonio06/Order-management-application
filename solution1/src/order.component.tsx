import React from "react";
import { HeaderComponent, ProductListComponent } from "./components";
import { Order, Product } from "order.vm";

interface Props {
  order: Order;
  totalAmount: number;
  isValid: boolean;
  onSend: () => void;
  onValid: () => void;
  onInvalid: () => void;
  onChangeProduct: (product: Product) => void;
}

export const OrderComponent: React.FunctionComponent<Props> = ({
  order,
  totalAmount,
  isValid,
  onSend,
  onValid,
  onInvalid,
  onChangeProduct,
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
      <ProductListComponent
        products={order.products}
        onChangeProduct={onChangeProduct}
      />
    </>
  );
};
