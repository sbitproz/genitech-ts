import { CurrentUser } from '@mentor-mee/core-types';  
import {
  createAction,
  createReducer,
} from '@reduxjs/toolkit'

export const setCurrentUser = createAction<Partial<CurrentUser>>('currentUser/setCurrentUser')

export const clearCurrentUser = createAction('currentUser/clearCurrentUser')

export const CURRENTUSER_FEATURE_KEY = 'currentUser';

const initialState: Partial<CurrentUser> = { };

const currentUserReducer = createReducer(initialState,
  (builder) => {
    builder
      .addCase(setCurrentUser, (state, action) => {
        return {...state, ...action.payload}
      })
      .addCase(clearCurrentUser, () => {
        return {}
      })
  }
)

export default currentUserReducer;