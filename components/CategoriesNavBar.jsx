import React from 'react'
import styles from '../styles/CategoriesNavBar.module.css'
import Link from 'next/link'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const CategoriesNavBar = () => {

  function open() {
    console.log("open")
    // document.getElementById("mySidebar").style.width = "100%";
    var test = document.getElementById("mySidebar")
    test.style.display = 'block';
  }
  console.log("open")
  function close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("mySidebar").style.transform= "translate(0%, 0px)"
  }

  return(
    <>

  <div className={styles.sideBar} id="mySidebar">
    <div className={styles.sideBarContent}>
      <button onClick={()=>{close()}} ><CloseIcon/></button>
      <Link href="/">Home</Link>
      <Link href="/issues/space-bar">Space Bar</Link>
      <Link href="/behind-the-screens">SinkCore</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/news">News</Link>
      <Link href="/submissions">Submit</Link>
      <Link href="/contact-us">Contact Us</Link>
      <Link href="/support-us">Support Us</Link>
    </div>
  </div>

    <div className={styles.NavBarContainer}>
    <div className={styles.Categories}>

    <div className={styles.MenuIcon}>
    <button onClick={()=>{open()}} >
      <MenuIcon fontSize="large"/>
    </button>
    </div>
      
    <div className={styles.logoContainer}>    <Link href="/">
      <div className={styles.NavLogo}>
            
            <img alt="logo" src="https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/logo1.jpg?alt=media&token=bccbabc8-0d5b-4092-98cf-aea375ad46fc"/>
            
        </div>
        </Link>
        </div>

      

      <div className={styles.dropdown}>
      <button className={styles.digital}><p>Read <ArrowDropDownIcon/></p></button>

      <div className={styles.subCategoriesDigital}>
      <div className={styles.subCategoriesContainer}>
        <div className={styles.subCategoriesColumn}>
          <Link href="/issues/space-bar">Space Bar</Link>
          <Link href="/categories/">Previous Issues</Link>
          <Link href="/categories/">Featured Focus</Link>
          <Link href="/blogs/">Blogs</Link>
        </div>
        

        </div>
      </div>
      </div>

      

      <div className={styles.dropdown}>

      <button className={styles.video}><p>SinkCore <ArrowDropDownIcon/> </p></button>

      <div className={styles.subCategoriesVideo}>
      <div className={styles.subCategoriesContainer}>
        <div className={styles.subCategoriesColumn}>

          <Link href="/behind-the-screens">Behind The Screens</Link>
          <Link href="/about-us/">About Us</Link>

        </div>



        </div>
      </div>
      </div>

      

     

      <div className={styles.dropdown}>
        <button className={styles.miscellaneous}>
          <Link href="/submissions">Submit</Link>
        </button>
      </div>

      <div className={styles.dropdown}>
        <button className={styles.miscellaneous}>
          <Link href="/news">News</Link>
        </button>
      </div>

      <div className={styles.dropdown}>
        <button className={styles.miscellaneous}>
          <Link href="/contact-us">Contact</Link>
        </button>
      </div>

      <div className={styles.dropdown}>
        <button className={styles.miscellaneous}>
          <Link href="/support-us">Support Us</Link>
        </button>
      </div>

    

    </div>
    </div>


    </>
  )
}

export default CategoriesNavBar;
