import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Product from "./components/Product"


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
    </Routes>
    

 
    </>
  )
}

export default App
