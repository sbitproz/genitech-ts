
import {
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  // PayloadAction,
} from '@reduxjs/toolkit';
    
export const Mentees_SLICE_FEATURE_KEY = 'mentees';

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
name: Mentees_SLICE_FEATURE_KEY,
initialState: initialSliceState,
reducers: {
  add: mentorSliceAdapter.addOne,
  remove: mentorSliceAdapter.removeOne,
},
});

const { selectAll, selectEntities } = mentorSliceAdapter.getSelectors();

export const getMenteesSliceState = (rootState: unknown): MentorSliceState =>
  rootState[Mentees_SLICE_FEATURE_KEY];

export const selectAllMenteesSlice = createSelector(
  getMenteesSliceState,
  selectAll
);

export const selectMenteesSliceEntities = createSelector(
  getMenteesSliceState,
  selectEntities
);
