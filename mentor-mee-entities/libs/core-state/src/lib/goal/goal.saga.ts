
import { call, put, takeLatest, CallEffect } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { goalsAPI, BaseEntity } from '@mentor-mee/core-data';
import { PutPayload } from "../saga.types";
import { 
  fetchGoal, fetchGoalError, goalFetched, 
  listGoals, listGoalsError, goalsListed,
  goalUpdated , updateGoalError, updateGoal,
  removeGoalError, removeGoal, goalRemoved,
  listGoalBySprintId,
  listGoalBySprintIdError,
  goalBySprintIdListed,
} from './goal.slice';
import { Goal } from '@mentor-mee/core-types';

function* fetchGoalSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect<BaseEntity> | PutPayload<Goal> | PutPayload<string>, void, Goal> {
  try {
      const goal = yield call(goalsAPI.find, action.payload.id);
      yield put(goalFetched(goal));
  } catch (e: any) {
      yield put(fetchGoalError(e.message));
  }
}

function* listGoalsSaga(): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Goal[]> {
  try {
      const goals = yield call(goalsAPI.load);
      yield put(goalsListed(goals));
  } catch (e: any) {
      yield put(listGoalsError(e.message));
  }
}

function* updateGoalSaga(action: PayloadAction<Goal>): Generator<CallEffect<Goal> | PutPayload<any> | PutPayload<string>, void, Goal> { 
  try {
      const goal = yield call(goalsAPI.update, action.payload);
      yield put(goalUpdated({id: goal.id, changes: goal }));
  } catch (e: any) {
      yield put(updateGoalError(e.message));
  }
}

function* removeGoalSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Goal> {
  try {
      const goal = yield call(goalsAPI.remove, action.payload.id);
      yield put(goalRemoved(goal.id));
  } catch (e: any) {
      yield put(removeGoalError(e.message));
  }
}

function* listBySprintIdSaga(action: PayloadAction<{ sprintId: string }>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Goal[]> {
  try {
      const goal = yield call(goalsAPI.loadBy, 'sprintId', action.payload.sprintId);
      yield put(goalBySprintIdListed(goal));
      
  } catch (e: any) {
      yield put(listGoalBySprintIdError(e.message));
  }
}


function* goalSaga() {
  yield takeLatest(fetchGoal, fetchGoalSaga);
  yield takeLatest(listGoals, listGoalsSaga);
  yield takeLatest(updateGoal, updateGoalSaga);
  yield takeLatest(removeGoal, removeGoalSaga);
  yield takeLatest(listGoalBySprintId, listBySprintIdSaga);
}

export default goalSaga;

  