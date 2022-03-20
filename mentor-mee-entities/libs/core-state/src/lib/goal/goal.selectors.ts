
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { goalSliceAdapter, GoalSlice, GOALS_SLICE_FEATURE_KEY } from './goal.slice';

const { selectAll, selectEntities, selectById: selectGoalById, selectIds: selectGoalByIds } = goalSliceAdapter.getSelectors();

export { selectGoalById, selectGoalByIds };

export const getGoalsSlice = (rootState: RootState): GoalSlice =>
  rootState[GOALS_SLICE_FEATURE_KEY];

export const selectAllGoalsSlice = createSelector(
  getGoalsSlice,
  selectAll
);

export const selectGoalEntities = createSelector(
  getGoalsSlice,
  selectEntities
);
