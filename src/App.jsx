import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from './components/main/Dashboard'
import Layout from './components/extras/Layout'
import NotFound from './components/extras/NotFound'
import AllUsers from './components/users/AllUsers'
import UserDetail from './components/users/UserDetail'
import AllProducts from './components/products/AllProducts'
import Categories from './components/products/Categories'
import LastProduct from './components/products/LastProduct'
import ProductDetail from './components/products/ProductDetail'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/" element={<Layout />}>
            <Route path="allusers" element={<AllUsers />} />
            <Route path="allproducts" element={<AllProducts />} />
            <Route path="allcategories" element={<Categories />} />
            <Route path="lastproduct" element={<LastProduct />} />
            <Route path="user/:id" element={<UserDetail />} />
            <Route path="product/:sku" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
