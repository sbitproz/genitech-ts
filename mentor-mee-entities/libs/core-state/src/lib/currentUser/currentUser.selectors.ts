
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectCurrentUser = (state: RootState) => state.currentUser

export const selectCurrentUserName = createSelector(
  selectCurrentUser,
  ({ name }) => name
)
export const selectCurrentUserEmail = createSelector(
  selectCurrentUser,
  ({ email }) => email
)
export const selectCurrentUserLastLogin = createSelector(
  selectCurrentUser,
  ({ lastLogin }) => lastLogin
)
