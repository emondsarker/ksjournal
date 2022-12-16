import react, {useState, useEffect} from 'react'
import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { app, firestore } from '../firebase/clientApp'
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import styles from '../styles/supportUs.module.css';
import Head from 'next/head'
import CategoriesNavBar from '../components/CategoriesNavBar';
import Footer from '../components/footer';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const SupportUs = () => {



  return(
    <>

    <Head>
      <title>Karjo.net</title>
      <meta name="description" content="The best freelancing experience in Bangladesh. Coming in 2022" />
      <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/karjo-3b91a.appspot.com/o/thumb.JPG?alt=media&token=0e4c3b29-b45e-4956-83ae-41847ace3ec7" />
      <meta property="og:image:width" content="450" />
      <meta property="og:image:height" content="298" />
      <meta property="og:description" content="The best freelancing experience in Bangladesh. Coming in 2022."/>
      <link rel="icon" href="/favicon.ico" />
    </Head>



    <CategoriesNavBar/>
    <div className="body">
      

      <Grid container spacing={10}>
        <Grid item xs={12}>
          <h1 className={styles.Header}>Support Us</h1>
        </Grid>
        <Grid item sm={4} xs={12}>
          <img alt="image" className={styles.Image} src={"https://www.ksjournal.org/wp-content/uploads/2021/05/stonks-1-1024x1024.jpg"}/>

        </Grid>
        <Grid item sm={8} xs={12}>
          <div className={styles.text}>
          <p>Kitchen Sink is a not-for-profit literary journal. Our team has worked immensely hard without any remuneration. Should you choose to support us, all proceeds made from your contributions will go directly into running the website and its publications.</p>
          <p>Currently we are only able to take in contributions via Bkash.</p>
          <h2>Send your money to: +8801707179408</h2>
          <p>Don’t forget to add “Scraps” and your name to the reference so we can thank you!</p>
          </div>
        </Grid>
      
        <Grid item xs={12}>
          <div className={styles.thankYou}>
            <h1>Thank you </h1>
            <h2>- to all our visitors, especially our monthly contributors -</h2>
            <ul>
              <li>Adhora Ahmed</li>
              <li>Mahir Abrar</li>
              <li>Sumaiya Rashid</li>
              <li>Arko Ahmed</li>
              <li>Tashfiah Tahsin</li>
            </ul>
          </div>
        </Grid>
      </Grid>

      
    </div>
    <Footer/>
  </>)
}
export default SupportUs;
