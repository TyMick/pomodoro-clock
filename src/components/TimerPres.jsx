import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TimerStates } from "../actions";

// Timer presentation
export default ({ session, time, timerState, reset, start, pause }) => {
  // Make timer blink on pause
  const [blinkedOut, setBlinkedOut] = useState(false);
  useEffect(() => {
    let blinkInterval;
    let blinkOut;
    if (timerState === TimerStates.PAUSED) {
      blinkInterval = setInterval(() => {
        setBlinkedOut(true);
        blinkOut = setTimeout(() => {
          setBlinkedOut(false);
        }, 500);
      }, 1000);
    }
    return () => {
      clearInterval(blinkInterval);
      clearTimeout(blinkOut);
      setBlinkedOut(false);
    };
  }, [timerState]);

  return (
    <Card.Body body className="p-3 text-center">
      <div id="timer-label" className="h2 mb-0">
        {session} session
      </div>

      <div
        id="time-left"
        className={
          "display-2 mb-0" +
          (timerState === TimerStates.STARTED
            ? " text-success"
            : timerState === TimerStates.PAUSED && " text-danger") +
          (blinkedOut ? " invisible" : "")
        }
      >
        <samp>{time}</samp>
      </div>

      {/* Timer control buttons */}
      <div className="mb-2">
        <Button
          variant="primary"
          size="lg"
          id="start_stop"
          className="mx-2"
          onClick={timerState === TimerStates.STARTED ? pause : start}
        >
          <FontAwesomeIcon
            icon={timerState === TimerStates.STARTED ? "pause" : "play"}
          />
        </Button>

        <Button
          variant="danger"
          size="lg"
          id="reset"
          className="mx-2"
          onClick={reset}
        >
          <FontAwesomeIcon icon="sync-alt" />
        </Button>
      </div>
    </Card.Body>
  );
};
