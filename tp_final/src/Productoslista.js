import { useEffect, useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Productos, { getProducto } from './Productos'
// import './ProductsList.css'


function Productslista(props){
    
    const [productos, setProductos] = useState(false)
    const {category} = useParams()
    
    useEffect(()=>{
        // fetch
        setProductos([])
    },[category])
    return(
        <Container>
            <ListGroup>
                
                <Productos id={props.id}></Productos>
                {/* <Productos id={props.id}></Productos> */}
            </ListGroup>
        </Container>
    )
}
export default Productslista