import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ProductoDetalle, ProductoModificar } from '../products';
import { Registro, Login } from '../clients'

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/registro' element={<Registro />} />
                <Route path='/home' element={<Home />} />
                <Route path='/producto/:product_id/description' element={<ProductoDetalle />} />
                <Route path='/producto/:product_id/modificar' element={<ProductoModificar />} />
            </Routes>
        </Router>
    )
}