import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PostApi from "../../api/PostApi";
import CardItem from "../../components/card/CardItem";
import { globalSel } from "../../store/global";
import { postSel } from "../../store/post";
import Loader from "./../../components/loader/Loader";

const HomePage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(globalSel.isAuth);
  const loader = useSelector(globalSel.loader);
  const postData = useSelector(postSel.postData);

  console.log("postData", postData);

  useEffect(() => {
    dispatch(PostApi.getAllPosts());
  }, [isAuth]);

  return (
    <>
      {!loader ? (
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
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomePage;
