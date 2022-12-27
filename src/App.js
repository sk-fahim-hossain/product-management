import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import AddProduct from './component/AddProduct/AddProduct';
import ManageProduct from './component/ManageProduct/ManageProduct';
import UpdateProduct from './component/UpdateProduct/UpdateProduct';
import ProductDetails from './component/ProductDetails/ProductDetails';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/product/add" element={<AddProduct></AddProduct>}></Route>
        <Route path="/product/manage" element={<ManageProduct></ManageProduct>}></Route>
        <Route path="/product/manage/:id" element={<UpdateProduct></UpdateProduct>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
