import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfessionals, deleteProfessional, patchProfessionals} from '../../../redux/actions/actions';
import Sidebar from '../Sidebar';
import { useNavigate } from 'react-router-dom';
import styles from './Professionals.module.css'
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';


function Trabajadores() {
    const dispatch = useDispatch();
    const history = useNavigate()
    const professionals = useSelector((state)=>state.professionals)
    const [ed, setEd]=useState(false)
    const [id, setId] = useState(false)

    const [data, setData]=useState({
        name:'',
        photo:'',
        email:'',
        description:'',
        skills:[],
    })

    const [profesion, setProfesion] = useState([])


    useEffect(()=>{
        dispatch(getProfessionals())
    },[data])

const handleDelete = (e,id)=>{
    console.log("DELETeDEADO  ",id)
    dispatch(deleteProfessional(id))
    alert(`Usuario Eliminado`)
    history(0)
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

const handleProfession = (e)=>{
    setProfesion([...profesion, e.target.value])
}

const handleChageId=(e)=>{
  console.log("  IDDD ", e.target.value)

    e.preventDefault()
    setId(e.target.value)
}
const handleSubmit=(e, profesid)=>{
    setData(data.skills=profesion)
    console.log("SUBBMIT   \n",data)
    dispatch(patchProfessionals(data, profesid))
    setEd(false)
    history(0)
    // console.log("SUBBMIT   \n",data)
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
                    <th>Description</th>
                    <th>Profession</th>
                    <th>Action</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    professionals.length > 0 ?professionals.map((prof)=>(
                        <tr key={prof.id}>
                            <td>{prof.id}</td>

                            <td>{ed===true ? <input type="text" name='name' onChange={handleChange} placeholder={prof.name} /> : prof.name}</td>
                            <td>{ed===true ? <input type="text"  name='description' onChange={handleChange} placeholder={prof.description} />: prof.description}</td>

                            <td>{ed===true ? <input type="text"  name='email' onChange={handleChange} placeholder={prof.email} />: prof.email}</td>
                            <td>{ed===true ? <input type="number"  name='contact' onChange={handleChange} placeholder={prof.contact} />: prof.contact}</td>

                            <td>
                            {/* {ed===true ? <input type="text" name='skills' onChange={handleProfession} placeholder={[prof.skill]}/>:prof.skills} */}
                            {ed===true ? <select onChange={handleProfession} name=''>
                                <option>Professions</option>
                                
                                    {!profesion.includes('Full Stack Developer') && <option name="Full Stack Developer">Full Stack Developer</option>}
                                    {!profesion.includes('Web Design') && <option name="Web Design">Web Design</option>}
                                    {!profesion.includes('Data Science') && <option name="Data Science">Data Science</option>}
                                    {!profesion.includes('TV repair') && <option name="TV repair">TV repair</option>}
                                    {!profesion.includes('Appliances repair') && <option name="Appliances repair">Appliances repair</option>}
                                    {!profesion.includes('Electricians') && <option name="Electricians">Electricians</option>}
                                    {!profesion.includes('Plumber') && <option name="Plumber">Plumber</option>}
                                    {!profesion.includes('Carpenter') && <option name="Carpenter">Carpenter</option>}
                                    {!profesion.includes('Cleaning') && <option name="Cleaning">Cleaning</option>}
                                    {!profesion.includes('Civil Engineer') && <option name="Civil Engineer">Civil Engineer</option>}
                                    {!profesion.includes('Mechanical Engineer') && <option name="Mechanical Engineer">Mechanical Engineer</option>}
                                    {!profesion.includes('Industrial Engineer') && <option name="Industrial Engineer">Industrial Engineer</option>}
                                    {!profesion.includes('Secretary') && <option name="Secretary">Secretary</option>}
                                    {!profesion.includes('Administrator') && <option name="Administrator">Administrator</option>}
                                    {!profesion.includes('Accounting') && <option name="Accounting">Accounting</option>}
                                    {!profesion.includes('Doctor') && <option name="Doctor">Doctor</option>}
                                    {!profesion.includes('Dentist') && <option name="Dentist">Dentist</option>}
                                    {!profesion.includes('Nurse') && <option name="Nurse">Nurse</option>}
                                    
                                
                                
                            </select>: <>{prof.skills.map((e)=>e)}</>}
                            
                            </td>
                            <td>
                            <Button  onClick={()=>handleEd()} variant="warning">Edit</Button>
                            {ed===false && prof.deleted === false && <Button onClick={(e)=>handleDelete(e, prof.id)}  value={prof.id} variant="danger" size='small'>Delete</Button>}
              
                            {ed===false && prof.deleted===true && <Button onClick={(e)=>handleDelete(e, prof.id)}  value={prof.id} variant="warning" size='small'>Active</Button>}
                            {ed===true && <Button onClick={(e)=> handleSubmit(e, prof.id)} variant ="warning">Submit</Button>}
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