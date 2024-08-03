import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const existingProduct = state.products.find((product) => product.name === action.payload.name && product.price === action.payload.price);
            if (existingProduct) {
                existingProduct.qty += action.payload.qty;
            } else {
                state.products.push({ ...action.payload, qty: action.payload.qty });
            }
        },
        removeProduct: (state, action) => {
            const index = state.products.findIndex((product) => product.name === action.payload.name);
            if (index !== -1) {
                state.products.splice(index, 1);
            }
        },
        updateProductQty: (state, action) => {
            const product = state.products.find((product) => product.name === action.payload.name);
            if (product) {
                product.qty = action.payload.qty;
            }
        },
    },
});

export const { addProduct, removeProduct, updateProductQty } = cartSlice.actions;
export default cartSlice.reducer;