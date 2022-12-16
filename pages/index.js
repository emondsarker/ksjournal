
import {useState, useEffect} from 'react'
import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { app, firestore } from '../firebase/clientApp'
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import styles from '../styles/Home.module.css';
import Head from 'next/head'
import CategoriesNavBar from '../components/CategoriesNavBar';
import Footer from '../components/footer';
import Selection from '../components/selection';

import Link from 'next/link';
import ConstructionIcon from '@mui/icons-material/Construction';
import BlogSelection from '../components/blogselection';

const Ruser = ( issue ) => {

  const [countryInfo, setCountryInfo] = useState({});
  const [title, setTitle] = useState({});
  const [poem, setPoem] = useState([]);
  const [blog, setBlogs] = useState([]);
    const [news, setNews] = useState([]);
  const [selectedPoem, setSelectedPoem] = useState([]);
  const [hide, setHide] = useState(true);

  
  const featuredIssue = [];
  const blogs = [];
  const news_arr = [];

  useEffect(() => {

       getBlogs();
       getNews();
    }, []);

  const getBlogs = async ()=>{
    const querySnapshot = await getDocs(collection(firestore, "Blogs"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
        blogs.push(doc.data());
    });

    setBlogs(blogs);
  }

  const getNews = async ()=>{
    const querySnapshot = await getDocs(collection(firestore, "News"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
        news_arr.push(doc.data());
    });

    setNews(news_arr);
  }



  return(
    <>

    <Head>
      <title>ksjournal.org</title>
      <meta name="description" content="A literary journal. BETA BUILD" />
      <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/SpaceBar%2Fcoverphoto.jpg?alt=media&token=2d13e419-91bb-48fe-a7d9-50382ba50a33" />
      <meta property="og:image:width" content="450" />
      <meta property="og:image:height" content="298" />
      <meta property="og:description" content="Work in progress"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <CategoriesNavBar/>
    <div className={styles.heroImage}/>
    
    <div className="body">

    <div className={styles.heroText}>
      <h1>The Kitchen Sink</h1>
      <p>A Literary Jounral</p>
    </div>

    <div className="PardonOurDust">
    <h1>Pardon Our Dust. <ConstructionIcon/></h1>
    <p>Hello! Thank you for coming to Kitchen Sink. This is a new website that is still under construction.</p>
    <p>While you can still read our <Link href="/blogs">blogs</Link>, <Link href="/news">news</Link> and <Link href="/issues/space-bar">issues (check out SPACE BAR)</Link>. Please pardon our dust as we tinker around to make the site better.</p>
    </div>

    <Grid container spacing={0}>
      <Grid item sm={6} xs={12}>
        <Link href="/issues/space-bar">
        <div className={styles.coverDescription}>
        <img src="https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/SpaceBar%2Fcoverphoto.jpg?alt=media&token=2d13e419-91bb-48fe-a7d9-50382ba50a33" alt="cover"/>
          <p> 
            <b>Space Bar</b> wraps up the eventful and ever-growing year of <b>2021</b> for <b>Kitchen Sink </b>. This issue is about variety and creativity. The poems here are made up of all the different rhymes and structures that reflect our world, and the tongue-in-cheek yet grandiose scale of the title serves only to reflect our efforts in that regard. Crafted with care, Kitchen Sink presents Space Bar.
          </p>
        <h2 > Read "Space Bar"</h2>
        </div>
        </Link>
      </Grid>
      
      <Grid item sm={6} xs={12}>
        <div className={styles.sectionHeader}>

          <img alt="quote" src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/toppng.com-right-quotation-marks-quotation-marks-icon-free-980x604.png?alt=media&token=b623262b-2d15-4b6c-acf4-421b3018b7bb"}/>
          <p>Space Bar is exactly the out-there, somewhat philosophical, and the extremely pun-intended title that came to mind while compiling this issue. For the first time since our launch, Kitchen Sink has received submissions that have no centralization around a theme. We saw similar emotions re-emerging throughout the otherwise unconnected poetry, for the human experience is permeating us all. Incredibly, that reflects in the workings of Kitchen Sink as well. Our team has gone through some of the same troubles this year, as has the rest of the world. Seeing this publication we collectively created with our hearts, passion and on our backs, end on a high note, is perhaps the most rewarding end to the year. We hope you enjoy the beautiful artwork alongside our heartfelt poetry.</p>
          <p>— Joyita Faruk, <b>Editor's Note</b></p>
        </div>
        <div className={styles.sectionHeader}>

          <img alt="quote" src={"https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/toppng.com-right-quotation-marks-quotation-marks-icon-free-980x604.png?alt=media&token=b623262b-2d15-4b6c-acf4-421b3018b7bb"}/>
            <p>
            Space Bar, to me, feels like a proper culmination of all the hard work we’ve put in over the past year. Not only have our own review process for the poems that we select improve vastly over time, but we have also strived to make improvements in almost every other facet of these 3 publications. Our work continues to grow as we explore different avenues, and this also ties into our own poems, which I would say has been growing with us as we try to connect with more poets. This leads us to Space Bar, a grand and varied issue produced with the knowledge of everything that has led us here. It represents our ambition to understand and treasure emotions presented in poetry, no matter what shape it may come in.            </p>
          <p>— Syed Raian Abedin, <b>Editor's Note</b></p>
        </div>
      </Grid>
    </Grid>

    <Selection/>
    <BlogSelection issue={issue}/>
    
    {/* <Grid container >

      <Grid item xs={12}>
        <div className={styles.sectionHeader}>
          <h1>B L O G S !</h1>
          <p>- Read our latest blog posts -</p>
        </div>
      </Grid>

      {blog.map((item, index) => {

        return  <Grid item xs={4}>
        <div className={styles.blogWrap}>
        <img src={item.Image} alt="blogImage"/>
          <div className={styles.blogText}>
            <h3> {item.Title}</h3>
          </div>
        </div>

        </Grid>

      })}

      <Grid item xs={12}>
        <div className={styles.sectionHeader}>
          <h2>Newsletter</h2>
          <p> - Read about the latest news from Kitchen Sink -</p>
        </div>
      </Grid>

      {news.map((item, index) => {

        return  <Grid item xs={4}>
        <div className={styles.newsWrap}>
        <img src={item.Image} alt="blogImage"/>
          <div className={styles.newsText}>
            <h3> {item.Title}</h3>
            <p> {item.Content}</p>
          </div>
        </div>

        </Grid>

      })}

      <Grid item xs={12}>
        <div className={styles.sectionHeader}>
          <h3>Who We Are</h3>
          <p>Kitchen Sink is an English-language poetry journal founded and run by a group of like-minded young poets from Bangladesh with the aim of making local poetry more accessible and providing a platform that helps prospective young writers publish and improve their work. We publish four issues a year in March, June, September, and December.</p>

        </div>
      </Grid>
    </Grid> */}

    
    </div>
    <br/><br/><br/><br/>
    <Footer/>
  </>)
}
export default Ruser;

