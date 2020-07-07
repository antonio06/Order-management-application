import React from "react";
import { ProductRowComponent } from "./product-row.component";
import { Product } from "order.vm";

interface Props {
  products: Product[];
  onChangeProduct: (product: Product) => void;
}

export const ProductListComponent: React.FunctionComponent<Props> = ({
  products,
  onChangeProduct,
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
            onChangeProduct={onChangeProduct}
          />
        ))}
      </tbody>
    </table>
  );
};
