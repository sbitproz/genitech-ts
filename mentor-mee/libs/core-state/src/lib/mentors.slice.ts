
import {
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  // PayloadAction,
} from '@reduxjs/toolkit';
    
export const Mentors_SLICE_FEATURE_KEY = 'mentors';

export interface MentorSliceEntity {
  id: number;
}

export interface MentorSliceState extends EntityState<MentorSliceEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const mentorSliceAdapter = createEntityAdapter<MentorSliceEntity>();

export const initialSliceState: MentorSliceState = mentorSliceAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: undefined,
});
  
export const MentorSlice = createSlice({
name: Mentors_SLICE_FEATURE_KEY,
initialState: initialSliceState,
reducers: {
  add: mentorSliceAdapter.addOne,
  remove: mentorSliceAdapter.removeOne,
},
});

const { selectAll, selectEntities } = mentorSliceAdapter.getSelectors();

export const getMentorsSliceState = (rootState: unknown): MentorSliceState =>
  rootState[Mentors_SLICE_FEATURE_KEY];

export const selectAllMentorsSlice = createSelector(
  getMentorsSliceState,
  selectAll
);

export const selectMentorsSliceEntities = createSelector(
  getMentorsSliceState,
  selectEntities
);
