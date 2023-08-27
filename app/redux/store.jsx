'use client'

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer'
import favoriteReducer from './favorites/reducer'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorite: favoriteReducer
    }
})