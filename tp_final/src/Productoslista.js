// import { useEffect, useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Productos, { getProducto } from './Productos'
// import './ProductsList.css'


function Productslista(){
    
    const producto = getProducto();
    const params = useParams();
    
    return(
        <Container>
            <ListGroup>
                <Productos id={params.id }> hola</Productos>
            </ListGroup>
        </Container>
    )
}
export default Productslista