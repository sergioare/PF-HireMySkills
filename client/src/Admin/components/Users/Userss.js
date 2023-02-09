import React,{useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { deleteUser, getUser, patchUser } from '../../../redux/actions/actions';
import Sidebar from '../Sidebar';
import styles from './Users.module.css'
import { Table, Button } from 'react-bootstrap';



function Userss() {

    const dispatch = useDispatch();
    const [ed, setEd]= useState(false);
    
    const users = useSelector((state)=>state.user)

    // console.log("acáaa usuarios", users)

    // console.log("los usuarios",users)
    const [id, setId] = useState('')


    
    const [data,setData]=useState({
      
      name:'',
      photo:'',
      email:'',
      town:'',
      contact:'',
    })

    useEffect(()=>{
      dispatch(getUser())
    },[dispatch])

const handleDelete = (e, id)=>{
    dispatch(deleteUser(id))
    alert(`Usuario  desactivado`)
    window.location.href = window.location.href
    
}

const handleEd = ()=>{
  setEd(true)
}

const handleChange=(e)=>{
  console.log(e.target.value, "TAAARGET")
  setData(state=>{
    const newState = {
    ...state,
      [e.target.name]: e.target.value,
      
      
    }
    return newState
  }
)
 
}

// const handleChageId = (e)=>{
//   console.log(e.target.value, "  IDDD ")
//   e.preventDefault();
//   setId(e.target.value)
// }
const handleSubmit=(e, userid)=>{
  // e.preventDefault();
  console.log("SUBBMIT   \n",data)
  dispatch(patchUser(data, userid))

  setEd(false)
  // window.location.href = window.location.href

}

    return (
    <>
    <div className={styles.components}>
        
        <div>
        <Sidebar/>
        </div>
        <Table responsive striped bordered hover variant="dark" size='sm' >
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
            <td>{ed===true ? <input type="text" name='name' onChange={handleChange} placeholder={user.name} /> : user.name}</td>
            <td>{ed===true ? <input type="text"  name='email' onChange={handleChange} placeholder={user.email} />: user.email}</td>
            <td>{ed===true ? <input type="number"  name='contact' onChange={handleChange} placeholder={user.contact} />: user.contact}</td>
            <td>{ed===true ? <input type="text" name='town' onChange={handleChange} placeholder={user.town} />: user.town}</td>
            <td>
              <Button  onClick={()=>handleEd()} variant="warning">Edit</Button>
              {/* { ed === true ?  
                <>
                <td><input type="text" value='name' placeholder={user.name}/>{user.name}</td>
                <td><input type="text" value='email' placeholder={user.email}/>{user.email}</td>
                <td><input type="number" value='contact' placeholder={user.contact}/>{user.contact}</td>
                <td><input type="text" value='town' placeholder={user.town}/>{user.town}</td>
                </>
              : null } */}
              {ed===false && user.deleted === false && <Button onClick={(e)=>handleDelete(e, user.id)}  value={user.id} variant="danger" size='small'>Delete</Button>}
              
              {ed===false && user.deleted===true && <Button onClick={(e)=>handleDelete(e, user.id)}  value={user.id} variant="warning" size='small'>Active</Button>}
              {ed===true && <Button onClick={(e)=> handleSubmit(e, user.id)} variant ="warning">Submit</Button>}
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