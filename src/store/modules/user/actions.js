import constants from './constants';

export function updateProfileRequest(data) {
  return {
    type: constants.userUpdateProfileRequest,
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: constants.userUpdateProfileSuccess,
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: constants.userUpdateProfileFailure,
  };
}
