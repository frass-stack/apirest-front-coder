import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ProductoDetalle, ProductoModificar } from '../products';

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/producto/:product_id/description' element={<ProductoDetalle />} />
                <Route path='/producto/:product_id/modificar' element={<ProductoModificar />} />
            </Routes>
        </Router>
    )
}