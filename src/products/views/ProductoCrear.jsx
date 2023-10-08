import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Form, Button, Spinner } from 'react-bootstrap'
import { createProduct } from '../../services/productoService'
import ButtonWithLoading from '../../componetizacion/ButtonWithLoading'



export const ProductoCrear = () => {
    const { register, handleSubmit, setValue, formState: { errors }, setError } = useForm({ mode: 'onChange' });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);


    const onSubmit = async (product) => {
        try {
            await createProduct(product);
            if (Object.keys(errors).length === 0)
                setTimeout(() => {
                    navigate('/home');
                }, 2000)
        } catch (error) {
            console.log("🚀 ~ file: ProductoModificar.jsx:40 ~ onSubmit ~ error:", error)
        }
    }

    return (
        <div>
            <h1>Crear producto</h1>
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
                <ButtonWithLoading className='mb-3 mx-3 btn-success' type='submit'>
                    Guardar
                </ButtonWithLoading>
            </Form>
            <ButtonWithLoading type='submit'>
                <Link style={{ color: 'white' }} to="/home">
                    Volver
                </Link>
            </ButtonWithLoading>
        </div>

    )
}