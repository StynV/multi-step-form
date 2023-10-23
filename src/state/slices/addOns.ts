import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddOns } from '../models/AddOns.model'

const initialState: AddOns = {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
}

export const addOnsSlice = createSlice({
    name: 'AddOns',
    initialState,
    reducers: {
        setAddOns: (state: any, action: PayloadAction<AddOns>) => {
            state.onlineService = action.payload.onlineService
            state.largerStorage = action.payload.largerStorage
            state.customizableProfile = action.payload.customizableProfile
        },
    },
})

export const { setAddOns } = addOnsSlice.actions

export default addOnsSlice.reducer