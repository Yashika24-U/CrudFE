import React, { useState } from 'react'
import { API } from '../global'
import { useNavigate } from 'react-router-dom'
import {Form,FormGroup,Input,Label,Button,Col}from "reactstrap"

export default function AddProduct({productData,setProductData}) {
  
  const[name,setName] = useState("")
  // const[image,setImage] = useState("")
  const[productImage,setproductImage] = useState("")
  const[description,setDescription] = useState("")
  const[price,setPrice] = useState("")
  const navigate = useNavigate();

  const handleSubmit = ()=>{
    const newProducts = {
      name : name,
      // image : image,
      productImage:productImage,
      description : description,
      price:price,
    };
  
  fetch(`${API}/products`,{
    method : "POST",
    headers : {"Content-type" : "application/json"},
    body: JSON.stringify(newProducts),
    //  JSON.stringify(object) to convert a JavaScript object into a JSON string:
  })
  .then((data)=>data.json())
  .then((res)=>{
     setProductData(res)
    console.log(res)
  })
  .then(()=>navigate("/"))

};





  return (
   <div>
    
    <h1> AddProduct</h1>
    <Button onClick={()=>(navigate(-1))}>Back</Button>
    <br/>
    <Form > 
    <FormGroup row>
      <Label for= "productName" sm = {2}> Product Name</Label>
      <Col sm={9}>
      <Input  id="name"  
      name="name" 
      placeholder="Enter Product Name" 
      type="text"
      onChange={(event)=>setName(event.target.value)}
      value= {name}
      />
      </Col>   
    </FormGroup> 

    <FormGroup row>
      <Label for= "productImage" sm={2}> Product Image</Label>
      <Col sm={9}>
      <Input  id="productImage" 
      name="productImage" 
      placeholder="Enter ProductUrl"  
      type="text" 
      onChange={(event)=>setproductImage(event.target.value)}
      value = {productImage}
      />
      </Col>
    </FormGroup> 

    <FormGroup row>
      <Label for= "description" sm = {2}> Product Description</Label>
      <Col sm={9}>
      <Input  id="description"  
      name="description"  
      placeholder="Enter Product Description" 
      type="text"
      onChange={(event)=>setDescription(event.target.value)}
      value = {description}/>
      </Col>
    </FormGroup> 

    


    <FormGroup row>
      <Label for= "productPrice" sm = {2}> Product Price</Label>
      <Col sm={9}>
      <Input  id="price"
        name="price" 
        placeholder="Enter Product Price"  
        type="text"
        onChange={(event)=>setPrice(event.target.value)}
        value = {price}  />
      </Col>
    </FormGroup>  
    
    

    <Button onClick = {handleSubmit}> Submit </Button> 
     </Form>
</div>
  )
}
