import React,{useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
// import {Paper, Avatar, IconButton, Table, TableContainer, TableHead, TableRow,TableCell,TableBody} from '@material-ui/core';
import { deleteUser, getUser } from '../../../redux/actions/actions';

import Sidebar from '../Sidebar';
import styles from './Users.module.css'

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';



function Userss() {

    const dispatch = useDispatch();
  
    const history = useNavigate()
    const users = useSelector((state)=>state.user)
    
    // console.log(users)
    
    

    // const [users, setUsers] = useState([])
    // useEffect(()=>{
    //     const fetchData = async () => {
    //         const result = await axios.get('https://hiremyskillsbackend.onrender.com/users');
    //         setUsers(result.data);
    //       };
    //       fetchData();
    //     },[])
    useEffect(()=>{
      dispatch(getUser())
    },[dispatch])

//  console.log("ZZZZZZZZZZZZZZZZZZZZ",users[0].deleted)

// const handleDeactivate = (id)=>{
//     dispatch(deleteUser())
// }
// const aux = users.filter((user)=> user.deleted === true )
// console.log(aux)

const handleDelete = (e, id)=>{
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
        <Table bordered hover>
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
        {users.length>0 ? users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.contact}</td>
            <td>{user.town}</td>
            <td>
              <Button   variant="warning">Edit</Button>{' '}


              {user.deleted === false ? <Button onClick={(e)=>handleDelete(e, user.id)}  value={user.id} variant="danger" size='small'>Delete</Button>
              
              : <Button onClick={(e)=>handleDelete(e, user.id)}  value={user.id} variant="warning" size='small'>Active</Button>}
              
            </td>
          </tr>
        )): null}
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default Userss