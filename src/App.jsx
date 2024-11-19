import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/extras/Loader";

const Dashboard = lazy(() => import('./components/main/Dashboard'));
const Layout = lazy(() => import('./components/extras/Layout'));
const NotFound = lazy(() => import('./components/extras/NotFound'));
const AllUsers = lazy(() => import('./components/users/AllUsers'));
const UserDetail = lazy(() => import('./components/users/UserDetail'));
const AllProducts = lazy(() => import('./components/products/AllProducts'));
const Categories = lazy(() => import('./components/products/Categories'));
const LastProduct = lazy(() => import('./components/products/LastProduct'));
const ProductDetail = lazy(() => import('./components/products/ProductDetail'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

