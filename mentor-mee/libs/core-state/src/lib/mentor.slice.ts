
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState,
  // PayloadAction,
} from '@reduxjs/toolkit';
import { Mentor } from '@mentor-mee/core-types';
    
export const MENTORS_SLICE_FEATURE_KEY = 'mentors';

export interface MentorSliceState extends EntityState<Mentor> {
  selectedId?: string | number; // which Mentors record has been selected
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const mentorSliceAdapter = createEntityAdapter<Mentor>();

const initialState: MentorSliceState = mentorSliceAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: undefined,
});
  
export const mentorSlice = createSlice({
  name: MENTORS_SLICE_FEATURE_KEY,
  initialState: initialState,
  reducers: {
    mentorAdded: mentorSliceAdapter.addOne,
    mentorRemoved: mentorSliceAdapter.removeOne,
    mentorUpdated: mentorSliceAdapter.updateOne,
    mentorFetched: mentorSliceAdapter.upsertOne,
    mentorsListed: mentorSliceAdapter.upsertMany,    
  },
});

export default mentorSlice.reducer;

export const { mentorAdded, mentorRemoved, mentorUpdated, mentorsListed, mentorFetched } = mentorSlice.actions;

export const addMentor = createAction<Mentor>('MENTOR/ADD');

export const removeMentor = createAction<Mentor>('MENTOR/REMOVE');

export const updateMentor = createAction<Mentor>('MENTOR/UPDATE');

export const fetchMentor = createAction<Mentor>('MENTOR/FETCH');

export const listMentors = createAction<Mentor>('MENTOR/LIST');




