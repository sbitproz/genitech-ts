
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { sprintSliceAdapter, SprintSlice, SPRINTS_SLICE_FEATURE_KEY } from './sprint.slice';

const { selectAll, selectEntities, selectById: selectSprintById, selectIds: selectSprintByIds } = sprintSliceAdapter.getSelectors();

export { selectSprintById, selectSprintByIds };

export const getSprintsSlice = (rootState: RootState): SprintSlice =>
  rootState[SPRINTS_SLICE_FEATURE_KEY];

export const selectAllSprintsSlice = createSelector(
  getSprintsSlice,
  selectAll
);

export const selectSprintEntities = createSelector(
  getSprintsSlice,
  selectEntities
);
