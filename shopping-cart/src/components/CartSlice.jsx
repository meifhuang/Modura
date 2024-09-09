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
            console.log("it exists!")
            exist.qty++
        }
        else {
            console.log(image)
            state.items.push({id, title, image, price, qty: 1})
        }
    }
}
})



export const { addToCart} = CartSlice.actions;

export default CartSlice.reducer;
