import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = ({ shop }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/shop/${shop._id}`}>
        <Card.Img src={shop.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/shop/${shop._id}`}>
          <Card.Title as="div">
            <strong>{shop.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h3">{shop.description}</Card.Text>
        <Card.Text as="h3">{shop.numProducts}</Card.Text>
        <Card.Text as="h3">{shop.isVacant ? "Vacant" : "Available"}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
