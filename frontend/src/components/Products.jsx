import React from "react";
import { Card, Container, Image, Button } from "react-bootstrap";

const Products = ({ item }) => {
  return (
    <Card className='my-3 ml-3 py-3 rounded' style={{ width: "16rem" }}>
      <Card.Img variant='top' />
      <Card.Body>
        <Card.Title>
          {item ? <strong>{item.name}</strong> : <strong>מוצר</strong>}
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Products;
