export interface Plant {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface CartItem {
  plant: Plant;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalCost: number;
}

export interface RootState {
  cart: CartState;
}
