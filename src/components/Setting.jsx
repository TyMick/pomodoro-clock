import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Individual setting area
export default ({ session, id, minutes, inc, dec, set }) => (
  <Form.Group controlId={id + "-length"}>
    <Form.Label id={id + "-label"}>{session} session length</Form.Label>

    <InputGroup>
      <InputGroup.Prepend>
        <Button id={id + "-decrement"} onClick={dec} variant="primary">
          <FontAwesomeIcon icon="minus" />{" "}
        </Button>
      </InputGroup.Prepend>

      <Form.Control
        type="text"
        style={{ maxWidth: "2.86rem" }}
        value={minutes}
        onChange={set}
      />

      <InputGroup.Append>
        <InputGroup.Text>minutes</InputGroup.Text>
        <Button id={id + "-increment"} onClick={inc} variant="primary">
          <FontAwesomeIcon icon="plus" />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  </Form.Group>
);
