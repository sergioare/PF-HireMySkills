import React from 'react'
import Users from '../components/Users/Users'
import Sidebar from '../components/Sidebar';
import styles from './Homeadmin.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeAdmin() {
  return (
    <>
     <div className={styles.components}>
            <Sidebar />
            
        </div>
       

    </>
  )
}

export default HomeAdmin