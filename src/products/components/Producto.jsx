import React from "react";
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const styles = {
  card: {
    marginBottom: "10px",
    width: "18rem",
  },
  button: {
    marginRigth: "2px",
    marginLeft: "2px"
  }
};

export const Producto = ({ title, code, product_id }) => {
  return (
    <Col className='mx-auto' xs={12} sm={6} lg={4} xxl={3}>
      <Card style={styles.card}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{code}</Card.Subtitle>
          <Button style={styles.button} variant="primary" as={Link} to={`/producto/${product_id}/description`} >Detalle</Button>
          <Button style={styles.button} variant="primary" as={Link} to={`/producto/${product_id}/modificar`} >Modificar</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}