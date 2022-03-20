
import { call, put, takeLatest, CallEffect } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { mentorsAPI, BaseEntity } from '@mentor-mee/core-data';
import { PutPayload } from "../saga.types";
import { 
  fetchMentor, fetchMentorError, mentorFetched, 
  listMentors, listMentorsError, mentorsListed,
  mentorUpdated , updateMentorError, updateMentor,
  removeMentorError, removeMentor, mentorRemoved,
} from './mentor.slice';
import { Mentor } from '@mentor-mee/core-types';

function* fetchMentorSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect<BaseEntity> | PutPayload<Mentor> | PutPayload<string>, void, Mentor> {
  try {
      const mentor = yield call(mentorsAPI.find, action.payload.id);
      yield put(mentorFetched(mentor));
  } catch (e: any) {
      yield put(fetchMentorError(e.message));
  }
}

function* listMentorsSaga(): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Mentor[]> {
  try {
      const mentors = yield call(mentorsAPI.load);
      yield put(mentorsListed(mentors));
  } catch (e: any) {
      yield put(listMentorsError(e.message));
  }
}

function* updateMentorSaga(action: PayloadAction<Mentor>): Generator<CallEffect<Mentor> | PutPayload<any> | PutPayload<string>, void, Mentor> { 
  try {
      const mentor = yield call(mentorsAPI.update, action.payload);
      yield put(mentorUpdated({id: mentor.id, changes: mentor }));
  } catch (e: any) {
      yield put(updateMentorError(e.message));
  }
}

function* removeMentorSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Mentor> {
  try {
      const mentor = yield call(mentorsAPI.remove, action.payload.id);
      yield put(mentorRemoved(mentor.id));
  } catch (e: any) {
      yield put(removeMentorError(e.message));
  }
}


function* mentorSaga() {
  yield takeLatest(fetchMentor, fetchMentorSaga);
  yield takeLatest(listMentors, listMentorsSaga);
  yield takeLatest(updateMentor, updateMentorSaga);
  yield takeLatest(removeMentor, removeMentorSaga);
}

export default mentorSaga;

  