import produce from 'immer';
import constants from './constants';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case constants.authSignInRequest:
      return produce(state, draft => {
        draft.loading = true;
      });
    case constants.authSignInSuccess:
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
      });
    case constants.authSignFailure:
      return produce(state, draft => {
        draft.loading = false;
      });
    case constants.authSignOut:
      return produce(state, draft => {
        draft.token = null;
        draft.signed = false;
      });
    default:
      return state;
  }
}
