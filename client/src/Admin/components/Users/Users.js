import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {Paper, Avatar, IconButton, Table, TableContainer, TableHead, TableRow,TableCell,TableBody} from '@material-ui/core';
import { getUser, deleteUser } from '../../../redux/actions/actions';
import {EditOutlined, DeleteForeverOutlined} from '@material-ui/icons'
import Sidebar from '../Sidebar';
import styles from './Users.module.css'

function Users() {
    const dispatch = useDispatch();
    const users = useSelector((state)=>state?.user)
    

    useEffect(()=>{
        dispatch(getUser())
    },[dispatch])

// const handleDeactivate = (id)=>{
//     dispatch(deleteUser())
// }
const aux = users.filter((user)=> user.deleted === true )
console.log(aux)

  return (
    <>
    <div className={styles.components}>
        
        <div>
        <Sidebar/>
        </div>
        <TableContainer component={Paper} elevation={4}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Contact</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Photo</TableCell>
                        <TableCell>Actions</TableCell>
                   </TableRow>
                </TableHead>
                <TableBody>
                    {aux.map((users)=>(
                        <TableRow hover className={styles.tableRow} key={users.id}>
                            <TableCell>{users.id}</TableCell>
                            <TableCell>{users.name}</TableCell>
                            <TableCell>{users.contact}</TableCell>
                            <TableCell>{users.email}</TableCell>
                            <TableCell><Avatar src={users.photo}/></TableCell>
                            <TableCell>
                    
                                <IconButton onClick={()=> alert(`Editar ${users.name}`)} color={'primary'} size='small'>
                                    <EditOutlined/>
                                </IconButton>
                    
                                <IconButton onClick={()=> alert(`Usuario ${users.name} Eliminado`)} color={'secondary'} size='small'>
                                    <DeleteForeverOutlined/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    </>
  )
}

export default Users