import react, {useState, useEffect} from 'react'
import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { app, firestore } from '../firebase/clientApp'
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import styles from '../styles/aboutUs.module.css';
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




    <div className="body">
      <CategoriesNavBar/>

      <Grid container spacing={10}>
        <Grid item xs={12}>
          <h3 className={styles.Header}>About Kitchen Sink: <br/> From the Dining Room Table</h3>
        </Grid>
        <Grid item sm={4} xs={12}>
          <img alt="image" className={styles.Image} src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/KS_About_Us-1024x870.jpg?alt=media&token=436234c8-b6ca-4526-9377-2aa502dc1784"}/>

        </Grid>
        <Grid item sm={8} xs={12}>
          <div className={styles.text}>
            <p>
                Kitchen Sink was born with the desire to give more representation of poetry by Bangladeshis, for Bangladeshis. The idea spun into a conversation over the phone, which turned into a group chat. There we asked for suggestions for the name of the journal, stating that anything was welcome as long as it says something about us as team <b>“even if it’s as random as Kitchen Sink”</b>. And, given the bunch of hooligans that we are, we jumped on this wild ride.
            </p>
            <p>
                We are slated to publish one new anthology every three months and are currently working on our first publication, out on the first week of June, and there’s much more to come so we hope you’ll stick with us in this epic journey of ours.
            </p>
          </div>
        </Grid>
      
        
      </Grid>

      
    </div>
    <br/><br/><br/>
    <Footer/>
  </>)
}
export default SupportUs;
