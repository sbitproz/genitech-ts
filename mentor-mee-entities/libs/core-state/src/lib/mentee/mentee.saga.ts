
import { call, put, takeLatest, CallEffect } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { menteesAPI, BaseEntity } from '@mentor-mee/core-data';
import { PutPayload } from "../saga.types";
import { 
  fetchMentee, fetchMenteeError, menteeFetched, 
  listMentees, listMenteesError, menteesListed,
  menteeUpdated , updateMenteeError, updateMentee,
  removeMenteeError, removeMentee, menteeRemoved,
} from './mentee.slice';
import { Mentee } from '@mentor-mee/core-types';

function* fetchMenteeSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect<BaseEntity> | PutPayload<Mentee> | PutPayload<string>, void, Mentee> {
  try {
      const mentee = yield call(menteesAPI.find, action.payload.id);
      yield put(menteeFetched(mentee));
  } catch (e: any) {
      yield put(fetchMenteeError(e.message));
  }
}

function* listMenteesSaga(): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Mentee[]> {
  try {
      const mentees = yield call(menteesAPI.load);
      yield put(menteesListed(mentees));
  } catch (e: any) {
      yield put(listMenteesError(e.message));
  }
}

function* updateMenteeSaga(action: PayloadAction<Mentee>): Generator<CallEffect<Mentee> | PutPayload<any> | PutPayload<string>, void, Mentee> { 
  try {
      const mentee = yield call(menteesAPI.update, action.payload);
      yield put(menteeUpdated({id: mentee.id, changes: mentee }));
  } catch (e: any) {
      yield put(updateMenteeError(e.message));
  }
}

function* removeMenteeSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, Mentee> {
  try {
      const mentee = yield call(menteesAPI.remove, action.payload.id);
      yield put(menteeRemoved(mentee.id));
  } catch (e: any) {
      yield put(removeMenteeError(e.message));
  }
}


function* menteeSaga() {
  yield takeLatest(fetchMentee, fetchMenteeSaga);
  yield takeLatest(listMentees, listMenteesSaga);
  yield takeLatest(updateMentee, updateMenteeSaga);
  yield takeLatest(removeMentee, removeMenteeSaga);
}

export default menteeSaga;

  