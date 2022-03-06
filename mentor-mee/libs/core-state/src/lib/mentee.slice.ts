
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState,
  // PayloadAction,
} from '@reduxjs/toolkit';
import { Mentee } from '@mentor-mee/core-types';
    
export const MENTEES_SLICE_FEATURE_KEY = 'mentees';

export interface MenteeSliceState extends EntityState<Mentee> {
  selectedId?: string | number; // which Mentees record has been selected
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const menteeSliceAdapter = createEntityAdapter<Mentee>();

const initialState: MenteeSliceState = menteeSliceAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: undefined,
});
  
export const menteeSlice = createSlice({
  name: MENTEES_SLICE_FEATURE_KEY,
  initialState: initialState,
  reducers: {
    menteeAdded: menteeSliceAdapter.addOne,
    menteeRemoved: menteeSliceAdapter.removeOne,
    menteeUpdated: menteeSliceAdapter.updateOne,
    menteeFetched: menteeSliceAdapter.upsertOne,
    menteesListed: menteeSliceAdapter.upsertMany,    
  },
});

export default menteeSlice.reducer;

export const { menteeAdded, menteeRemoved, menteeUpdated, menteesListed, menteeFetched } = menteeSlice.actions;

export const addMentee = createAction<Mentee>('MENTEE/ADD');

export const removeMentee = createAction<Mentee>('MENTEE/REMOVE');

export const updateMentee = createAction<Mentee>('MENTEE/UPDATE');

export const fetchMentee = createAction<Mentee>('MENTEE/FETCH');

export const listMentees = createAction<Mentee>('MENTEE/LIST');




