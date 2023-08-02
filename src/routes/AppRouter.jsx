import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../products';

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path='/home' element={<Home />} />
            </Routes>
        </Router>
    )
}