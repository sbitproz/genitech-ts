
import { all, fork } from 'redux-saga/effects';
import userSaga from './user/user.saga';
import mentorSaga from './mentor/mentor.saga';
import menteeSaga from './mentee/mentee.saga';
import sprintSaga from './sprint/sprint.saga';
import goalSaga from './goal/goal.saga';
import sprintTemplateSaga from './sprintTemplate/sprintTemplate.saga';
import goalTemplateSaga from './goalTemplate/goalTemplate.saga';
import uploadResourceEventsSaga from './events/uploadResource/uploadResource.saga';
import uploadProfilePictureEventsSaga from './events/uploadProfilePicture/uploadProfilePicture.saga';
import userLoginEventsSaga from './events/userLogin/userLogin.saga';
import fetchUserByEmailEventsSaga from './events/fetchUserByEmail/fetchUserByEmail.saga';
import userLogoutEventsSaga from './events/userLogout/userLogout.saga';
import userResetPasswordEventsSaga from './events/userResetPassword/userResetPassword.saga';
import userRegisterEventsSaga from './events/userRegister/userRegister.saga';


export function* rootSaga(){
  yield all([
    fork(userSaga),
    fork(mentorSaga),
    fork(menteeSaga),
    fork(sprintSaga),
    fork(goalSaga),
    fork(sprintTemplateSaga),
    fork(goalTemplateSaga),
    fork(uploadResourceEventsSaga),
    fork(uploadProfilePictureEventsSaga),
    fork(userLoginEventsSaga),
    fork(fetchUserByEmailEventsSaga),
    fork(userLogoutEventsSaga),
    fork(userResetPasswordEventsSaga),
    fork(userRegisterEventsSaga),
  ]);
}  
