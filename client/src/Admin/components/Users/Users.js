import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {Paper, Avatar, IconButton, Table, TableContainer, TableHead, TableRow,TableCell,TableBody} from '@material-ui/core';
import { getUser, deleteUser } from '../../../redux/actions/actions';
import {EditOutlined, DeleteForeverOutlined} from '@material-ui/icons'
import Sidebar from '../Sidebar';
import styles from './Users.module.css'
import { RiDeleteBinLine } from "react-icons/ri";



function Users() {
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.user)
    console.log(users)

    useEffect(()=>{
        dispatch(getUser())
    },[dispatch])

// const handleDeactivate = (id)=>{
//     dispatch(deleteUser())
// }
// const aux = users.filter((user)=> user.deleted === true )
// console.log(aux)

const handleDelete = (e, id)=>{
    console.log(id , "AAAAA")
    e.preventDefault()
    dispatch(deleteUser(id))
    
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
                    {users?.map((userIndex)=>(
                        <TableRow hover className={styles.tableRow} key={userIndex.id}>
                            <TableCell>{userIndex.id}</TableCell>
                            <TableCell>{userIndex.name}</TableCell>
                            <TableCell>{userIndex.contact}</TableCell>
                            <TableCell>{userIndex.email}</TableCell>
                            <TableCell><Avatar src={userIndex.photo}/></TableCell>
                            <TableCell>
                    
                                <IconButton onClick={()=> alert(`Editar ${userIndex.name}`)} color={'primary'} size='small'>
                                    <EditOutlined/>
                                </IconButton>
                    
                                <IconButton onClick={(e)=>handleDelete(e,userIndex.id)} value= {userIndex.id}  color={'secondary'} size='small'>
                                    <DeleteForeverOutlined/>
                                </IconButton>
                                {/* <button
                                    className={
                                        styles.detailBtnBack +
                                        " " +
                                        styles.space
                                    }
                                    onClick={handleDelete(userIndex.id)}
                                >
                                    <RiDeleteBinLine />
                                </button> */}
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