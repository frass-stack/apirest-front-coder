import './App.css'
// import { AppRouter } from './routes/AppRouter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ProductoDetalle, ProductoModificar, NavBar, ProductoCrear, NotFound } from '../src/products';
import { Registro, Login, ClientePerfil } from '../src/clients'
import AuthProvider, { AuthContext } from '../src/Context/AuthContext'

function App() {

  return (
    <>
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
                      <Route path='/home' element={<Home />} />
                      <Route path="*" element={<NotFound />} />

                    </>
                  )}
                  {login && (
                    <>
                      <Route path='/home' element={<Home />} />
                      <Route path='/perfil' element={<ClientePerfil />} />
                      <Route path='/producto/guardar' element={<ProductoCrear />} />
                      <Route path='/producto/:product_id/description' element={<ProductoDetalle />} />
                      <Route path='/producto/:product_id/modificar' element={<ProductoModificar />} />
                      <Route path="*" element={<NotFound />} />

                    </>
                  )}
                  {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
              </>
            )}
          </AuthContext.Consumer>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
