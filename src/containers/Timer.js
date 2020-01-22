import { connect } from "react-redux";
import { resetTimer, startTimer, pauseTimer } from "../actions";
import TimerPres from "../components/TimerPres";

const secondsToMMSS = totalSeconds => {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  return (
    (minutes < 10 ? "0" : "") +
    minutes.toString() +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds.toString()
  );
};
const mapStateToProps = state => ({
  session:
    state.currentSession[0].toUpperCase() +
    state.currentSession.substring(1).toLowerCase(),
  time: secondsToMMSS(state.secondsLeft),
  timerState: state.timerState
});

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(resetTimer()),
  start: () => dispatch(startTimer()),
  pause: () => dispatch(pauseTimer())
});

export default connect(mapStateToProps, mapDispatchToProps)(TimerPres);
