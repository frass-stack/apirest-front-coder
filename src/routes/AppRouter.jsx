import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ProductoDetalle, ProductoModificar, NavBar, ProductoCrear } from '../products';
import { Registro, Login, ClientePerfil } from '../clients'
import AuthProvider, { AuthContext } from '../Context/AuthContext'

export const AppRouter = () => {
    return (
        <Router>
            <AuthProvider>
                <AuthContext.Consumer>
                    {({ login }) => (
                        <>
                            <NavBar />
                            <Routes>
                                {!login && (
                                    <>
                                        <Route path='/' element={<Login />} />
                                        <Route path='/registro' element={<Registro />} />
                                    </>
                                )}
                                {login && (
                                    <>
                                        <Route path='/home' element={<Home />} />
                                        <Route path='/perfil' element={<ClientePerfil />} />
                                        <Route path='/producto/guardar' element={<ProductoCrear />} />
                                        <Route path='/producto/:product_id/description' element={<ProductoDetalle />} />
                                        <Route path='/producto/:product_id/modificar' element={<ProductoModificar />} />
                                    </>
                                )}
                            </Routes>
                        </>
                    )}
                </AuthContext.Consumer>
            </AuthProvider>
        </Router>
    )
}