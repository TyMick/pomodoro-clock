import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import reducer from "./reducers";
import observeStore from "./observeStore";
import {
  selectTimerState,
  onTimerStateChange
} from "./listeners/timerStateListener";
import {
  selectSecondsLeft,
  onSecondsLeftChange
} from "./listeners/secondsLeftListener";
import {
  selectWorkLength,
  onWorkLengthChange
} from "./listeners/workLengthListener";

const store = createStore(reducer);

observeStore(store, selectTimerState, onTimerStateChange);
observeStore(store, selectSecondsLeft, onSecondsLeftChange);
observeStore(store, selectWorkLength, onWorkLengthChange);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
