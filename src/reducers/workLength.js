import {
  INC_WORK_LENGTH,
  DEC_WORK_LENGTH,
  SET_WORK_LENGTH,
  RESET_TIMER,
  MAX_LENGTH,
  MIN_LENGTH,
  DEFAULT_WORK_LENGTH
} from "../actions";

export default (state = 25, action) => {
  switch (action.type) {
    case INC_WORK_LENGTH:
      if (state < MAX_LENGTH) {
        return state + 1;
      } else {
        return state;
      }

    case DEC_WORK_LENGTH:
      if (state > MIN_LENGTH) {
        return state - 1;
      } else {
        return state;
      }

    case SET_WORK_LENGTH:
      if (!action.minutes || action.minutes <= MIN_LENGTH) {
        return MIN_LENGTH;
      } else if (action.minutes < MAX_LENGTH) {
        return action.minutes;
      } else if (action.minutes >= MAX_LENGTH) {
        return MAX_LENGTH;
      } else {
        return state;
      }

    case RESET_TIMER:
      return DEFAULT_WORK_LENGTH;

    default:
      return state;
  }
};
