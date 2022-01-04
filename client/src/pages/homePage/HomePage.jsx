import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PostApi from "../../api/PostApi";
import CardItem from "../../components/card/CardItem";
import { postSel } from "../../store/post";

const HomePage = () => {
  const dispatch = useDispatch();
  const postData = useSelector(postSel.postData);

  console.log("postData", postData);

  useEffect(() => {
    dispatch(PostApi.getAllPosts());
  }, []);

  return (
    <>
      <Container
        style={{
          margin: "2% auto",
        }}
      >
        <Row>
          {postData.length ? (
            postData.map((item, i) => {
              return <CardItem key={i} post={item} />;
            })
          ) : (
            <h2>Post Empty</h2>
          )}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
