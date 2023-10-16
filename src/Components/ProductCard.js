import React from 'react'
import{useNavigate} from "react-router-dom"
import {Card,CardTitle,CardBody,CardText,Button} from "reactstrap"
import {AiFillDelete,AiOutlineEdit} from "react-icons/ai"

function ProductCard({value,handleDelete}) {
  const navigate = useNavigate()
  return (
    <Card  style={{ width: '18rem', height: '40rem' }} className='card-style'>  
    <CardBody>
        <CardTitle tag="h5">{value.name} </CardTitle>
        <img alt="Product" src={value.productImage } width = "100%"/>
        <CardText> Rs. {value.price}</CardText>
        <CardText>{value.description}</CardText>
        <Button color = "danger" onClick={()=>handleDelete(value.id)}> <AiFillDelete/></Button>
        <Button color = "success" onClick ={()=>navigate(`/products/editproduct/${value.id}`)}> <AiOutlineEdit/> </Button>
       
    </CardBody>
  </Card>
  )
}

export default ProductCard


