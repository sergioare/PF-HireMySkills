import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {Paper, Avatar, IconButton, Table, TableContainer, TableHead, TableRow,TableCell,TableBody} from '@material-ui/core';
import { getUser, deleteUser } from '../../../redux/actions/actions';
import {EditOutlined, DeleteForeverOutlined} from '@material-ui/icons'
import Sidebar from '../Sidebar';
import styles from './Users.module.css'
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';



function Users() {
    const dispatch = useDispatch();
    const history = useNavigate()
    const users = useSelector((state)=>state?.user)
    console.log(users)

    useEffect(()=>{
        dispatch(getUser())
    },[dispatch])

// const handleDeactivate = (id)=>{
//     dispatch(deleteUser())
// }
// const aux = users.filter((user)=> user.deleted === true )
// console.log(aux)

const handleDelete = (e,id)=>{
    console.log(id , "AAAAA")
    e.preventDefault()
    dispatch(deleteUser(e,id))
    // history('/admin/users')
    
}

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
                    {users.length>0 ? users.map((user)=>(
                        <TableRow hover className={styles.tableRow} key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.contact}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell><Avatar src={user.photo}/></TableCell>
                            <TableCell>
                    
                                <IconButton onClick={()=> alert(`Editar ${user.name}`)} color={'primary'} size='small'>
                                    <EditOutlined/>
                                </IconButton>
                    
                                <IconButton onClick={(e)=>handleDelete(e,user.id)} value= {user.id}  color={'secondary'} size='small'>
                                    <DeleteForeverOutlined/>
                                </IconButton>
                                {/* <button
                                    className={
                                        styles.detailBtnBack +
                                        " " +
                                        styles.space
                                    }
                                    onClick={handleDelete(user.id)}
                                >
                                    <RiDeleteBinLine />
                                </button> */}
                            </TableCell>
                        </TableRow>
                    )):null}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    </>
  )
}

export default Users