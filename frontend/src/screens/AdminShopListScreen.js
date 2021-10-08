import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import { listShops } from "../actions/shopActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

const AdminShopListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const shopList = useSelector((state) => state.shopList);
  const { loading, error, shops } = shopList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo.isAdmin) {
      history.push("/login");
    } else {
      dispatch(listShops());
    }
  }, [dispatch, history, userInfo]);

  const deleteHandler = (id) => {
    //delete Shop
  };

  const createShopHandler = () => {
    //create shop
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Shop</h1>
        </Col>
        <Col className="text-end">
          <Button className="my-3" onClick={createShopHandler}>
            <i className="fas fa-plus"></i>Create a Shop
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>NAME</th>
                <th>DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              {shops.map((shop) => (
                <tr key={shop._id}>
                  <td>{shop.name}</td>
                  <td>{shop.description}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${shop._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(shop._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default AdminShopListScreen;
