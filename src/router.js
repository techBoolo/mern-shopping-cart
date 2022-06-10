import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products/'
import Product from './pages/Product/'
import NotFound from './pages/NotFound/'
import Root from './pages/Root/'
import ProductsRoot from './pages/ProductsRoot/'
import Cart from './pages/Cart/'

const Router = (props) => {

  return (
    <Routes>
      <Route path='/' element={<Root />}> 
        <Route index element={<Products />} /> 
        <Route path='products' element={<ProductsRoot />}> 
          <Route index element={<Products />} /> 
          <Route path=':id' element={<Product />} /> 
        </Route>
        
        <Route path='cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router
