import React,{useState} from 'react'
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
// import {Paper, Avatar, IconButton, Table, TableContainer, TableHead, TableRow,TableCell,TableBody} from '@material-ui/core';
import { deleteUser } from '../../../redux/actions/actions';

import Sidebar from '../Sidebar';
import styles from './Users.module.css'

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';



function Userss() {
    const dispatch = useDispatch();
    const history = useNavigate()
    // const users = useSelector((state)=>state.user)

    // console.log(users)
    
    

    const [users, setUsers] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const result = await axios.get('https://hiremyskillsbackend.onrender.com/users');
            setUsers(result.data);
          };
          fetchData();
        },[])
 console.log(users)

// const handleDeactivate = (id)=>{
//     dispatch(deleteUser())
// }
// const aux = users.filter((user)=> user.deleted === true )
// console.log(aux)

const handleDelete = (id)=>{
    console.log(id , "AAAAA")
    // e.preventDefault()
    dispatch(deleteUser(id))
    alert(`Usuario  desactivado`)
    window.location.href = window.location.href
    
}

    return (
    <>
    <div className={styles.components}>
        
        <div>
        <Sidebar/>
        </div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Town</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.contact}</td>
            <td>{user.town}</td>
            <td>
              <Button   variant="warning">Edit</Button>{' '}
              <Button onClick={()=>handleDelete(user.id)}  value={user.id} variant="danger" size='small'>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default Userss