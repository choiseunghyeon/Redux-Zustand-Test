import { createReducer, createAction, configureStore } from "@reduxjs/toolkit"

export const doNothing = createAction("doNothing")
export const addToFirst = createAction("addToFirst")
export const addToSecond = createAction("addToSecond")
interface IState {
  firstNumber: number
  secondNumber: number
  numbers: number[]
}

const initialState = {
  firstNumber: 0,
  secondNumber: 0,
  numbers: [],
}

const valuesReducer = createReducer<IState>(initialState, builder => {
  builder.addCase(doNothing, state => ({ ...state }))
  builder.addCase(addToFirst, state => {
    state.firstNumber++
    state.numbers = [state.firstNumber]
  })
  builder.addCase(addToSecond, state => {
    state.secondNumber++
    state.numbers = [state.firstNumber]
  })
})

export const store = configureStore({
  reducer: valuesReducer,
})

export type RootState = ReturnType<typeof store.getState>
