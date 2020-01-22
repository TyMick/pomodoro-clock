import { switchSession, Sessions, setTimer } from "../actions";

// secondsLeft listener
export const selectSecondsLeft = state => state.secondsLeft;

export const onSecondsLeftChange = (newSecondsLeft, store) => {
  // Play alarm, switch sessions, and set timer when timer hits zero
  if (newSecondsLeft < 0) {
    document.getElementById("beep").currentTime = 0;
    document.getElementById("beep").play();
    if (store.getState().currentSession === Sessions.WORK) {
      store.dispatch(switchSession(Sessions.BREAK));
      store.dispatch(setTimer(store.getState().breakLength));
    } else {
      store.dispatch(switchSession(Sessions.WORK));
      store.dispatch(setTimer(store.getState().workLength));
    }
  }
};
