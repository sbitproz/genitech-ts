
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { sprintSliceAdapter, sprintSlice, SprintSliceState, SPRINTS_SLICE_FEATURE_KEY } from './sprint.slice';

const { selectAll, selectEntities } = sprintSliceAdapter.getSelectors();

export const getSprintsSliceState = (rootState: RootState): SprintSliceState =>
  rootState[SPRINTS_SLICE_FEATURE_KEY];

export const selectAllSprintsSlice = createSelector(
  getSprintsSliceState,
  selectAll
);

export const selectSprintsSliceEntities = createSelector(
  getSprintsSliceState,
  selectEntities
);

export default sprintSlice.reducer
