import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Plant, CartItem } from './types';

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Plant>) => {
      const existingItem = state.items.find(item => item.plant.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          plant: action.payload,
          quantity: 1,
        });
      }
      
      state.totalItems += 1;
      state.totalCost += action.payload.price;
    },
    
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.plant.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalCost += item.plant.price;
      }
    },
    
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.plant.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalItems -= 1;
        state.totalCost -= item.plant.price;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter(cartItem => cartItem.plant.id !== action.payload);
        state.totalItems -= 1;
        state.totalCost -= item.plant.price;
      }
    },
    
    removeFromCart: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.plant.id === action.payload);
      if (item) {
        state.totalItems -= item.quantity;
        state.totalCost -= item.plant.price * item.quantity;
        state.items = state.items.filter(cartItem => cartItem.plant.id !== action.payload);
      }
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalCost = 0;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
