import { Order } from "../order.vm";

export const orderMock: Order = {
  number: 123,
  provider: "Provider Test",
  date: "29/06/2020",
  products: [
    {
      id: "1",
      isValid: true,
      description: "Description 1",
      isChecked: false,
      amount: 300,
    },
    {
      id: "2",
      isValid: false,
      description: "Description 2",
      isChecked: false,
      amount: 12.5,
    },
    {
      id: "3",
      isValid: false,
      description: "Description 3",
      isChecked: false,
      amount: 60,
    },
  ],
};
