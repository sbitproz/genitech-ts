
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { mentorSliceAdapter, mentorSlice, MentorSliceState, MENTORS_SLICE_FEATURE_KEY } from './mentor.slice';

const { selectAll, selectEntities } = mentorSliceAdapter.getSelectors();

export const getMentorsSliceState = (rootState: RootState): MentorSliceState =>
  rootState[MENTORS_SLICE_FEATURE_KEY];

export const selectAllMentorsSlice = createSelector(
  getMentorsSliceState,
  selectAll
);

export const selectMentorsSliceEntities = createSelector(
  getMentorsSliceState,
  selectEntities
);

export default mentorSlice.reducer
