
import { call, put, takeLatest, CallEffect } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { usersAPI, BaseEntity } from '@mentor-mee/core-data';
import { PutPayload } from "../saga.types";
import { 
  fetchUser, fetchUserError, userFetched, 
  listUsers, listUsersError, usersListed,
  userUpdated , updateUserError, updateUser,
  removeUserError, removeUser, userRemoved,
} from './user.slice';
import { User } from '@mentor-mee/core-types';

function* fetchUserSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect<BaseEntity> | PutPayload<User> | PutPayload<string>, void, User> {
  try {
      const user = yield call(usersAPI.find, action.payload.id);
      yield put(userFetched(user));
  } catch (e: any) {
      yield put(fetchUserError(e.message));
  }
}

function* listUsersSaga(): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, User[]> {
  try {
      const users = yield call(usersAPI.load);
      yield put(usersListed(users));
  } catch (e: any) {
      yield put(listUsersError(e.message));
  }
}

function* updateUserSaga(action: PayloadAction<User>): Generator<CallEffect<User> | PutPayload<any> | PutPayload<string>, void, User> { 
  try {
      const user = yield call(usersAPI.update, action.payload);
      yield put(userUpdated({id: user.id, changes: user }));
  } catch (e: any) {
      yield put(updateUserError(e.message));
  }
}

function* removeUserSaga(action: PayloadAction<BaseEntity>): Generator<CallEffect | PutPayload<any> | PutPayload<string>, void, User> {
  try {
      const user = yield call(usersAPI.remove, action.payload.id);
      yield put(userRemoved(user.id));
  } catch (e: any) {
      yield put(removeUserError(e.message));
  }
}


function* userSaga() {
  yield takeLatest(fetchUser, fetchUserSaga);
  yield takeLatest(listUsers, listUsersSaga);
  yield takeLatest(updateUser, updateUserSaga);
  yield takeLatest(removeUser, removeUserSaga);
}

export default userSaga;

  