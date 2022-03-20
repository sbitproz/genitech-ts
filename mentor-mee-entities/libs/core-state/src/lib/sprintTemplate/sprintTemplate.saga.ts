
import { call, put, takeLatest, CallEffect } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { sprintTemplatesAPI, BaseEntity } from '@mentor-mee/core-data';
import { PutPayload } from "../saga.types";
import { 
  fetchSprintTemplate, fetchSprintTemplateError, sprintTemplateFetched, 
  listSprintTemplates, listSprintTemplatesError, sprintTemplatesListed,
  sprintTemplateUpdated , updateSprintTemplateError, updateSprintTemplate,
  removeSprintTemplateError, removeSprintTemplate, sprintTemplateRemoved,
  listSprintTemplateByMentorId,
  listSprintTemplateByMentorIdError,
  sprintTemplateByMentorIdListed,
} from './sprintTemplate.slice';
import { SprintTemplate } from '@mentor-mee/core-types';

function* fetchSprintTemplateSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect<BaseEntity> | PutPayload<SprintTemplate> | PutPayload<string>, void, SprintTemplate> {
  try {
      const sprintTemplate = yield call(sprintTemplatesAPI.find, action.payload.id);
      yield put(sprintTemplateFetched(sprintTemplate));
  } catch (e: any) {
      yield put(fetchSprintTemplateError(e.message));
  }
}

function* listSprintTemplatesSaga(): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, SprintTemplate[]> {
  try {
      const sprintTemplates = yield call(sprintTemplatesAPI.load);
      yield put(sprintTemplatesListed(sprintTemplates));
  } catch (e: any) {
      yield put(listSprintTemplatesError(e.message));
  }
}

function* updateSprintTemplateSaga(action: PayloadAction<SprintTemplate>): Generator<CallEffect<SprintTemplate> | PutPayload<any> | PutPayload<string>, void, SprintTemplate> { 
  try {
      const sprintTemplate = yield call(sprintTemplatesAPI.update, action.payload);
      yield put(sprintTemplateUpdated({id: sprintTemplate.id, changes: sprintTemplate }));
  } catch (e: any) {
      yield put(updateSprintTemplateError(e.message));
  }
}

function* removeSprintTemplateSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, SprintTemplate> {
  try {
      const sprintTemplate = yield call(sprintTemplatesAPI.remove, action.payload.id);
      yield put(sprintTemplateRemoved(sprintTemplate.id));
  } catch (e: any) {
      yield put(removeSprintTemplateError(e.message));
  }
}

function* listByMentorIdSaga(action: PayloadAction<{ mentorId: string }>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, SprintTemplate[]> {
  try {
      const sprintTemplate = yield call(sprintTemplatesAPI.loadBy, 'mentorId', action.payload.mentorId);
      yield put(sprintTemplateByMentorIdListed(sprintTemplate));
      
  } catch (e: any) {
      yield put(listSprintTemplateByMentorIdError(e.message));
  }
}


function* sprintTemplateSaga() {
  yield takeLatest(fetchSprintTemplate, fetchSprintTemplateSaga);
  yield takeLatest(listSprintTemplates, listSprintTemplatesSaga);
  yield takeLatest(updateSprintTemplate, updateSprintTemplateSaga);
  yield takeLatest(removeSprintTemplate, removeSprintTemplateSaga);
  yield takeLatest(listSprintTemplateByMentorId, listByMentorIdSaga);
}

export default sprintTemplateSaga;

  