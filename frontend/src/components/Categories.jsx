import React from "react";
import { Card, Container, Image, Button } from "react-bootstrap";

const Categories = ({ cat }) => {
  return (
    <Card className='my-3 ml-3 py-3 rounded' style={{ width: "16rem" }}>
      <Card.Body>
        <Card.Title>
          {cat ? <strong>{cat.name}</strong> : <strong>קטגוריה</strong>}
        </Card.Title>
        <Card.Img variant='top' />
        <Button variant='primary'>
          {" "}
          {cat ? <strong>{cat.name}</strong> : <strong>קטגוריה</strong>}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Categories;
