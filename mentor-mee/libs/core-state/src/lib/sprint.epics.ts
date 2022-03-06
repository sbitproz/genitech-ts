

import { of, switchMap } from "rxjs";
import { ofType } from "redux-observable";
import { listSprints, fetchSprint, updateSprint, removeSprint, addSprint } from "./sprint.slice";

// Sprint Epic
export const sprintEpic$ = (actions$: any) => actions$.pipe(
  ofType(listSprints),
  switchMap(() => {
    console.log('requesting')
    return of([])
  })
);

export default [
  sprintEpic$
]  
  