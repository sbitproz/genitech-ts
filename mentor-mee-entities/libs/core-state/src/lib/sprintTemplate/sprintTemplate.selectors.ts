
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { sprintTemplateSliceAdapter, SprintTemplateSlice, SPRINTTEMPLATES_SLICE_FEATURE_KEY } from './sprintTemplate.slice';

const { selectAll, selectEntities, selectById: selectSprintTemplateById, selectIds: selectSprintTemplateByIds } = sprintTemplateSliceAdapter.getSelectors();

export { selectSprintTemplateById, selectSprintTemplateByIds };

export const getSprintTemplatesSlice = (rootState: RootState): SprintTemplateSlice =>
  rootState[SPRINTTEMPLATES_SLICE_FEATURE_KEY];

export const selectAllSprintTemplatesSlice = createSelector(
  getSprintTemplatesSlice,
  selectAll
);

export const selectSprintTemplateEntities = createSelector(
  getSprintTemplatesSlice,
  selectEntities
);
