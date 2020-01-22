import {
  INC_BREAK_LENGTH,
  DEC_BREAK_LENGTH,
  SET_BREAK_LENGTH,
  RESET_TIMER,
  MAX_LENGTH,
  MIN_LENGTH,
  DEFAULT_BREAK_LENGTH
} from "../actions";

export default (state = 5, action) => {
  switch (action.type) {
    case INC_BREAK_LENGTH:
      if (state < MAX_LENGTH) {
        return state + 1;
      } else {
        return state;
      }

    case DEC_BREAK_LENGTH:
      if (state > MIN_LENGTH) {
        return state - 1;
      } else {
        return state;
      }

    case SET_BREAK_LENGTH:
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
      return DEFAULT_BREAK_LENGTH;

    default:
      return state;
  }
};
