import { START_TIMER, PAUSE_TIMER, RESET_TIMER, TimerStates } from "../actions";

export default (state = TimerStates.STOPPED, action) => {
  switch (action.type) {
    case START_TIMER:
      return TimerStates.STARTED;

    case PAUSE_TIMER:
      return TimerStates.PAUSED;

    case RESET_TIMER:
      return TimerStates.STOPPED;

    default:
      return state;
  }
};
