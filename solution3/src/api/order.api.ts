import { Order } from "../order.vm";
import { orderMock } from "./order.mock.data";

export const getOrder = (): Promise<Order> => {
  return Promise.resolve(orderMock);
};
