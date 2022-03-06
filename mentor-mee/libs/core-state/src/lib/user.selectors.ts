
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userSliceAdapter, userSlice, UserSliceState, USERS_SLICE_FEATURE_KEY } from './user.slice';

const { selectAll, selectEntities } = userSliceAdapter.getSelectors();

export const getUsersSliceState = (rootState: RootState): UserSliceState =>
  rootState[USERS_SLICE_FEATURE_KEY];

export const selectAllUsersSlice = createSelector(
  getUsersSliceState,
  selectAll
);

export const selectUsersSliceEntities = createSelector(
  getUsersSliceState,
  selectEntities
);

export default userSlice.reducer
