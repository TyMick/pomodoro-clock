import React from "react";
import Timer from "../containers/Timer";
import Settings from "../containers/Settings";
import { Card } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPause,
  faPlay,
  faSyncAlt,
  faMinus,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

library.add(faPause, faPlay, faSyncAlt, faMinus, faPlus);

// Basic structure
export default () => (
  <Card className="d-inline-block">
    <Timer />
    <Settings />
  </Card>
);
