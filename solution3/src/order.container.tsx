import React from "react";
import { OrderComponent } from "./order.component";
import * as api from "./api";
import {
  Order,
  createEmptyOrder,
  Product,
  Action,
  actionIds,
} from "./order.vm";
import { useToasts } from "react-toast-notifications";

export const OrderContainer: React.FunctionComponent = () => {
  const orderReducer = (order: Order, action: Action): Order => {
    switch (action.type) {
      case actionIds.setOrder:
        return {
          ...action.payload,
        };
      case actionIds.setProducts:
        const mappedProduct = order.products.map((p) =>
          action.payload.id === p.id ? action.payload : p
        );
        return {
          ...order,
          products: mappedProduct,
        };
      default:
        return order;
    }
  };

  const [order, dispatch] = React.useReducer(orderReducer, createEmptyOrder());

  const { addToast } = useToasts();

  React.useEffect(() => {
    api.getOrder().then((order) => {
      dispatch({ type: actionIds.setOrder, payload: order });
    });
  }, []);

  const isValid = () => {
    return order.products.every((product) => product.isValid);
  };

  const getTotalAmount = () => {
    return order.products.reduce((acc, product) => product.amount + acc, 0);
  };

  const handleSend = () => {
    if (isValid()) {
      addToast("Pedido enviado", { appearance: "success" });
    }
  };

  const setIsValidProduct = (product: Product, isValid: boolean): Product => ({
    ...product,
    isValid,
  });

  const handleValid = () => {
    const mappedProducts = order.products.map((p) =>
      p.isChecked && !p.isValid ? setIsValidProduct(p, true) : p
    );

    dispatch({
      type: actionIds.setOrder,
      payload: { ...order, products: mappedProducts },
    });
  };

  const handleInvalid = () => {
    const mappedProducts = order.products.map((p) =>
      p.isChecked ? setIsValidProduct(p, false) : p
    );

    dispatch({
      type: actionIds.setOrder,
      payload: { ...order, products: mappedProducts },
    });
  };

  return (
    <OrderComponent
      order={order}
      isValid={isValid()}
      totalAmount={getTotalAmount()}
      onSend={handleSend}
      onValid={handleValid}
      onInvalid={handleInvalid}
      dispatch={dispatch}
    />
  );
};
