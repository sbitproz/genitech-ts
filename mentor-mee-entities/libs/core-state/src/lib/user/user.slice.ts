
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState
} from '@reduxjs/toolkit';
import { User } from '@mentor-mee/core-types';
    
export const USERS_SLICE_FEATURE_KEY = 'users';

export interface UserSlice extends EntityState<User> {
  selectedId?: string | number; // which Users record has been selected
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const userSliceAdapter = createEntityAdapter<User>();

const initialState: UserSlice = userSliceAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: undefined,
});
  
export const userSlice = createSlice({
  name: USERS_SLICE_FEATURE_KEY,
  initialState: initialState,
  reducers: {
    userAdded: userSliceAdapter.addOne,
    userRemoved: userSliceAdapter.removeOne,
    userUpdated: userSliceAdapter.updateOne,
    userFetched: userSliceAdapter.upsertOne,
    usersListed: userSliceAdapter.upsertMany,
    removalAllUser: userSliceAdapter.removeAll,
  },
});

export default userSlice.reducer;

export const { 
  userAdded, 
  userRemoved, 
  userUpdated, 
  usersListed, 
  userFetched, 
} = userSlice.actions;

export const addUser = createAction<User>('users/addUser');

export const removeUser = createAction<{id: string}>('users/removeUser');

export const updateUser = createAction<User>('users/updateUser');

export const fetchUser = createAction<{id: string}>('users/fetchUser');

export const listUsers = createAction('users/listUsers');

export const addUserError = createAction<string>('users/addUserError');

export const removeUserError = createAction<string>('users/removeUserError');

export const updateUserError = createAction<string>('users/updateUserError');

export const fetchUserError = createAction<string>('users/fetchUserError');

export const listUsersError = createAction<string>('users/listUsersError');


