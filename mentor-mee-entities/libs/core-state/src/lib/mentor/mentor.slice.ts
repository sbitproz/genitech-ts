
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState
} from '@reduxjs/toolkit';
import { Mentor } from '@mentor-mee/core-types';
    
export const MENTORS_SLICE_FEATURE_KEY = 'mentors';

export interface MentorSlice extends EntityState<Mentor> {
  selectedId?: string | number; // which Mentors record has been selected
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const mentorSliceAdapter = createEntityAdapter<Mentor>();

const initialState: MentorSlice = mentorSliceAdapter.getInitialState({
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
    removalAllMentor: mentorSliceAdapter.removeAll,
  },
});

export default mentorSlice.reducer;

export const { 
  mentorAdded, 
  mentorRemoved, 
  mentorUpdated, 
  mentorsListed, 
  mentorFetched, 
} = mentorSlice.actions;

export const addMentor = createAction<Mentor>('mentors/addMentor');

export const removeMentor = createAction<{id: string}>('mentors/removeMentor');

export const updateMentor = createAction<Mentor>('mentors/updateMentor');

export const fetchMentor = createAction<{id: string}>('mentors/fetchMentor');

export const listMentors = createAction('mentors/listMentors');

export const addMentorError = createAction<string>('mentors/addMentorError');

export const removeMentorError = createAction<string>('mentors/removeMentorError');

export const updateMentorError = createAction<string>('mentors/updateMentorError');

export const fetchMentorError = createAction<string>('mentors/fetchMentorError');

export const listMentorsError = createAction<string>('mentors/listMentorsError');


