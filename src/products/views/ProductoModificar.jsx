import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Form, Button, Spinner } from 'react-bootstrap'
import { getProductById, updateProductById, deleteProduct } from '../../services/productoService'


export const ProductoModificar = () => {
    const { register, handleSubmit, setValue, formState: { errors }, setError } = useForm({ mode: 'onChange' });
    const { product_id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const request = async () => {
            try {
                const product = await getProductById(product_id);
                // console.log("🚀 ~ file: ProductoModificar.jsx:16 ~ request ~ product:", product)
                setValue('title', product.title)
                setValue('code', product.code)
                setValue('price', product.price)
                setValue('stock', product.stock)
                setValue('description', product.description)

                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.log("🚀 ~ file: ProductoModificar.jsx:24 ~ request ~ error:", error)
            }
        }

        request();
    }, [product_id])

    const onSubmit = async (data) => {
        try {
            await updateProductById(product_id, data);
            if (Object.keys(errors).length === 0) navigate('/home');
        } catch (error) {
            console.log("🚀 ~ file: ProductoModificar.jsx:40 ~ onSubmit ~ error:", error)
        }
    }

    const onDeleteProduct = async () => {
        try {
            const productoDelete = await deleteProduct(product_id);
            navigate('/home');
        } catch (error) {
            console.log("🚀 ~ file: ProductoModificar.jsx:44 ~ onDeleteProduct ~ error:", error)
        }
    }

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
                <h1>Modificar producto</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className='mb-3' controlId='productForm.ControlInput1'>
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control type="text" placeholder='Ingrese el titulo...'
                            {...register("title", { required: true })}
                        />
                        {errors?.title && <div>El campo es obligatorio</div>}
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='productForm.ControlInput1'>
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" placeholder='Ingrese la descripcion...'
                            {...register("description", { required: true })}
                        />
                        {errors?.description && <div>El campo es obligatorio</div>}
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='productForm.ControlInput2'>
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="number" placeholder='Ingrese el precio...'
                            {...register("price", { required: true })}
                        />
                        <Form.Text>
                            {errors?.price && <div>El campo es obligatorio</div>}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='productForm.ControlInput1'>
                        <Form.Label>Cantidad disponible</Form.Label>
                        <Form.Control type="number" placeholder='Ingrese cantidad...'
                            {...register("stock", { required: true })}
                        />
                        {errors?.available_quantity && <div>El campo es obligatorio</div>}
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='productForm.ControlInput1'>
                        <Form.Label>Codigo sku</Form.Label>
                        <Form.Control type="text" placeholder='Ingrese codigo...'
                            {...register("code", { required: true })}
                        />
                        {errors?.condition && <div>El campo es obligatorio</div>}
                    </Form.Group>
                    <Button className='mb-3 mx-3 btn-success' type='submit'>
                        Guardar
                    </Button>
                    <Button className='mb-3 btn-danger' variant='secondary' onClick={onDeleteProduct}>
                        Borrar Producto
                    </Button>
                </Form>
                <Button type='submit'>
                    <Link style={{ color: 'white' }} to="/home">
                        Volver
                    </Link>
                </Button>
            </div>

        )
    }
}