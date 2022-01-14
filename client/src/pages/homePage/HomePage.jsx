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
  const postsData = useSelector(postSel.postsData);

  useEffect(() => {
    dispatch(PostApi.getAllPosts_api());
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
            {postsData.length ? (
              postsData.map((item, i) => {
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
