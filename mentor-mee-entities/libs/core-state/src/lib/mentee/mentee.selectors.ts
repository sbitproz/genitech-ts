
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { menteeSliceAdapter, MenteeSlice, MENTEES_SLICE_FEATURE_KEY } from './mentee.slice';

const { selectAll, selectEntities, selectById: selectMenteeById, selectIds: selectMenteeByIds } = menteeSliceAdapter.getSelectors();

export { selectMenteeById, selectMenteeByIds };

export const getMenteesSlice = (rootState: RootState): MenteeSlice =>
  rootState[MENTEES_SLICE_FEATURE_KEY];

export const selectAllMenteesSlice = createSelector(
  getMenteesSlice,
  selectAll
);

export const selectMenteeEntities = createSelector(
  getMenteesSlice,
  selectEntities
);
