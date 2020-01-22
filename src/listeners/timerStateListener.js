import {
  TimerStates,
  tick,
} from "../actions";

// timerState listener
export const selectTimerState = state => state.timerState;

let tickInterval;
export const onTimerStateChange = (newTimerState, store) => {
  // Start the clock ticking when the timer starts
  if (newTimerState === TimerStates.STARTED) {
    tickInterval = setInterval(store.dispatch, 1000, tick());
  }

  // Stop the ticking when timer pauses or resets
  else {
    clearInterval(tickInterval);
  }

  // Reset display (and beep) when timer resets
  if (newTimerState === TimerStates.STOPPED) {
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
  }
};
