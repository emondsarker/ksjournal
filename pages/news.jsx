import react, {useState, useEffect} from 'react'
import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { app, firestore } from '../firebase/clientApp'
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import styles from '../styles/news.module.css';
import Head from 'next/head'
import CategoriesNavBar from '../components/CategoriesNavBar';
import Footer from '../components/footer';

import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const SupportUs = (query) => {

  const [news, setNews] = useState([]);
  const [selectedPoem, setSelectedPoem] = useState([]);
  const [hide, setHide] = useState(true);

  const news_arr = [];


  useEffect(() => {
       setNews(query.issue)
    }, []);

  const getBlogs = async ()=>{
    const querySnapshot = await getDocs(collection(firestore, "News"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
    console.log(1)
        news_arr.push(doc.data());
    });

    setNews(news_arr);
  }

  console.log(news)

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
          <h1 className={styles.Header}>KSJ // Newsletter</h1>
          <p className={styles.subHeader}>Read about the latest news from Kitchen Sink.</p>
        </Grid>
      </Grid>

      {news.map((item, index) => {

      return  <div key={index} className={styles.news}>
        <Grid container spacing={10}>
          <Grid item sm={6} xs={12}>
            <div className={styles.Image}>
              <img alt="image"  src={item.Image}/>
            </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={styles.text} >
              <h1> {item.Title} </h1>

              <p>{item.Content}</p>
              </div>
          </Grid>

        </Grid>
        <br/>
      </div>
      })}




      
    </div>
    <Footer/>
  </>)
}

export default SupportUs;

export async function getStaticProps() {
  const list = []
  let issue = []
  const querySnapshot = await getDocs(collection(firestore, "News"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
      issue.push(doc.data())
  // console.log(list);
});
//   issue = issue.json()
  // Pass data to the page via props
  return { props: { issue } }
}
