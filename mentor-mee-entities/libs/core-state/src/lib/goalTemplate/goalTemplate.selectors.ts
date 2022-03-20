
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { goalTemplateSliceAdapter, GoalTemplateSlice, GOALTEMPLATES_SLICE_FEATURE_KEY } from './goalTemplate.slice';

const { selectAll, selectEntities, selectById: selectGoalTemplateById, selectIds: selectGoalTemplateByIds } = goalTemplateSliceAdapter.getSelectors();

export { selectGoalTemplateById, selectGoalTemplateByIds };

export const getGoalTemplatesSlice = (rootState: RootState): GoalTemplateSlice =>
  rootState[GOALTEMPLATES_SLICE_FEATURE_KEY];

export const selectAllGoalTemplatesSlice = createSelector(
  getGoalTemplatesSlice,
  selectAll
);

export const selectGoalTemplateEntities = createSelector(
  getGoalTemplatesSlice,
  selectEntities
);
