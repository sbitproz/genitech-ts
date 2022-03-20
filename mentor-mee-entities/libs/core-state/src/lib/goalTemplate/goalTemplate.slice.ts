
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState
} from '@reduxjs/toolkit';
import { GoalTemplate } from '@mentor-mee/core-types';
    
export const GOALTEMPLATES_SLICE_FEATURE_KEY = 'goalTemplates';

export interface GoalTemplateSlice extends EntityState<GoalTemplate> {
  selectedId?: string | number; // which GoalTemplates record has been selected
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const goalTemplateSliceAdapter = createEntityAdapter<GoalTemplate>();

const initialState: GoalTemplateSlice = goalTemplateSliceAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: undefined,
});
  
export const goalTemplateSlice = createSlice({
  name: GOALTEMPLATES_SLICE_FEATURE_KEY,
  initialState: initialState,
  reducers: {
    goalTemplateAdded: goalTemplateSliceAdapter.addOne,
    goalTemplateRemoved: goalTemplateSliceAdapter.removeOne,
    goalTemplateUpdated: goalTemplateSliceAdapter.updateOne,
    goalTemplateFetched: goalTemplateSliceAdapter.upsertOne,
    goalTemplatesListed: goalTemplateSliceAdapter.upsertMany,
    goalTemplateByMentorIdListed: goalTemplateSliceAdapter.upsertMany,
    goalTemplateBySprintTemplateIdListed: goalTemplateSliceAdapter.upsertMany,
    goalTemplateByMenteeIdListed: goalTemplateSliceAdapter.upsertMany,
    removalAllGoalTemplate: goalTemplateSliceAdapter.removeAll,
  },
});

export default goalTemplateSlice.reducer;

export const { 
  goalTemplateAdded, 
  goalTemplateRemoved, 
  goalTemplateUpdated, 
  goalTemplatesListed, 
  goalTemplateFetched, 
  goalTemplateByMentorIdListed,
  goalTemplateBySprintTemplateIdListed,
  goalTemplateByMenteeIdListed,
} = goalTemplateSlice.actions;

export const addGoalTemplate = createAction<GoalTemplate>('goalTemplates/addGoalTemplate');

export const removeGoalTemplate = createAction<{id: string}>('goalTemplates/removeGoalTemplate');

export const updateGoalTemplate = createAction<GoalTemplate>('goalTemplates/updateGoalTemplate');

export const fetchGoalTemplate = createAction<{id: string}>('goalTemplates/fetchGoalTemplate');

export const listGoalTemplates = createAction('goalTemplates/listGoalTemplates');

export const addGoalTemplateError = createAction<string>('goalTemplates/addGoalTemplateError');

export const removeGoalTemplateError = createAction<string>('goalTemplates/removeGoalTemplateError');

export const updateGoalTemplateError = createAction<string>('goalTemplates/updateGoalTemplateError');

export const fetchGoalTemplateError = createAction<string>('goalTemplates/fetchGoalTemplateError');

export const listGoalTemplatesError = createAction<string>('goalTemplates/listGoalTemplatesError');

export const listGoalTemplateByMentorIdError = createAction<string>('goalTemplate/listGoalTemplateByMentorIdError');

export const listGoalTemplateByMentorId = createAction<{ mentorId: string}>('goalTemplate/listByMentorId')

export const listGoalTemplateBySprintTemplateIdError = createAction<string>('goalTemplate/listGoalTemplateBySprintTemplateIdError');

export const listGoalTemplateBySprintTemplateId = createAction<{ sprintTemplateId: string}>('goalTemplate/listBySprintTemplateId')

export const listGoalTemplateByMenteeIdError = createAction<string>('goalTemplate/listGoalTemplateByMenteeIdError');

export const listGoalTemplateByMenteeId = createAction<{ menteeId: string}>('goalTemplate/listByMenteeId')


