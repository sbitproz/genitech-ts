

import { of, switchMap } from "rxjs";
import { ofType } from "redux-observable";
import { listUsers, fetchUser, updateUser, removeUser, addUser } from "./user.slice";

// User Epic
export const userEpic$ = (actions$: any) => actions$.pipe(
  ofType(listUsers),
  switchMap(() => {
    console.log('requesting')
    return of([])
  })
);

export default [
  userEpic$
]  
  