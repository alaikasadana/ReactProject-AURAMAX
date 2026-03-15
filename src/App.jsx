import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Product from "./components/Product"
import Cart from "./components/Cart"
import Account from "./components/Account"



function App() {

  return (
    <>

    <Routes>
      <Route path="/"element={<Layout/>}>
      <Route index element={<Home/>}/>
      
       
     
      </Route>
     <Route path="/signup" element={<Signup />} />
     <Route path="/login" element={<Login />} />
     <Route path="product/" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
        <Route path="/account" element={<Account />} />
   
     
    </Routes>
    

 
    </>
  )
}

export default App
