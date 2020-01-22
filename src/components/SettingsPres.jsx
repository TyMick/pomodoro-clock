import React from "react";
import { Card } from "react-bootstrap";
import Setting from "./Setting";

// Settings presentation
export default ({
  workLength,
  breakLength,
  incWorkLength,
  decWorkLength,
  setWorkLength,
  incBreakLength,
  decBreakLength,
  setBreakLength
}) => (
  <Card.Body className="border-top pb-2">
    <div className="h4">Settings</div>
    <Setting
      session="Work"
      id="session"
      minutes={workLength}
      inc={incWorkLength}
      dec={decWorkLength}
      set={setWorkLength}
    />
    <Setting
      session="Break"
      id="break"
      minutes={breakLength}
      inc={incBreakLength}
      dec={decBreakLength}
      set={setBreakLength}
    />
  </Card.Body>
);
