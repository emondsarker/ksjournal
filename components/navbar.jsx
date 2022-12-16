import React from 'react'
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import { style } from '@mui/system'
const Navbar = () => {


  return(
    <>
                
    <div className={styles.NavbarContainer}>

    <div className={styles.asd}> 
        <div className={styles.NavLogo}>
            <img alt="logo" src="https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/logo.jpg?alt=media&token=69dd8167-a979-4ed9-93d7-d9112828e3c3"/>
        <p>Kitchen Sink <br/> Journal</p>
        </div>
    </div>
      
      
      

      
    </div>



    </>
  )
}

export default Navbar;
