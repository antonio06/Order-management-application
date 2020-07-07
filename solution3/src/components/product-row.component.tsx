import React from "react";
import { Product } from "order.vm";

interface Props {
  product: Product;
  onChangeProduct: (product: Product) => void;
}

export const ProductRowComponent: React.FunctionComponent<Props> = ({
  product,
  onChangeProduct,
}) => {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={product.isChecked}
          onChange={(event) =>
            onChangeProduct({
              ...product,
              isChecked: event.target.checked,
            })
          }
        />
      </td>
      <td>{product.isValid ? "Valido" : "Pendiente"}</td>
      <td>{product.description}</td>
      <td>
        <input
          name="amount"
          value={product.amount}
          onChange={(event) =>
            onChangeProduct({
              ...product,
              amount: Boolean(event.target.value)
                ? parseFloat(event.target.value)
                : 0.0,
            })
          }
        />
      </td>
    </tr>
  );
};
