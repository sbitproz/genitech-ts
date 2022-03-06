
import { configureStore } from '@reduxjs/toolkit'
import { Action } from 'redux';
import { rootEpic } from './root.epic';
import usersReducer from './user.slice';
import mentorsReducer from './mentor.slice';
import menteesReducer from './mentee.slice';
import sprintsReducer from './sprint.slice';

export const store = configureStore({
  reducer: {
      users: usersReducer,
      mentors: mentorsReducer,
      mentees: menteesReducer,
      sprints: sprintsReducer,
  }
})

export const rootState = store.getState();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

