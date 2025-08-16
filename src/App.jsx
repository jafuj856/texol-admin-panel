import Dashboard from "./pages/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AddProductForm from "./pages/productes/addProduct/AddProduct";
import AdminRoute from "./pages/protectedRoutes/AdminRoute";
import LoggedOut from "./pages/protectedRoutes/LoggedOut";
import Login from "./pages/login/Login";
import ProductDetailPage from "./pages/productes/ProductDetailPage";

function App() {
  return (
    <Routes>
      <Route path="" element={<AdminRoute />}>
        <Route path="" element={<Home />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product-deatil" element={<ProductDetailPage />} />
          <Route path="/add-product" element={<AddProductForm />} />
        </Route>
      </Route>
      <Route>
        <Route path="" element={<LoggedOut />}>
          <Route path="/auth" element={<Login />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
