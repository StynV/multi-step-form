// store.ts
import { configureStore } from '@reduxjs/toolkit'
import personalInfoReducer from './slices/personalInfo'
import planReducer from './slices/plan'
import addOnsReducer from './slices/addOns'

export const store = configureStore({
    reducer: {
        personalInfo: personalInfoReducer,
        plan: planReducer,
        addOns: addOnsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;