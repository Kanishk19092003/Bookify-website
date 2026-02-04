import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BookCard = (props) => {
  const navigate = useNavigate();

  return (
    <Card style={{ width: "18rem", margin: "25px" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>

        <Card.Text>
          <strong>ISBN:</strong> {props.isbn}
          <br />
          <strong>Price:</strong> ₹{props.price}
          <br />
          <strong>Seller:</strong> {props.userEmail}
        </Card.Text>

        <Button onClick={() => navigate(props.link)} variant="primary">
          View
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
