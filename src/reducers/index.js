import { combineReducers } from "redux";
import workLength from "./workLength";
import breakLength from "./breakLength";
import timerState from "./timerState";
import secondsLeft from "./secondsLeft";
import currentSession from "./currentSession";

export default combineReducers({
  workLength,
  breakLength,
  timerState,
  secondsLeft,
  currentSession
});
