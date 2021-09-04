import React from 'react';
import { Container, Row } from 'react-bootstrap';
import GridUser from './UserCard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


toast.configure();
function Users(props){
    const deleteUser=(em)=>{
        props.getUserEmail(em);
    }
 
        return <Container className="mt-4">
            <Row>
                {props.allUsers.map((Udata,index)=>{
                    
                    return (<GridUser clickHandler={deleteUser} {...Udata} key={index}/>)
                })}
            </Row>
        </Container>
}

export default Users;