
import { call, put, takeLatest, CallEffect } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { sprintsAPI, BaseEntity } from '@mentor-mee/core-data';
import { PutPayload } from "../saga.types";
import { 
  fetchSprint, fetchSprintError, sprintFetched, 
  listSprints, listSprintsError, sprintsListed,
  sprintUpdated , updateSprintError, updateSprint,
  removeSprintError, removeSprint, sprintRemoved,
  listSprintByMentorId,
  listSprintByMentorIdError,
  sprintByMentorIdListed,
  listSprintBySprintTemplateId,
  listSprintBySprintTemplateIdError,
  sprintBySprintTemplateIdListed,
  listSprintByMenteeId,
  listSprintByMenteeIdError,
  sprintByMenteeIdListed,
} from './sprint.slice';
import { Sprint } from '@mentor-mee/core-types';

function* fetchSprintSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect<BaseEntity> | PutPayload<Sprint> | PutPayload<string>, void, Sprint> {
  try {
      const sprint = yield call(sprintsAPI.find, action.payload.id);
      yield put(sprintFetched(sprint));
  } catch (e: any) {
      yield put(fetchSprintError(e.message));
  }
}

function* listSprintsSaga(): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Sprint[]> {
  try {
      const sprints = yield call(sprintsAPI.load);
      yield put(sprintsListed(sprints));
  } catch (e: any) {
      yield put(listSprintsError(e.message));
  }
}

function* updateSprintSaga(action: PayloadAction<Sprint>): Generator<CallEffect<Sprint> | PutPayload<any> | PutPayload<string>, void, Sprint> { 
  try {
      const sprint = yield call(sprintsAPI.update, action.payload);
      yield put(sprintUpdated({id: sprint.id, changes: sprint }));
  } catch (e: any) {
      yield put(updateSprintError(e.message));
  }
}

function* removeSprintSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Sprint> {
  try {
      const sprint = yield call(sprintsAPI.remove, action.payload.id);
      yield put(sprintRemoved(sprint.id));
  } catch (e: any) {
      yield put(removeSprintError(e.message));
  }
}

function* listByMentorIdSaga(action: PayloadAction<{ mentorId: string }>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Sprint[]> {
  try {
      const sprint = yield call(sprintsAPI.loadBy, 'mentorId', action.payload.mentorId);
      yield put(sprintByMentorIdListed(sprint));
      
  } catch (e: any) {
      yield put(listSprintByMentorIdError(e.message));
  }
}

function* listBySprintTemplateIdSaga(action: PayloadAction<{ sprintTemplateId: string }>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Sprint[]> {
  try {
      const sprint = yield call(sprintsAPI.loadBy, 'sprintTemplateId', action.payload.sprintTemplateId);
      yield put(sprintBySprintTemplateIdListed(sprint));
      
  } catch (e: any) {
      yield put(listSprintBySprintTemplateIdError(e.message));
  }
}

function* listByMenteeIdSaga(action: PayloadAction<{ menteeId: string }>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Sprint[]> {
  try {
      const sprint = yield call(sprintsAPI.loadBy, 'menteeId', action.payload.menteeId);
      yield put(sprintByMenteeIdListed(sprint));
      
  } catch (e: any) {
      yield put(listSprintByMenteeIdError(e.message));
  }
}


function* sprintSaga() {
  yield takeLatest(fetchSprint, fetchSprintSaga);
  yield takeLatest(listSprints, listSprintsSaga);
  yield takeLatest(updateSprint, updateSprintSaga);
  yield takeLatest(removeSprint, removeSprintSaga);
  yield takeLatest(listSprintByMentorId, listByMentorIdSaga);
  yield takeLatest(listSprintBySprintTemplateId, listBySprintTemplateIdSaga);
  yield takeLatest(listSprintByMenteeId, listByMenteeIdSaga);
}

export default sprintSaga;

  