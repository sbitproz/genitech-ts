

import { combineEpics } from 'redux-observable';
import userEpic from './user.epics';
import mentorEpic from './mentor.epics';
import menteeEpic from './mentee.epics';
import sprintEpic from './sprint.epics';

export const rootEpic = combineEpics(
  userEpic,
  mentorEpic,
  menteeEpic,
  sprintEpic,
);
