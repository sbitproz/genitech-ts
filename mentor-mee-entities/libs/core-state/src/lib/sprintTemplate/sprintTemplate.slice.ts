
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState
} from '@reduxjs/toolkit';
import { SprintTemplate } from '@mentor-mee/core-types';
    
export const SPRINTTEMPLATES_SLICE_FEATURE_KEY = 'sprintTemplates';

export interface SprintTemplateSlice extends EntityState<SprintTemplate> {
  selectedId?: string | number; // which SprintTemplates record has been selected
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const sprintTemplateSliceAdapter = createEntityAdapter<SprintTemplate>();

const initialState: SprintTemplateSlice = sprintTemplateSliceAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: undefined,
});
  
export const sprintTemplateSlice = createSlice({
  name: SPRINTTEMPLATES_SLICE_FEATURE_KEY,
  initialState: initialState,
  reducers: {
    sprintTemplateAdded: sprintTemplateSliceAdapter.addOne,
    sprintTemplateRemoved: sprintTemplateSliceAdapter.removeOne,
    sprintTemplateUpdated: sprintTemplateSliceAdapter.updateOne,
    sprintTemplateFetched: sprintTemplateSliceAdapter.upsertOne,
    sprintTemplatesListed: sprintTemplateSliceAdapter.upsertMany,
    sprintTemplateByMentorIdListed: sprintTemplateSliceAdapter.upsertMany,
    removalAllSprintTemplate: sprintTemplateSliceAdapter.removeAll,
  },
});

export default sprintTemplateSlice.reducer;

export const { 
  sprintTemplateAdded, 
  sprintTemplateRemoved, 
  sprintTemplateUpdated, 
  sprintTemplatesListed, 
  sprintTemplateFetched, 
  sprintTemplateByMentorIdListed,
} = sprintTemplateSlice.actions;

export const addSprintTemplate = createAction<SprintTemplate>('sprintTemplates/addSprintTemplate');

export const removeSprintTemplate = createAction<{id: string}>('sprintTemplates/removeSprintTemplate');

export const updateSprintTemplate = createAction<SprintTemplate>('sprintTemplates/updateSprintTemplate');

export const fetchSprintTemplate = createAction<{id: string}>('sprintTemplates/fetchSprintTemplate');

export const listSprintTemplates = createAction('sprintTemplates/listSprintTemplates');

export const addSprintTemplateError = createAction<string>('sprintTemplates/addSprintTemplateError');

export const removeSprintTemplateError = createAction<string>('sprintTemplates/removeSprintTemplateError');

export const updateSprintTemplateError = createAction<string>('sprintTemplates/updateSprintTemplateError');

export const fetchSprintTemplateError = createAction<string>('sprintTemplates/fetchSprintTemplateError');

export const listSprintTemplatesError = createAction<string>('sprintTemplates/listSprintTemplatesError');

export const listSprintTemplateByMentorIdError = createAction<string>('sprintTemplate/listSprintTemplateByMentorIdError');

export const listSprintTemplateByMentorId = createAction<{ mentorId: string}>('sprintTemplate/listByMentorId')


