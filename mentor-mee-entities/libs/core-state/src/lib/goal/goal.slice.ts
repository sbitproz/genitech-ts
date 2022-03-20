
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState
} from '@reduxjs/toolkit';
import { Goal } from '@mentor-mee/core-types';
    
export const GOALS_SLICE_FEATURE_KEY = 'goals';

export interface GoalSlice extends EntityState<Goal> {
  selectedId?: string | number; // which Goals record has been selected
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const goalSliceAdapter = createEntityAdapter<Goal>();

const initialState: GoalSlice = goalSliceAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: undefined,
});
  
export const goalSlice = createSlice({
  name: GOALS_SLICE_FEATURE_KEY,
  initialState: initialState,
  reducers: {
    goalAdded: goalSliceAdapter.addOne,
    goalRemoved: goalSliceAdapter.removeOne,
    goalUpdated: goalSliceAdapter.updateOne,
    goalFetched: goalSliceAdapter.upsertOne,
    goalsListed: goalSliceAdapter.upsertMany,
    goalBySprintIdListed: goalSliceAdapter.upsertMany,
    removalAllGoal: goalSliceAdapter.removeAll,
  },
});

export default goalSlice.reducer;

export const { 
  goalAdded, 
  goalRemoved, 
  goalUpdated, 
  goalsListed, 
  goalFetched, 
  goalBySprintIdListed,
} = goalSlice.actions;

export const addGoal = createAction<Goal>('goals/addGoal');

export const removeGoal = createAction<{id: string}>('goals/removeGoal');

export const updateGoal = createAction<Goal>('goals/updateGoal');

export const fetchGoal = createAction<{id: string}>('goals/fetchGoal');

export const listGoals = createAction('goals/listGoals');

export const addGoalError = createAction<string>('goals/addGoalError');

export const removeGoalError = createAction<string>('goals/removeGoalError');

export const updateGoalError = createAction<string>('goals/updateGoalError');

export const fetchGoalError = createAction<string>('goals/fetchGoalError');

export const listGoalsError = createAction<string>('goals/listGoalsError');

export const listGoalBySprintIdError = createAction<string>('goal/listGoalBySprintIdError');

export const listGoalBySprintId = createAction<{ sprintId: string}>('goal/listBySprintId')


