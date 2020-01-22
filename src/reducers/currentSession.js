import { SWITCH_SESSION, RESET_TIMER, Sessions } from "../actions";

export default (state = Sessions.WORK, action) => {
  switch (action.type) {
    case SWITCH_SESSION:
      return action.session;

    case RESET_TIMER:
      return Sessions.WORK;

    default:
      return state;
  }
};
