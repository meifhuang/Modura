import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addToCart: (state, action) => {
        const { id, title, image, price } = action.payload;
        const exist = state.items.find(item => item.id === id)
        if (exist) { 
            exist.qty++
        }
        else {
            state.items.push({id, title, image, price, qty: 1})
        }
    },
    removeFromCart: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload)
    }
}
})



export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
