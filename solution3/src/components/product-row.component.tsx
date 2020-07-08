import React from "react";
import { Product, Action, actionIds } from "../order.vm";

interface Props {
  product: Product;
  dispatch: React.Dispatch<Action>;
}

export const ProductRowComponent: React.FunctionComponent<Props> = ({
  product,
  dispatch,
}) => {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={product.isChecked}
          onChange={(event) =>
            dispatch({
              type: actionIds.setProducts,
              payload: {
                ...product,
                isChecked: event.target.checked,
              },
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
            dispatch({
              type: actionIds.setProducts,
              payload: {
                ...product,
                amount: Boolean(event.target.value)
                  ? parseFloat(event.target.value)
                  : 0.0,
              },
            })
          }
        />
      </td>
    </tr>
  );
};
