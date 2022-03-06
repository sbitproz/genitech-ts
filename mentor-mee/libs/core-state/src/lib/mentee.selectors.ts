
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { menteeSliceAdapter, menteeSlice, MenteeSliceState, MENTEES_SLICE_FEATURE_KEY } from './mentee.slice';

const { selectAll, selectEntities } = menteeSliceAdapter.getSelectors();

export const getMenteesSliceState = (rootState: RootState): MenteeSliceState =>
  rootState[MENTEES_SLICE_FEATURE_KEY];

export const selectAllMenteesSlice = createSelector(
  getMenteesSliceState,
  selectAll
);

export const selectMenteesSliceEntities = createSelector(
  getMenteesSliceState,
  selectEntities
);

export default menteeSlice.reducer
