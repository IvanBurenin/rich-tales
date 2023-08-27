'use client'

import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        itemsInFavorite: []
    },
    reducers: {
        setItemInFavorite: (state, action) => { 
            state.itemsInFavorite.push(action.payload)
        },
        deleteItemFromFavorite: (state, action) => {
            state.itemsInFavorite = state.itemsInFavorite.filter(watch => watch.parentId !== action.payload)
        }
    }
})

export const { setItemInFavorite, deleteItemFromFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer