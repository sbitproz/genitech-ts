

import { of, switchMap } from "rxjs";
import { ofType } from "redux-observable";
import { listMentees, fetchMentee, updateMentee, removeMentee, addMentee } from "./mentee.slice";

// Mentee Epic
export const menteeEpic$ = (actions$: any) => actions$.pipe(
  ofType(listMentees),
  switchMap(() => {
    console.log('requesting')
    return of([])
  })
);

export default [
  menteeEpic$
]  
  