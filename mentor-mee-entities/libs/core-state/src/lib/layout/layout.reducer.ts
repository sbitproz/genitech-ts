import { Layout } from '@mentor-mee/core-types';  
import {
  createAction,
  createReducer,
} from '@reduxjs/toolkit'

export const setLayout = createAction<Partial<Layout>>('layouts/setLayout')

export const clearLayout = createAction('layouts/clearLayout')

export const LAYOUTS_FEATURE_KEY = 'layouts';

const initialState: Partial<Layout> = { };

const layoutReducer = createReducer(initialState,
  (builder) => {
    builder
      .addCase(setLayout, (state, action) => {
        return {...state, ...action.payload}
      })
      .addCase(clearLayout, () => {
        return {}
      })
  }
)

export default layoutReducer;