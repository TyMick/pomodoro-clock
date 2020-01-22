import { connect } from "react-redux";
import {
  incWorkLength,
  decWorkLength,
  setWorkLength,
  incBreakLength,
  decBreakLength,
  setBreakLength
} from "../actions";
import SettingsPres from "../components/SettingsPres";

// Settings container
const settingsStateToProps = state => ({
  workLength: state.workLength,
  breakLength: state.breakLength
});

const settingsDispatchToProps = dispatch => ({
  incWorkLength: () => dispatch(incWorkLength()),
  decWorkLength: () => dispatch(decWorkLength()),
  setWorkLength: e => dispatch(setWorkLength(parseInt(e.target.value), 10)),
  incBreakLength: () => dispatch(incBreakLength()),
  decBreakLength: () => dispatch(decBreakLength()),
  setBreakLength: e => dispatch(setBreakLength(parseInt(e.target.value), 10))
});

export default connect(
  settingsStateToProps,
  settingsDispatchToProps
)(SettingsPres);
