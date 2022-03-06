
import {
  createAction,
  createEntityAdapter,
  createSlice,
  EntityState,
  // PayloadAction,
} from '@reduxjs/toolkit';
import { User } from '@mentor-mee/core-types';
    
export const USERS_SLICE_FEATURE_KEY = 'users';

export interface UserSliceState extends EntityState<User> {
  selectedId?: string | number; // which Users record has been selected
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const userSliceAdapter = createEntityAdapter<User>();

const initialState: UserSliceState = userSliceAdapter.getInitialState({
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
  },
});

export default userSlice.reducer;

export const { userAdded, userRemoved, userUpdated, usersListed, userFetched } = userSlice.actions;

export const addUser = createAction<User>('USER/ADD');

export const removeUser = createAction<User>('USER/REMOVE');

export const updateUser = createAction<User>('USER/UPDATE');

export const fetchUser = createAction<User>('USER/FETCH');

export const listUsers = createAction<User>('USER/LIST');




