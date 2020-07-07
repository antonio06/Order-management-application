export interface Order {
  number: number;
  provider: string;
  date: string;
  products: Product[];
}

export interface Product {
  id: string;
  isValid: boolean;
  description: string;
  isChecked: boolean;
  amount: number;
}

export const createEmptyOrder = (): Order => ({
  number: 0,
  provider: "",
  date: "",
  products: [],
});
