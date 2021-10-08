import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Shop from "../components/Shop";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listShops } from "../actions/shopActions";

const ShopScreen = () => {
  const dispatch = useDispatch();

  const shopList = useSelector((state) => state.shopList);
  const { loading, error, shops } = shopList;

  useEffect(() => {
    dispatch(listShops());
  }, [dispatch]);

  return (
    <>
      <h1>All Shops</h1>
      <Link to="/" className="btn btn-light">
        Products Page
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {shops.map((shop) => (
            <Col key={shop._id} sm={12} md={6} lg={4} xl={3}>
              <Shop shop={shop} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default ShopScreen;
