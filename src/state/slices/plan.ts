import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Duration, Plan, PlanEnum } from '../models/Plan.model'

const initialState: Plan = {
    plan: PlanEnum.ARCADE,
    duration: Duration.MONTHLY,
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