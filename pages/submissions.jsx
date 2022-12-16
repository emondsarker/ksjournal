import react, {useState, useEffect} from 'react'
import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { app, firestore } from '../firebase/clientApp'
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import styles from '../styles/submissions.module.css';
import Head from 'next/head'
import CategoriesNavBar from '../components/CategoriesNavBar';
import Footer from '../components/footer';

import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

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
          <h1 className={styles.Header}>Submissions</h1>
        </Grid>
        <Grid item sm={5} xs={12}>
        <div className={styles.Image}>
          <h1> Taking Submissions! </h1>
          <img alt="image"  src={"https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/253326047_191081153188480_846148201500716649_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=Is0x05be2owAX9eNNv3&_nc_ht=scontent.fjsr8-1.fna&oh=1bc3dc22a52ddb9fc70fc6aa5efd55bf&oe=619506B8"}/>
          <p>The submissions are currently open till 10/12/21. Note that the submissions for this year’s publication is free for all.</p>
          <p>The submissions can be sent to <b>submissions@ksjournal.org</b></p>
          <a target="_blank" href="mailto:submissions@ksjournal.org" rel="noreferrer"><button>Submit Yours!</button></a>
        </div>
        </Grid>
        <Grid item sm={7} xs={12}>
          <div className={styles.text}>
            <h1>Our Submission Guidelines</h1>
            <p>Interested in submitting your work? Just follow these guidelines and you’ll be good to go!</p>
            <h2>Poetry Submission Guidelines</h2>
            <ul>
              <li>You can submit up to 3 poems for each publication. No poem should exceed two pages in length. Poems cannot be previously published works – they must be original pieces intended for the issue. </li>
              <li>Starting with our December 2021 issue, we have decided to forgo attaching a theme with every one of our issues. As such, you have the time and freedom to work on your poem(s) to your liking without having to wait for a specific theme.</li>
            </ul>

            <h2>Poetry Submission Guidelines</h2>
            <ul>
              <li>Send the poem(s) in an appropriately titled .docx file or via a Google Doc link (make sure the permissions are set to “anyone can edit”) attached in an email.</li>
              <li>Each poem has to start on a separate page (i.e. you can’t have two poems starting on the same page)</li>
              <li>Make sure the title is highlighted and remains separated from the entire poem. You can bold, underline, italicize or provide any other type of formatting to highlight the title.</li>
              <li>At the very end of the document, on a separate page, include a short author bio – within 50 words and written in the third person – as well as a list of your professional/social media links (not included within the bio or the bio’s word limit).</li>
              <li>Attach a high-quality picture of yourself (with your face clearly visible) in the body of the email.</li>
              <li>Email your submissions to submissions@ksjournal.org with the subject “Feature Submission” and specify the number of poems in the body.</li>
              <li>If you’re sending multiple poems, we’ll let you know before publishing which one we’ve chosen. Your poem may be subject to minor grammar and formatting edits which you will be notified of before publishing.</li>
            </ul>

            <h2>How Do We Pick Poems After Submissions?</h2>
            <p>While there’s no definite metric of judging poems, a few key criteria help to narrow down our choices:</p>
            <ul>
              <li>Original work: Previously published work will not be considered for publication. Poems published in any other literary journal, anthology, or book will be marked as previously published work. This includes popular sites such as Wattpad and other online poetry journals. </li>
              <li>Overall quality: Based on the kinds of techniques and the variety of forms present within poems, we pick the ones that stand out to us the most and reflect the poet’s unique flair.  </li>
            </ul>
            <p>Happy Writing!</p>
          </div>
        </Grid>

      </Grid>

    </div>
    <br/>
    <Footer/>

  </>)
}
export default SupportUs;
