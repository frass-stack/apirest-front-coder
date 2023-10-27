import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap'
import { updateClientByid, getClientById } from '../../services/clientService'
import ButtonWithLoading from '../../componetizacion/ButtonWithLoading'
import Alert from '../../componetizacion/AlertNavigation'
import FormInput from '../../componetizacion/FormInput'
import { AuthContext } from "../../Context/AuthContext";

export const ClientePerfil = () => {
    const { register, handleSubmit, setValue, formState: { errors }, setError } = useForm({ mode: 'onChange' })
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ variant: '', text: '', duration: 0, link: '' });

    const { userData, setUserData } = useContext(AuthContext);
    const { name, docnumber, lastname, client_id } = userData;
    const [disabled, setDisabled] = useState(true);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await updateClientByid(client_id, data);
            if (Object.keys(errors).length === 0) {
                data.docnumber = docnumber;
                setUserData(data);
                setAlert({
                    variant: 'success',
                    text: 'Usuario actualizado exitosamente.',
                    duration: 2000,
                    link: '/home'
                })
            }
            // userData.docnumber = data.docnumber
            // navigate("/home");
            setLoading(false);
        } catch (error) {
            setAlert({
                variant: 'danger',
                text: 'Internal error.',
                duration: 2000
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
                    placeholder={`${name}`}
                    register={{ ...register("name", { required: true }) }}
                    errors={errors}
                    name="name"
                />
                <FormInput
                    label="Apellido"
                    type="text"
                    placeholder={`${lastname}`}
                    register={{ ...register("lastname", { required: true }) }}
                    errors={errors}
                    name="lastname"
                />
                <FormInput
                    label="Documento"
                    disabled={disabled}
                    type="text"
                    placeholder={`${docnumber}`}
                    register={{ ...register("docnumber", { required: false }) }}
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