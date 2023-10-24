import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ProductoDetalle, ProductoModificar, NavBar, ProductoCrear } from '../products';
import { Registro, Login, ClientePerfil } from '../clients'

export const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/registro' element={<Registro />} />
                
                <Route path='/home' element={<Home />} />
                <Route path='/perfil' element={<ClientePerfil />} />
                <Route path='/producto/guardar' element={<ProductoCrear />} />
                <Route path='/producto/:product_id/description' element={<ProductoDetalle />} />
                <Route path='/producto/:product_id/modificar' element={<ProductoModificar />} />
            </Routes>
        </Router>
    )
}