export async function getStaticProps() {
  const list = []
  let issue = []
  const querySnapshot = await getDocs(collection(firestore, "Blogs"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
      issue.push(doc.data())
  // console.log(list);
});
//   issue = issue.json()
issue.reverse()
  // Pass data to the page via props
  return { props: { issue } }
}

// MIGHT NEED LATER
{/* <Grid item xs={5}>
        <div className={styles.coverphoto}>
          
          <img src="https://www.ksjournal.org/wp-content/uploads/2021/12/cropped-Space-Bar-neon-cover-scaled-1.jpg" alt="cover" onClick={()=>{goToIssue()}}/>
          <p> Cover by Venessa Kaiser</p>

          <p><b> Issue Released: xx/xx/xxxx</b></p>
        </div>
      </Grid>
      <Grid item xs={7}>
        <div className={styles.coverDescription}>

          <p> 
          Space Bar wraps up the eventful and ever-growing year of 2021 for Kitchen Sink. In celebration of this, Space Bar is also the first issue from Kitchen Sink to not include poems that all fit under a specific theme. This issue is about variety and creativity. The poems here are made up of all the different rhymes and structures that reflect our world, and the tongue-in-cheek yet grandiose scale of the title serves only to reflect our efforts in that regard. However, even with such a grand scope, the core of this issue still focuses on the more intimate aspects of a person’s emotions. Crafted with care, Kitchen Sink presents Space Bar.
          </p>
        </div>

        <Grid container spacing={0}>

          <Grid item xs={12}>
            <div className={styles.featuredPoemHeader}>
              <h3>Editor's picks.</h3>
            </div>
          </Grid>
          {selectedPoem.map((item, index) => {

            return  <Grid item xs={6}>
            <div className={styles.featuredPoemWrap}>

              <div className={styles.featuredPoemText}>
                <h3> {item.Title}</h3>
                <p>{item.Author}</p>
              </div>
            </div>

            </Grid>

          })}
          <Grid xs={6}>
          <div className={styles.featuredPoemWrap}>

            <div className={styles.featuredPoemText}>
              <h3> Continue reading,</h3>
              <p>"Hear and Now"</p>
            </div>
          </div>
          </Grid>
        </Grid>


      </Grid> */}
