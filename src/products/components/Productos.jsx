import React, { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import { Producto } from "./Producto"
import { getAll } from "../../services/productoService"

export const Productos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const request = async () => {
            try {
                const data = await getAll();
                // console.log("🚀 ~ file: Productos.jsx:14 ~ request ~ data:", data)
                setProductos(data);
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.log("🚀 ~ file: Productos.jsx:19 ~ request ~ error:", error)
            }
        }
        request();
    }, [])

    if (loading) {
        return (
            <>
                <h1>Cargando...</h1>
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
            </>
        )
    } else {
        return (
            <div>
                <Row>
                    {productos.map((p) =>
                        <Producto 
                            id={p.product_id}
                            description={p.description}
                            title={p.title}
                            code={p.code}
                            stock={p.stock}
                            price={p.price}
                        />
                    )}
                </Row>
            </div>
        )
    }

}