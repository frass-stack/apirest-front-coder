import React, { useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

export const Productos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

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
            <>

            </>
        )
    }

}