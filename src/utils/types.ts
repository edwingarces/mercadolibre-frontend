export type ResponseParams = {
  status: number;
  message: string;
  success: boolean;
  data?: any;
}

export interface ItemType {
  id: string;
  title: string;
  price: {
      amount: number;
      currency: string;
      decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  description?: string;
}
