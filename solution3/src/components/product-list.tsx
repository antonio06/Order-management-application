import React from "react";
import { ProductRowComponent } from "./product-row.component";
import { Product, Action } from "../order.vm";

interface Props {
  products: Product[];
  dispatch: React.Dispatch<Action>;
}

export const ProductListComponent: React.FunctionComponent<Props> = ({
  products,
  dispatch,
}) => {
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
        {products.map((product) => (
          <ProductRowComponent
            key={product.id}
            product={product}
            dispatch={dispatch}
          />
        ))}
      </tbody>
    </table>
  );
};
