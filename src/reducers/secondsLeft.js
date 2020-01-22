import { SET_TIMER, TICK, RESET_TIMER, DEFAULT_WORK_LENGTH } from "../actions";

export default (state = DEFAULT_WORK_LENGTH * 60, action) => {
  switch (action.type) {
    case SET_TIMER:
      return action.minutes * 60;

    case TICK:
      return state - 1;

    case RESET_TIMER:
      return DEFAULT_WORK_LENGTH * 60;

    default:
      return state;
  }
};
