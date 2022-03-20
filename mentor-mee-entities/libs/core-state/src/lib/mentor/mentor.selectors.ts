
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { mentorSliceAdapter, MentorSlice, MENTORS_SLICE_FEATURE_KEY } from './mentor.slice';

const { selectAll, selectEntities, selectById: selectMentorById, selectIds: selectMentorByIds } = mentorSliceAdapter.getSelectors();

export { selectMentorById, selectMentorByIds };

export const getMentorsSlice = (rootState: RootState): MentorSlice =>
  rootState[MENTORS_SLICE_FEATURE_KEY];

export const selectAllMentorsSlice = createSelector(
  getMentorsSlice,
  selectAll
);

export const selectMentorEntities = createSelector(
  getMentorsSlice,
  selectEntities
);
