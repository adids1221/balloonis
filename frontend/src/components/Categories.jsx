import React, { useState } from "react";
import { Card, Container, Image, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Categories = ({ cat }) => {
  return (
    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
      <Card className='my-3 ml-3 py-3 rounded' style={{ width: "16rem" }}>
        <Card.Body>
          <Card.Title dir='rtl'>
            {cat ? <strong>{cat.name}</strong> : <strong>קטגוריה</strong>}
          </Card.Title>
          <Card.Img variant='top' />
          <Button variant='primary'>
            {" "}
            {cat ? <strong>{cat.name}</strong> : <strong>קטגוריה</strong>}
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default Categories;
