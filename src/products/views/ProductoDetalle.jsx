import React, { useEffect, useState } from "react";
import { Spinner, Card, ListGroup, Button } from 'react-bootstrap'
import { getProductById } from '../../services/productoService'
import { Link, useParams } from "react-router-dom";

export const ProductoDetalle = () => {
    const { product_id } = useParams()
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

    const styles = {
        button: {
          marginRigth: "2px",
          marginLeft: "2px"
        }
      };

    useEffect(() => {
        const request = async () => {
            try {
                const resp = await getProductById(product_id)
                // console.log("🚀 ~ file: ProductoDetalle.jsx:14 ~ request ~ resp:", resp)
                setProducto(resp)
                setLoading(false)
            } catch (error) {
                console.log("🚀 ~ file: ProductoDetalle.jsx:18 ~ request ~ error:", error)
            }
        }
        request()
    }, [product_id])

    if (loading) {
        return (
            <>
                <h1>Cargando producto...</h1>
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
            </>
        )
    } else {
        return (
            <div>
                <h1>ProductoDetalle</h1>
                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                    <Card.Body>
                        <Card.Title>{producto.title}</Card.Title>
                        <Card.Text>
                            {producto.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{producto.price}</ListGroup.Item>
                        <ListGroup.Item>{producto.code}</ListGroup.Item>
                        <ListGroup.Item>{producto.stock}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Button style={styles.button} variant="success" as={Link} to="/home" >Comprar</Button>
                        <Button style={styles.button} variant="danger" as={Link} to="/home" >Volver</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}