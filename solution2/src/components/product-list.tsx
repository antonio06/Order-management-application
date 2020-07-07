import React from "react";
import { ProductRowComponent } from "./product-row.component";
import { OrderContext } from "../order.context";

export const ProductListComponent: React.FunctionComponent = () => {
  const { order, onChangeProduct } = React.useContext(OrderContext);
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Estado</th>
          <th>Descripción</th>
          <th>Importe</th>
        </tr>
      </thead>
      <tbody>
        {order.products.map((product) => (
          <ProductRowComponent
            key={product.id}
            product={product}
            onChangeProduct={onChangeProduct}
          />
        ))}
      </tbody>
    </table>
  );
};
