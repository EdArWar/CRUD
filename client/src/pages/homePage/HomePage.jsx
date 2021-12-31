import React from "react";
import { Container, Row } from "react-bootstrap";
import CardItem from "../../components/card/CardItem";

const HomePage = () => {
  const item = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <>
      <Container
        style={{
          margin: "2% auto",
        }}
      >
        <Row>
          {item.map((item, i) => {
            return <CardItem key={i} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
