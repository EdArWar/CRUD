import React from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import pic from "../../assets/images/pic.jpg";

const CardItem = () => {
  return (
    <Col xs={12} sm={6} md={4}>
      <Card>
        <Card.Img variant="top" src={pic} width={"100%"} height={"auto"} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Like</Card.Link>
          <Card.Link href="#">Update</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardItem;