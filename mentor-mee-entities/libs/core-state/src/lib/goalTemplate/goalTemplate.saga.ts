
import { call, put, takeLatest, CallEffect } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { goalTemplatesAPI, BaseEntity } from '@mentor-mee/core-data';
import { PutPayload } from "../saga.types";
import { 
  fetchGoalTemplate, fetchGoalTemplateError, goalTemplateFetched, 
  listGoalTemplates, listGoalTemplatesError, goalTemplatesListed,
  goalTemplateUpdated , updateGoalTemplateError, updateGoalTemplate,
  removeGoalTemplateError, removeGoalTemplate, goalTemplateRemoved,
  listGoalTemplateByMentorId,
  listGoalTemplateByMentorIdError,
  goalTemplateByMentorIdListed,
  listGoalTemplateBySprintTemplateId,
  listGoalTemplateBySprintTemplateIdError,
  goalTemplateBySprintTemplateIdListed,
  listGoalTemplateByMenteeId,
  listGoalTemplateByMenteeIdError,
  goalTemplateByMenteeIdListed,
} from './goalTemplate.slice';
import { GoalTemplate } from '@mentor-mee/core-types';

function* fetchGoalTemplateSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect<BaseEntity> | PutPayload<GoalTemplate> | PutPayload<string>, void, GoalTemplate> {
  try {
      const goalTemplate = yield call(goalTemplatesAPI.find, action.payload.id);
      yield put(goalTemplateFetched(goalTemplate));
  } catch (e: any) {
      yield put(fetchGoalTemplateError(e.message));
  }
}

function* listGoalTemplatesSaga(): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, GoalTemplate[]> {
  try {
      const goalTemplates = yield call(goalTemplatesAPI.load);
      yield put(goalTemplatesListed(goalTemplates));
  } catch (e: any) {
      yield put(listGoalTemplatesError(e.message));
  }
}

function* updateGoalTemplateSaga(action: PayloadAction<GoalTemplate>): Generator<CallEffect<GoalTemplate> | PutPayload<any> | PutPayload<string>, void, GoalTemplate> { 
  try {
      const goalTemplate = yield call(goalTemplatesAPI.update, action.payload);
      yield put(goalTemplateUpdated({id: goalTemplate.id, changes: goalTemplate }));
  } catch (e: any) {
      yield put(updateGoalTemplateError(e.message));
  }
}

function* removeGoalTemplateSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, GoalTemplate> {
  try {
      const goalTemplate = yield call(goalTemplatesAPI.remove, action.payload.id);
      yield put(goalTemplateRemoved(goalTemplate.id));
  } catch (e: any) {
      yield put(removeGoalTemplateError(e.message));
  }
}

function* listByMentorIdSaga(action: PayloadAction<{ mentorId: string }>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, GoalTemplate[]> {
  try {
      const goalTemplate = yield call(goalTemplatesAPI.loadBy, 'mentorId', action.payload.mentorId);
      yield put(goalTemplateByMentorIdListed(goalTemplate));
      
  } catch (e: any) {
      yield put(listGoalTemplateByMentorIdError(e.message));
  }
}

function* listBySprintTemplateIdSaga(action: PayloadAction<{ sprintTemplateId: string }>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, GoalTemplate[]> {
  try {
      const goalTemplate = yield call(goalTemplatesAPI.loadBy, 'sprintTemplateId', action.payload.sprintTemplateId);
      yield put(goalTemplateBySprintTemplateIdListed(goalTemplate));
      
  } catch (e: any) {
      yield put(listGoalTemplateBySprintTemplateIdError(e.message));
  }
}

function* listByMenteeIdSaga(action: PayloadAction<{ menteeId: string }>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, GoalTemplate[]> {
  try {
      const goalTemplate = yield call(goalTemplatesAPI.loadBy, 'menteeId', action.payload.menteeId);
      yield put(goalTemplateByMenteeIdListed(goalTemplate));
      
  } catch (e: any) {
      yield put(listGoalTemplateByMenteeIdError(e.message));
  }
}


function* goalTemplateSaga() {
  yield takeLatest(fetchGoalTemplate, fetchGoalTemplateSaga);
  yield takeLatest(listGoalTemplates, listGoalTemplatesSaga);
  yield takeLatest(updateGoalTemplate, updateGoalTemplateSaga);
  yield takeLatest(removeGoalTemplate, removeGoalTemplateSaga);
  yield takeLatest(listGoalTemplateByMentorId, listByMentorIdSaga);
  yield takeLatest(listGoalTemplateBySprintTemplateId, listBySprintTemplateIdSaga);
  yield takeLatest(listGoalTemplateByMenteeId, listByMenteeIdSaga);
}

export default goalTemplateSaga;

  