import React from "react";
import * as api from "./api";
import { Order, Product, createEmptyOrder } from "./order.vm";

interface Context {
  order: Order;
  totalAmount: number;
  isValid: boolean;
  onSend: () => void;
  onValid: () => void;
  onInvalid: () => void;
  onChangeProduct: (product: Product) => void;
}

export const OrderContext = React.createContext<Context>(null);

export const OrderProvider: React.FunctionComponent = ({ children }) => {
  const [order, setOrder] = React.useState<Order>(createEmptyOrder());

  React.useEffect(() => {
    api.getOrder().then((order) => {
      setOrder(order);
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
      alert("Pedido enviado");
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

    setOrder({ ...order, products: mappedProducts });
  };

  const handleInvalid = () => {
    const mappedProducts = order.products.map((p) =>
      p.isChecked ? setIsValidProduct(p, false) : p
    );

    setOrder({ ...order, products: mappedProducts });
  };

  const handleChangeProduct = (product: Product) => {
    const mappedProduct = order.products.map((p) =>
      product.id === p.id ? product : p
    );
    setOrder({ ...order, products: mappedProduct });
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        isValid: isValid(),
        totalAmount: getTotalAmount(),
        onSend: handleSend,
        onValid: handleValid,
        onInvalid: handleInvalid,
        onChangeProduct: handleChangeProduct,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
