
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState
} from '@reduxjs/toolkit';
import { Mentee } from '@mentor-mee/core-types';
    
export const MENTEES_SLICE_FEATURE_KEY = 'mentees';

export interface MenteeSlice extends EntityState<Mentee> {
  selectedId?: string | number; // which Mentees record has been selected
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const menteeSliceAdapter = createEntityAdapter<Mentee>();

const initialState: MenteeSlice = menteeSliceAdapter.getInitialState({
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
    removalAllMentee: menteeSliceAdapter.removeAll,
  },
});

export default menteeSlice.reducer;

export const { 
  menteeAdded, 
  menteeRemoved, 
  menteeUpdated, 
  menteesListed, 
  menteeFetched, 
} = menteeSlice.actions;

export const addMentee = createAction<Mentee>('mentees/addMentee');

export const removeMentee = createAction<{id: string}>('mentees/removeMentee');

export const updateMentee = createAction<Mentee>('mentees/updateMentee');

export const fetchMentee = createAction<{id: string}>('mentees/fetchMentee');

export const listMentees = createAction('mentees/listMentees');

export const addMenteeError = createAction<string>('mentees/addMenteeError');

export const removeMenteeError = createAction<string>('mentees/removeMenteeError');

export const updateMenteeError = createAction<string>('mentees/updateMenteeError');

export const fetchMenteeError = createAction<string>('mentees/fetchMenteeError');

export const listMenteesError = createAction<string>('mentees/listMenteesError');


