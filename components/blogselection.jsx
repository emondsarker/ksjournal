import react, {useState, useEffect} from 'react'
import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { app, firestore } from '../firebase/clientApp'
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import styles from '../styles/blogs.module.css';
import Head from 'next/head'
import CategoriesNavBar from '../components/CategoriesNavBar';
import Footer from '../components/footer';
import { useRouter } from 'next/router'

import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const BlogSelection = (query) => {

  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState([]);
  const [hide, setHide] = useState(true);
  const router = useRouter()
  const news_arr = [];


  useEffect(() => {
       setNews(query.issue.issue)
    }, []);

  function selectNews(item, index){
      
      item.Content = item.Content.replace(/\\n/g, '\n');
      console.log(item)
      setSelectedNews(item)
      document.getElementById("divFirst").scrollIntoView();
      setHide(false)
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



    

    
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <h2 >Kitchen Sink // Blogs</h2>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
      {news.map((item, index) => {

      return (
        <>
          <Grid key={index} item sm={6} xs={12}>
            <div className={styles.BlogContainer} onClick={()=>router.push('/blogs')}>
            <div className={styles.Image}>
              <img alt="image"  src={item.Image}/>

            </div>
            
              <div className={styles.text} >
              <h2> {item.Title} </h2>
              <h4>Written by: {item.Author}</h4>
              <p>{item.ImageCredits}</p>
              
              </div>
              </div>
          </Grid>
          
          
      </>
      )
      })}
       </Grid>

  </>)
}

export default BlogSelection;

// export async function getStaticProps() {
//   const list = []
//   let issue = []
//   const querySnapshot = await getDocs(collection(firestore, "Blogs"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   //console.log(doc.id, " => ", doc.data());
//       issue.push(doc.data())
//   // console.log(list);
// });
// //   issue = issue.json()
// issue.reverse()
//   // Pass data to the page via props
//   return { props: { issue } }
// }
