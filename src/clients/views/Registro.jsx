import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap'
import { registerClient } from '../../services/clientService'
import ButtonWithLoading from '../../componetizacion/ButtonWithLoading'
import Alert from '../../componetizacion/AlertNavigation'
import FormInput from '../../componetizacion/FormInput'

export const Registro = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm({ mode: 'onChange' })
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({variant:'', text:'', duration:0, link:''});

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await registerClient(data);
            if (Object.keys(errors).length === 0){
                setAlert({
                    variant:'success',
                    text: 'Usuario registrado exitosamente.',
                    duration:2000,
                    link:'/home'
                })
            }            
            setLoading(false);
        } catch (error) {
            setAlert({
                variant:'danger',
                text:'Internal error.',
                duration:2000
            })
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Registro de usuario</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    label="Nombre"
                    type="text"
                    placeholder="Ingrese su nombre..."
                    register={{ ...register("name", { required: true }) }}
                    errors={errors}
                    name="name"
                />
                <FormInput
                    label="Apellido"
                    type="text"
                    placeholder="Ingrese su apellido..."
                    register={{ ...register("lastname", { required: true }) }}
                    errors={errors}
                    name="lastname"
                />
                <FormInput
                    label="Documento"
                    type="text"
                    placeholder="Ingrese su dni..."
                    register={{ ...register("docnumber", { required: true }) }}
                    errors={errors}
                    name="docnumber"
                />
                <ButtonWithLoading variant='primary' type='submit' loading={loading}>
                    Registrar
                </ButtonWithLoading>
                <Alert {...alert} />
            </Form>
            <Button type='submit'>
                <Link style={{ color: 'white' }} to="/">
                    ¿Ya tienes cuenta?
                </Link>
            </Button>
        </div>
    )
} 