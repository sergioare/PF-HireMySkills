import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {Paper, Avatar, IconButton, Table, TableContainer, TableHead, TableRow,TableCell,TableBody} from '@material-ui/core';
import { getProfessionals, deleteProfessional } from '../../../redux/actions/actions';
import {EditOutlined, DeleteForeverOutlined, PowerOffRounded} from '@material-ui/icons'
import Sidebar from '../Sidebar';
import styles from './Professionals.module.css'
import axios from 'axios';


function Trabajadores() {
    const dispatch = useDispatch();
    // const professionals = useSelector((state)=>state?.professionals)
    const [professionals, setProfessional] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const result = await axios.get('https://hiremyskillsbackend.onrender.com/professionals');
            setProfessional(result.data);
          };
          fetchData();
        },[])

const handleDeactivate = (id)=>{
    dispatch(deleteProfessional(id))
    alert(`Usuario Eliminado`)
    window.location.href = window.location.href
}
    console.log(professionals)
    

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
                    {professionals.map((professionals)=>(
                        <TableRow hover className={styles.tableRow} key={professionals.id}>
                            <TableCell>{professionals.id}</TableCell>
                            <TableCell>{professionals.name}</TableCell>
                            <TableCell>{professionals.contact}</TableCell>
                            <TableCell>{professionals.email}</TableCell>
                            <TableCell><Avatar src={professionals.photo}/></TableCell>
                            <TableCell>
                    
                                <IconButton onClick={()=>  alert(`Editar ${professionals.name}`)} color={'primary'} size='small'>
                                    <EditOutlined/>
                                </IconButton>
                    {/* {const borrados = users.filter((users))} */}
                                <IconButton onClick={()=>handleDeactivate(professionals.id)} color={'secondary'} size='small'>
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

export default Trabajadores