import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Plan } from '../models/Plan'

const initialState: Plan = {
    plan: '',
    duration: '',
}

export const planSlice = createSlice({
    name: 'Plan',
    initialState,
    reducers: {
        setPlan: (state: any, action: PayloadAction<Plan>) => {
            state.plan = action.payload.plan
            state.duration = action.payload.duration
        },
    },
})

export const { setPlan } = planSlice.actions

export default planSlice.reducer