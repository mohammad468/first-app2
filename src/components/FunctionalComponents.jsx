import React from "react";
import "../css/app.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

const FunctionalComponents = () => {
  const clickHandler = () => {
    alert("FunctionalComponents");
  };
  return (
    <div>
      <Container className="my-5">
        <Button variant="warning" onClick={clickHandler}>
          FunctionalComponents
        </Button>
      </Container>
    </div>
  );
};

export default FunctionalComponents;
