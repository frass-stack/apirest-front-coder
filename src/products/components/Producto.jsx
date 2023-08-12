import React from "react";
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';

const styles = {
  card: {
    marginBottom: "10px",
    width: "18rem",
  },
};

export const Producto = ({ title, description, price, code, id, stock }) => {
  console.log("🚀 ~ file: Producto.jsx:6 ~ Producto ~ description:", description)
  console.log("🚀 ~ file: Producto.jsx:6 ~ Producto ~ title:", title)
  return (
      <Col className='mx-auto' xs={12} sm={6} lg={4} xxl={3}>
        <Card style={styles.card}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{code}</Card.Subtitle>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Text>
              {price}
            </Card.Text>
            <Card.Text>
              {stock}
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
  )
}