import './App.css';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import ProductDisplay from "./Components/ProductDisplay"
import AddProduct from './Components/AddProduct';
import EditProduct from './Components/EditProduct';
import { useState } from 'react';


function App() {
  const[productData,setProductData] = useState([])
  return (
    <div className="App">
    
    <BrowserRouter> 
      <Routes>
      
          <Route path = "/" element = {<ProductDisplay/>}/>
          <Route path = "/products/addproduct" element =
           {<AddProduct 
            productData = {productData} 
            setProductData = {setProductData}/>}/>
           <Route path = "/products/editproduct/:id" element =
           {<EditProduct/>}/>
        
      </Routes>
    
    </BrowserRouter>
      
   </div>
  );
}
 
export default App;

