import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import { getProfesionalsByProfession} from '../../redux/actions/actions';
import styles from './searchbar.module.css'


function Searchbar() {

    const dispatch = useDispatch()
  const [name, setName] = useState('')




  function handleInputChange (e) {
    e.preventDefault()
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getProfesionalsByProfession(name))
    setName('')

  }


  return (
    <>
    <div className={styles.container}>
      <input 
        className={styles.input}
        autoComplete="off"
        type="text" 
        placeholder={"TRY CARPENTER, DESIGNER, ELECTRICIAN"}
        id="search"
        onChange={(e) => handleInputChange(e)}
      />

        <button
            className={styles.but}
            type='submit' 
            onClick={(e) => handleSubmit(e)} >SEARCH
        </button>



    </div>
    </>

  )
}

export default Searchbar