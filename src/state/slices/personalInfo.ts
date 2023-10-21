import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersonalInfo } from '../models/PersonalInfo.model'

const initialState: PersonalInfo = {
    name: '',
    email: '',
    phone: '',
}

export const personalInfoSlice = createSlice({
    name: 'PersonalInfo',
    initialState,
    reducers: {
        setPersonalInfo: (state: any, action: PayloadAction<PersonalInfo>) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.phone = action.payload.phone
        },
    },
})

export const { setPersonalInfo } = personalInfoSlice.actions

export default personalInfoSlice.reducer