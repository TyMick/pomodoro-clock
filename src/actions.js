// Action type constants
export const INC_WORK_LENGTH = "INC_WORK_LENGTH";
export const DEC_WORK_LENGTH = "DEC_WORK_LENGTH";
export const SET_WORK_LENGTH = "SET_WORK_LENGTH";
export const INC_BREAK_LENGTH = "INC_BREAK_LENGTH";
export const DEC_BREAK_LENGTH = "DEC_BREAK_LENGTH";
export const SET_BREAK_LENGTH = "SET_BREAK_LENGTH";
export const START_TIMER = "START_TIMER";
export const PAUSE_TIMER = "PAUSE_TIMER";
export const RESET_TIMER = "RESET_TIMER";
export const SET_TIMER = "SET_TIMER";
export const TICK = "TICK";
export const SWITCH_SESSION = "SWITCH_SESSION";
export const TimerStates = {
  STOPPED: "STOPPED",
  STARTED: "STARTED",
  PAUSED: "PAUSED"
};
export const Sessions = {
  WORK: "WORK",
  BREAK: "BREAK"
};

// Other constants
export const DEFAULT_WORK_LENGTH = 25;
export const DEFAULT_BREAK_LENGTH = 5;
export const MAX_LENGTH = 60;
export const MIN_LENGTH = 1;

// Action creators
export const incWorkLength = () => ({
  type: INC_WORK_LENGTH
});

export const decWorkLength = () => ({
  type: DEC_WORK_LENGTH
});

export const setWorkLength = minutes => ({
  type: SET_WORK_LENGTH,
  minutes
});

export const incBreakLength = () => ({
  type: INC_BREAK_LENGTH
});

export const decBreakLength = () => ({
  type: DEC_BREAK_LENGTH
});

export const setBreakLength = minutes => ({
  type: SET_BREAK_LENGTH,
  minutes
});

export const startTimer = () => ({
  type: START_TIMER
});

export const pauseTimer = () => ({
  type: PAUSE_TIMER
});

export const resetTimer = () => ({
  type: RESET_TIMER
});

export const setTimer = minutes => ({
  type: SET_TIMER,
  minutes
});

export const tick = () => ({
  type: TICK
});

export const switchSession = session => ({
  type: SWITCH_SESSION,
  session
});
