
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { userSliceAdapter, UserSlice, USERS_SLICE_FEATURE_KEY } from './user.slice';

const { selectAll, selectEntities, selectById: selectUserById, selectIds: selectUserByIds } = userSliceAdapter.getSelectors();

export { selectUserById, selectUserByIds };

export const getUsersSlice = (rootState: RootState): UserSlice =>
  rootState[USERS_SLICE_FEATURE_KEY];

export const selectAllUsersSlice = createSelector(
  getUsersSlice,
  selectAll
);

export const selectUserEntities = createSelector(
  getUsersSlice,
  selectEntities
);
