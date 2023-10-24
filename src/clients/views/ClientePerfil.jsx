import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap'
import { updateClientByid, getClientById } from '../../services/clientService'
import ButtonWithLoading from '../../componetizacion/ButtonWithLoading'
import Alert from '../../componetizacion/AlertNavigation'
import FormInput from '../../componetizacion/FormInput'

export const ClientePerfil = () => {
    const { register, handleSubmit, setValue ,formState: { errors }, setError } = useForm({ mode: 'onChange' })
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({variant:'', text:'', duration:0, link:''});
    // const { client_id = 1 } = useParams();

    useEffect(() => {
        const request = async () => {
            try {
                const client = await getClientById(1);
                // console.log("🚀 ~ file: ClientePerfil.jsx:20 ~ request ~ client:", client)
                setValue('name', client.name)
                setValue('lastname', client.lastname)
                setValue('docnumber', client.docnumber)

                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.log("🚀 ~ file: ProductoModificar.jsx:24 ~ request ~ error:", error)
            }
        }

        request();
    }, [1])

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await updateClientByid(1, data);
            if (Object.keys(errors).length === 0){
                setAlert({
                    variant:'success',
                    text: 'Usuario actualizado exitosamente.',
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
            <h1>Perfil de usuario</h1>
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
                    Actualizar
                </ButtonWithLoading>
                <Alert {...alert} />
            </Form>
            <Button type='submit'>
                <Link style={{ color: 'white' }} to="/home">
                    Volver
                </Link>
            </Button>
        </div>
    )
} 