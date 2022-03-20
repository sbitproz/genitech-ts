
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState
} from '@reduxjs/toolkit';
import { Sprint } from '@mentor-mee/core-types';
    
export const SPRINTS_SLICE_FEATURE_KEY = 'sprints';

export interface SprintSlice extends EntityState<Sprint> {
  selectedId?: string | number; // which Sprints record has been selected
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const sprintSliceAdapter = createEntityAdapter<Sprint>();

const initialState: SprintSlice = sprintSliceAdapter.getInitialState({
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
    sprintByMentorIdListed: sprintSliceAdapter.upsertMany,
    sprintBySprintTemplateIdListed: sprintSliceAdapter.upsertMany,
    sprintByMenteeIdListed: sprintSliceAdapter.upsertMany,
    removalAllSprint: sprintSliceAdapter.removeAll,
  },
});

export default sprintSlice.reducer;

export const { 
  sprintAdded, 
  sprintRemoved, 
  sprintUpdated, 
  sprintsListed, 
  sprintFetched, 
  sprintByMentorIdListed,
  sprintBySprintTemplateIdListed,
  sprintByMenteeIdListed,
} = sprintSlice.actions;

export const addSprint = createAction<Sprint>('sprints/addSprint');

export const removeSprint = createAction<{id: string}>('sprints/removeSprint');

export const updateSprint = createAction<Sprint>('sprints/updateSprint');

export const fetchSprint = createAction<{id: string}>('sprints/fetchSprint');

export const listSprints = createAction('sprints/listSprints');

export const addSprintError = createAction<string>('sprints/addSprintError');

export const removeSprintError = createAction<string>('sprints/removeSprintError');

export const updateSprintError = createAction<string>('sprints/updateSprintError');

export const fetchSprintError = createAction<string>('sprints/fetchSprintError');

export const listSprintsError = createAction<string>('sprints/listSprintsError');

export const listSprintByMentorIdError = createAction<string>('sprint/listSprintByMentorIdError');

export const listSprintByMentorId = createAction<{ mentorId: string}>('sprint/listByMentorId')

export const listSprintBySprintTemplateIdError = createAction<string>('sprint/listSprintBySprintTemplateIdError');

export const listSprintBySprintTemplateId = createAction<{ sprintTemplateId: string}>('sprint/listBySprintTemplateId')

export const listSprintByMenteeIdError = createAction<string>('sprint/listSprintByMenteeIdError');

export const listSprintByMenteeId = createAction<{ menteeId: string}>('sprint/listByMenteeId')


