
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState,
  // PayloadAction,
} from '@reduxjs/toolkit';
import { Sprint } from '@mentor-mee/core-types';
    
export const SPRINTS_SLICE_FEATURE_KEY = 'sprints';

export interface SprintSliceState extends EntityState<Sprint> {
  selectedId?: string | number; // which Sprints record has been selected
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const sprintSliceAdapter = createEntityAdapter<Sprint>();

const initialState: SprintSliceState = sprintSliceAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: undefined,
});
  
export const sprintSlice = createSlice({
  name: SPRINTS_SLICE_FEATURE_KEY,
  initialState: initialState,
  reducers: {
    sprintAdded: sprintSliceAdapter.addOne,
    sprintRemoved: sprintSliceAdapter.removeOne,
    sprintUpdated: sprintSliceAdapter.updateOne,
    sprintFetched: sprintSliceAdapter.upsertOne,
    sprintsListed: sprintSliceAdapter.upsertMany,    
  },
});

export default sprintSlice.reducer;

export const { sprintAdded, sprintRemoved, sprintUpdated, sprintsListed, sprintFetched } = sprintSlice.actions;

export const addSprint = createAction<Sprint>('SPRINT/ADD');

export const removeSprint = createAction<Sprint>('SPRINT/REMOVE');

export const updateSprint = createAction<Sprint>('SPRINT/UPDATE');

export const fetchSprint = createAction<Sprint>('SPRINT/FETCH');

export const listSprints = createAction<Sprint>('SPRINT/LIST');




