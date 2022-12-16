import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { app, firestore } from '../firebase/clientApp'
import Image from 'next/image';
import Grid from '@mui/material/Grid';
// import plswait from '../art_assests/SVG/waiting.svg';
import styles from '../styles/reading.module.css';
import Head from 'next/head'
import React, {useState, useEffect} from 'react';



import Link from 'next/link'


const Selection = () => {


return(

  <>

    <div className="body">
    <br/> <br/>
    <h1 className={styles.selectIssueTitle}> Kitchen Sink Publications</h1>
        <Grid container spacing={0}>
        
          <Grid item sm={3} xs={6}>
            <Link href="/issues/space-bar">  
                <img className={styles.selectIssue} src="https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/SpaceBar%2Fcoverphoto.jpg?alt=media&token=2d13e419-91bb-48fe-a7d9-50382ba50a33"/>
            </Link>
          </Grid>

          <Grid item  sm={3} xs={6}>
            <Link href="/issues/here-and-now">  
                <img className={styles.selectIssue} src="https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/here-and-now.jpg?alt=media&token=3ed94f3e-675c-48ad-9eaa-b2865642e7d5"/>
            </Link>
          </Grid>

          <Grid item  sm={3} xs={6}>
            <Link href="/issues/let-that-sink-in">  
                <img className={styles.selectIssue} src="https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/LetThatSinkIn%2FLet-That-Sink-In-Cover-800x1133.jpg?alt=media&token=e73cff85-0bfd-492a-b5ee-49e270c80512"/>
            </Link>
          </Grid>


          


        </Grid>
    </div>
    <br/>
    <br/>
    <br/>
  </>
)
}
export default Selection;
