import { TimerStates, setTimer } from "../actions";

// workLength listener
export const selectWorkLength = state => state.workLength;

export const onWorkLengthChange = (newWorkLength, store) => {
  // Change timer display with work length setting when appropriate
  if (store.getState().timerState === TimerStates.STOPPED) {
    store.dispatch(setTimer(newWorkLength));
  }
};
