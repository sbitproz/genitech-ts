

import { of, switchMap } from "rxjs";
import { ofType } from "redux-observable";
import { listMentors, fetchMentor, updateMentor, removeMentor, addMentor } from "./mentor.slice";

// Mentor Epic
export const mentorEpic$ = (actions$: any) => actions$.pipe(
  ofType(listMentors),
  switchMap(() => {
    console.log('requesting')
    return of([])
  })
);

export default [
  mentorEpic$
]  
  