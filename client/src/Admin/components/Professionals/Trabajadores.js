import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfessionals, deleteProfessional, patchProfessionals} from '../../../redux/actions/actions';
import Sidebar from '../Sidebar';
import styles from './Professionals.module.css'
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';


function Trabajadores() {
    const dispatch = useDispatch();
    const professionals = useSelector((state)=>state.professionals)
    const [ed, setEd]=useState(false)
    const [id, setId] = useState(false)

    const [data, setData]=useState({
        name:'',
        photo:'',
        email:'',
        
    })


    // useEffect(()=>{
    //     const fetchData = async () => {
    //         const result = await axios.get('https://hiremyskillsbackend.onrender.com/professionals');
    //         setProfessional(result.data);
    //       };
    //       fetchData();
    //     },[])

    useEffect(()=>{
        dispatch(getProfessionals())
    },[dispatch])

const handleDelete = (e,id)=>{
    dispatch(deleteProfessional(id))
    alert(`Usuario Eliminado`)
    window.location.href = window.location.href
}
    console.log(professionals)
    
const handleEd = ()=>{
        setEd(true)
    }  

const handleChange= (e)=>{
  console.log(e.target.value, "TAAARGET")

    setData(state=>{
        const newState = {
            ...state,
            [e.target.name]:e.target.value,
        }
        return newState
    })
}

const handleChageId=(e)=>{
  console.log("  IDDD ", e.target.value)

    e.preventDefault()
    setId(e.target.value)
}
const handleSubmit=(e)=>{
  console.log("SUBBMIT   \n",data)

    dispatch(patchProfessionals(data, id))
    setEd(false)
    // window.location.href = window.location.href 
}
  return (
    <>
    <div className={styles.components}>
        
        <div>
        <Sidebar/>
        </div>
        <Table responsive striped bordered hover variant="dark" size='sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Action</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    professionals.length > 0 ?professionals.map((professionals)=>(
                        <tr key={professionals.id}>
                            <td>{ed===true ? <input type="text" value={`${professionals.id}a`} name='id' onChange={handleChageId} placeholder={professionals.id}/>:professionals.id}</td>

                            <td>{ed===true ? <input type="text" name='name' onChange={handleChange} placeholder={professionals.name} /> : professionals.name}</td>

                            <td>{ed===true ? <input type="text"  name='email' onChange={handleChange} placeholder={professionals.email} />: professionals.email}</td>

                            <td>{ed===true ? <input type="number"  name='contact' onChange={handleChange} placeholder={professionals.contact} />: professionals.contact}</td>
                            <td>
                            <Button  onClick={()=>handleEd()} variant="warning">Edit</Button>
                            {ed===false && professionals.deleted === false && <Button onClick={(e)=>handleDelete(e, professionals.id)}  value={professionals.id} variant="danger" size='small'>Delete</Button>}
              
                            {ed===false && professionals.deleted===true && <Button onClick={(e)=>handleDelete(e, professionals.id)}  value={professionals.id} variant="warning" size='small'>Active</Button>}
                            {ed===true && <Button onClick={(e)=> handleSubmit(e)} variant ="warning">Submit</Button>}
                            </td>
                        </tr>
                    ))
                :null}
            </tbody>
        </Table>
    </div>
    </>
  )
}

export default Trabajadores