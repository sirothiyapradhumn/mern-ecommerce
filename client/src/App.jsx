import { Button } from "@/components/ui/button"
import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/AuthLayout"
import AuthLogin from "./pages/auth/AuthLogin"
import AuthRegister from "./pages/auth/AuthRegister"
import AdminLayout from "./components/admin-view/AdminLayout"
import Dashboard from "./pages/admin-view/Dashboard"
import Products from "./pages/admin-view/Products"
import Orders from "./pages/admin-view/Orders"
import Features from "./pages/admin-view/Features"
import ShoppingLayout from "./components/shopping-view/ShoppingLayout"
import NotFound from "./pages/notFound/NotFound"
import ShoppingAccount from "./pages/shopping-view/ShoppingAccount"
import ShoppingCheckout from "./pages/shopping-view/ShoppingCheckout"
import ShoppingHome from "./pages/shopping-view/ShoppingHome"
import ShoppingListing from "./pages/shopping-view/ShoppingListing"

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="features" element={<Features />} />
        </Route>

        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="home" element={<ShoppingHome />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="listing" element={<ShoppingListing />} />
        </Route>  

        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default App