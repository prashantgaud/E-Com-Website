
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { HomeMax } from "@mui/icons-material";


function App() {

    return (
        <Router>

          <Routes>
            <Route path="/" element={<Home/>} exact/>
          </Routes>
  
          <Routes>
            <Route path="/login" element={<Login/>} exact/>
          </Routes>
  
          <Routes>
            <Route path="/register" element={<Register/>} exact/>
          </Routes>
  
          <Routes>
            <Route path="/product" element={<Product/>} exact/>
          </Routes>
  
          <Routes>
            <Route path="/productList" element={<ProductList/>} exact/>
          </Routes>
  
          <Routes>
            <Route path="/cart" element={<Cart/>} exact/>
          </Routes>
      </Router>
   
    );   
}

export default App;
