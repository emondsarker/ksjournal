import React, {useState, useEffect} from 'react';
import { getFirestore, collection, doc, addDoc, setDoc, getDoc } from "firebase/firestore";
import { app, firestore } from '../firebase/clientApp'
import Image from 'next/image';
import Grid from '@mui/material/Grid';

import styles from '../styles/about.module.css';
import Head from 'next/head'
import CategoriesNavBar from '../components/CategoriesNavBar';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Footer from '../components/footer';

const BehindTheScreens = () => {




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

    <div className={styles.header}>
      <h1> Behind</h1>
      <h3>the</h3>
      <h1>Screens.</h1>
    </div>

    <div className={styles.subHeader}>
    <h1>The Sink Gang</h1>
    </div>

    <div className={styles.SinkGang}>
      <div className={styles.subHeader}>

      <p> Also known as the <b>founding team of Kitchen Sink</b>, the members listed below have been with us from the very start of the journey that led to what this literary journal is today. They have contributed in many ways aside from just writing and publishing their poetry pieces on this corner of the internet. </p>
      <p>Many of us took up jobs that were outside of our comfort zone, and worked for long hours and late nights to get this literary journal website where it is here and now. Please take a moment to appreciate the work behind this site, full of blood, sweat and back pain.</p>
      </div>

      <Grid container spacing={0}>

        <Grid item sm={4} xs={6}>
          <div className={styles.cardWrapper}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FArwin.jpeg?alt=media&token=d6bd174c-9c89-4ec1-b256-5895ea5f5cf8"} alt="logo"/>
            <h2>Arwin Shams Siddiquee</h2>
            <h3> Fish</h3>
            <p>"Jazz hands. Likes drawing cats, frogs, and sketchy nightmare creatures."</p>
          </div>
        </Grid>

        <Grid item  sm={4} xs={6}>
          <div className={styles.cardWrapper}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FNusaibah.jpg?alt=media&token=60e5a40a-84ca-47b2-abcf-1f208a0ef001"} alt="logo"/>
            <h2>Nusaibah F. Yunus</h2>
            <h3>Website Development Head</h3>
            <p>"Parrot parent with a soft spot for mangoes with wings."</p>
          </div>
        </Grid>

        <Grid item  sm={4} xs={6}>
          <div className={styles.cardWrapper}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FRaian.jpg?alt=media&token=7125ee32-0b48-4717-a1c9-eaa000cd148b"} alt="logo"/>
            <h2>Syed Raian Abedin</h2>
            <h3>Editor</h3>
            <p>"Gamer. Weeb. Definitely not still mad about that one manga."</p>
          </div>
        </Grid>


        <Grid item  sm={4} xs={6}>
          <div className={styles.cardWrapper}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FJoyita.jpg?alt=media&token=bbd5adbd-69a2-4a7e-bc3b-632115de0ef1"} alt="logo"/>
            <h2>Joyita Faruk</h2>
            <h3>Editor</h3>
            <p>"Carpal Tunnel Syndrome Central, paired with screeching voice clips."</p>
          </div>
        </Grid>

        <Grid item  sm={4} xs={6}>
          <div className={styles.cardWrapper}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FIkram.jpg?alt=media&token=5fd4783a-14f4-48fe-876f-cc228a819cba"} alt="logo"/>
            <h2>Ikram H. Akif</h2>
            <h3>Social Media Manager</h3>
            <p>"Eternally overworked but still up at 3 am cooking ramen and chugging coke."</p>
          </div>
        </Grid>

        <Grid item  sm={4} xs={6}>
          <div className={styles.cardWrapper}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FSaad.jpg?alt=media&token=bbfaa779-f164-46a8-adb6-8a7c234a8f0c"} alt="logo"/>
            <h2>Saad Hasib</h2>
            <h3>Social Media Manager</h3>
            <p>"Grilled chicken person. Probably arguing with a stranger online even as you read this."</p>
          </div>
        </Grid>

        <Grid item  sm={4} xs={6}>
          <div className={styles.cardWrapper}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FAlisha.jpeg?alt=media&token=70ca0c73-0d84-4f47-86b5-f834aa33b036"} alt="logo"/>
            <h2>Alisha Hossain</h2>
            <h3>Social Media Manager</h3>
            <p>"She’s our resident Tiktok star but her shy nature eludes us all."</p>
          </div>
        </Grid>

        <Grid item  sm={4} xs={6}>
          <div className={styles.cardWrapper}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FVenessa.jpg?alt=media&token=07bc2577-8365-4c83-80c6-fde7eb4d797e"} alt="logo"/>
            <h2>Venessa Kaiser</h2>
            <h3>Head of Design Team</h3>
            <p>"If there’s a nearby surface that’ll take ink, she’s already drawing on it."</p>
          </div>
        </Grid>

        <Grid item  sm={4} xs={6}>
          <div className={styles.cardWrapper}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FZafnah.jpg?alt=media&token=f0fd94d8-9017-4bac-9c71-0647a0e23d49"} alt="logo"/>
            <h2>Zafnah Mostafiz Arusa</h2>
            <h3>Wellness Officer</h3>
            <p>"Put a cat, makeup, and  sunflowers in her summoning circle"</p>
          </div>
        </Grid>

        <Grid item  sm={4} xs={6}>
          <div className={styles.cardWrapper}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FNadera.jpeg?alt=media&token=e0a56486-a84e-4f12-9a3b-bd2ae484063e"} alt="logo"/>
            <h2>Nadera Naeema Ohi</h2>
            <h3>Human Resources Manager</h3>
            <p>"Perpetually going through it. May actually be three toddlers in a trench coat."</p>
          </div>
        </Grid>

        <Grid item  sm={4} xs={6}>
          <div className={styles.cardWrapper}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FNayara.jpg?alt=media&token=452143ee-8ebe-489c-a2ea-ac4146991650"} alt="logo"/>
            <h2>Nayara Noor</h2>
            <h3>Communications Manager</h3>
            <p>"Cue any fifth track from a Taylor Swift album. She will appear out of thin air."</p>
          </div>
        </Grid>

        <Grid item  sm={4} xs={6}>
          <div className={styles.cardWrapper}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FReza.jpg?alt=media&token=0b609cfa-e55f-4919-a1b5-63080a73c0d7"} alt="logo"/>
            <h2>Shounak Reza</h2>
            <h3>Editor</h3>
            <p>"Anne Frank seems to be the one thing he can’t stop talking about."</p>
          </div>
        </Grid>


      </Grid>
    </div>

    <div className={styles.subHeader}>
    <h1>The Kitchen Crew</h1>
    </div>

    <div className={styles.KitchenCrew}>

    <div className={styles.subHeader}>
    <p> Kitchen Sink has two main sections of members working behind this wonderful passion project – the second half of the team is what we call the Kitchen Crew. Though mostly comprised of non-poets, we are but a restaurant without staff without these wonderful folks. Ranging from communication experts to experienced coders, Kitchen Sink could not expand to what it is today without these perpetually productive people in our roster. If you are wondering what the difference is between the Sink Gang and the Kitchen Crew, well… that’s for us to know and our readers and appreciators to discuss fervently like the latest big mystery on the block. </p>
    </div>

    <Grid container spacing={0}>

      <Grid item  sm={4} xs={6}>
        <div className={styles.cardWrapper}>
          <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FHabib.jpg?alt=media&token=a967455b-2451-4cbd-9c2f-ebcf811fe52a"} alt="logo"/>
          <h2>Hasan Habib</h2>
          <h3>Inter-Team Communications Manager</h3>
          <p>"Constantly confused and scared all the time – even as he types this bio"</p>
        </div>
      </Grid>

      <Grid item  sm={4} xs={6}>
        <div className={styles.cardWrapper}>
          <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FKashphia.jpg?alt=media&token=bdb50aba-9b62-4b56-a634-ffd7523f5348"} alt="logo"/>
          <h2>Kashphia Morshed</h2>
          <h3>Law Consultant in Human Rescourses</h3>
          <p>"An optimistic nihilist who considers the following to be important in life: eating good cake first, bothering cats second, obsessively baking third. In no particular order."</p>
        </div>
      </Grid>

      <Grid item  sm={4} xs={6}>
        <div className={styles.cardWrapper}>
          <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FEmon.jpg?alt=media&token=97db8d7a-3197-4165-a139-09a17c491e33"} alt="logo"/>
          <h2>Emon Sarker</h2>
          <h3>Website Development Member and Coder</h3>
          <p>"Recommends not taking life too seriously, otherwise you’ll never make it out alive."</p>
        </div>
      </Grid>

      <Grid item  sm={4} xs={6}>
        <div className={styles.cardWrapper}>
          <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FTuba.jpg?alt=media&token=703c9ae8-8f90-4811-841d-1271f8dbc92f"} alt="logo"/>
          <h2>Tuba Tuhra Khan</h2>
          <h3>Graphic Artist</h3>
          <p>"always has 50 other things to do, but chooses to doodle on every possible surface instead"</p>
        </div>
      </Grid>

      <Grid item  sm={4} xs={6}>
        <div className={styles.cardWrapper}>
          <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FAnmol.jpg?alt=media&token=0f12bd7d-8ae7-47b9-81ea-9650fd023861"} alt="logo"/>
          <h2>Anmol Nawar Rahman</h2>
          <h3>Graphic Artist</h3>
          <p>"Your local cat memes supplier"</p>
        </div>
      </Grid>

      <Grid item  sm={4} xs={6}>
        <div className={styles.cardWrapper}>
          <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FAnisa.jpg?alt=media&token=291acfdd-5fc0-4f90-9ffb-e9504ae44819"} alt="logo"/>
          <h2>Anisa Binte Asad</h2>
          <h3>Graphic Artist</h3>
          <p>"Cats? Yes."</p>
        </div>
      </Grid>

      <Grid item  sm={4} xs={6}>
        <div className={styles.cardWrapper}>
          <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FNancy.jpg?alt=media&token=54fbd700-447a-444d-aa68-2901f9b9b765"} alt="logo"/>
          <h2>Nancy Rualzapar</h2>
          <h3>Social Media Manager</h3>
          <p>"Stays up till 2am researching matcha pudding recipes and then dozes off to indie alternative music."</p>
        </div>
      </Grid>

      <Grid item  sm={4} xs={6}>
        <div className={styles.cardWrapper}>
          <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FZarin.jpeg?alt=media&token=ac2b757a-01ea-4531-80a9-10edd315927c"} alt="logo"/>
          <h2>Zarin Fariha</h2>
          <h3>Social Media Manager</h3>
          <p>"Does not like studying, but tends to nerd out on everything else. Will probably blabber for hours about that one shared interest you both have."</p>
        </div>
      </Grid>

      <Grid item  sm={4} xs={6}>
        <div className={styles.cardWrapper}>
          <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FAreen.jpg?alt=media&token=9a2206ed-ffc4-4d04-93ca-2d30df61f0a3"} alt="logo"/>
          <h2>Umme Syima Areen</h2>
          <h3>Social Media Manager</h3>
          <p>"Hands out polo every friday, have constant risk of being attacked by a bear."</p>
        </div>
      </Grid>

      <Grid item  sm={4} xs={6}>
        <div className={styles.cardWrapper}>
          <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FAtanu.jpg?alt=media&token=bcdd99e0-f53c-46dd-a5ef-d5159f047f84"} alt="logo"/>
          <h2>Atanu Roy Chowdhury</h2>
          <h3>Blog Writer</h3>
          <p>"A daydreamer, an addict for the weird and absurd."</p>
        </div>
      </Grid>

      <Grid item  sm={4} xs={6}>
        <div className={styles.cardWrapper}>
          <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FArisha.jpg?alt=media&token=b7a50b4c-6bdc-47e7-b4ca-c0580d95d20e"} alt="logo"/>
          <h2>Arisha Faiyas</h2>
          <h3>Blog Writer and Researcher</h3>
          <p>"Talks in cat vocalizations and keyboard slams."</p>
        </div>
      </Grid>

      <Grid item  sm={4} xs={6}>
        <div className={styles.cardWrapper}>
          <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FMaliha.jpg?alt=media&token=18733509-3948-4cbe-816c-1583526c6d34"} alt="logo"/>
          <h2>Maliha Rahman</h2>
          <h3>Blog Writer</h3>
          <p>"When I’m not getting killed by assignments, I watch titans getting killed in Attack On Titan."</p>
        </div>
      </Grid>

      <Grid item  sm={4} xs={6}>
        <div className={styles.cardWrapper}>
          <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FSarika.jpg?alt=media&token=6f69230a-c938-406f-84b5-02260b4754db"} alt="logo"/>
          <h2>Sarika Saiyara</h2>
          <h3>Blog Writer</h3>
          <p>"An okay-ish homo sapien in the United States who does not intake caffeine; likes to write, and everything artsy and cultural."</p>
        </div>
      </Grid>

    </Grid>

    </div>


    <div className={styles.subHeader}>
    <h1>Gone But Not Forgotten.</h1>
    </div>

    <div className={styles.NotForgotten}>

    <div className={styles.subHeader}>
    <p>In this section, we would like to appreciate people that have contributed to Kitchen Sink, whether it be as part of the Sink Gang or the Kitchen Crew, but have decided to part ways with us and have said and done their goodbyes. We would like to honour those very amazing individuals in this section, titled “Gone But Not Forgotten”, who have given their all to us. We hope that you too, dear reader, can appreciate them as much as we can, beyond what any person can express in the written language. Thank you, from everyone at Kitchen Sink.</p>
    </div>


    <Grid container spacing={0}>

        <Grid item  sm={4} xs={6}>
          <div className={styles.cardWrapper}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FNawal.jpg?alt=media&token=73da73b0-28fe-4ba6-8a2b-7ddfff88f538"} alt="logo"/>
            <h2>Nawal Naz Tareque</h2>
            <h3>Former Head of Strategy</h3>
            <p>"Has a taste for insufferable dad jokes. Other jokes too, but we can’t talk about those here."</p>
          </div>
        </Grid>

        <Grid item  sm={4} xs={6}>
          <div className={styles.cardWrapper}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FTanjila.jpg?alt=media&token=6d56769c-2c62-4fd5-8d12-33e14869a41e"} alt="logo"/>
            <h2>Tanjila Akter Mim</h2>
            <h3>Former Head of Marketing</h3>
            <p>"She insisted on her bio being “kek”. Kek."</p>
          </div>
        </Grid>

        <Grid item  sm={4} xs={6}>
          <div className={styles.cardWrapper}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/people%2FJuairia.jpg?alt=media&token=632dd67e-b85c-470b-a271-25496a5f22cd"} alt="logo"/>
            <h2>Juairia Haque Mahi</h2>
            <h3>Former Social Media Manager</h3>
            <p>"Perpetual wanderer. If you find her, please return her home."</p>
          </div>
        </Grid>

      </Grid>
      </div>

      <div className={styles.specialThanks}>
      <p>In addition, we would like to thank Eucalyp of thenounproject.com, Fahrisa Islam, Jawaadul Islam, Arham Shams Sameer, Sohel Mozid Rahman, Raisa Jesmin, and all our featured writers for the work they put into this.</p>
      </div>

    </div>

    <Footer/>
  </>)
}
export default BehindTheScreens;
