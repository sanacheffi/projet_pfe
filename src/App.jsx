import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import { Toaster } from 'sonner'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CollectionPage from './pages/CollectionPage'
import ProductDetails from './components/Products/ProductDetails'
import Checkout from './components/Cart/Checkout'
import AdminLayout from './components/Admin/AdminLayout'
import AdminHomePage from './pages/AdminHomePage'
import UserManagement from './components/Admin/UserManagement'
import ProductManagement from './components/Admin/ProductManagement'
import EditProduct from './components/Admin/EditProduct'
import AddUser from './components/Admin/AddUser'
import AddProduct from './components/Admin/AddProduct'

const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-right"/>
    <Routes>
      {/* user layout */}
      <Route path="/" element={<UserLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="collections/:collection" element={<CollectionPage/>}/>
      <Route path="product/:id" element={<ProductDetails/>}/>
      <Route path="checkout" element={<Checkout/>}/>
      </Route>
      {/* admin layout */}
      <Route path="/admin" element={<AdminLayout/>}>
      <Route index element={<AdminHomePage/>}/>
      <Route path="users" element={<UserManagement/>}/>
      <Route path="users/add" element={<AddUser/>}/>
      <Route path="products" element={<ProductManagement/>}/>
      <Route path="products/add" element={<AddProduct/>}/>
      <Route path="products/:id/edit" element={<EditProduct/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
