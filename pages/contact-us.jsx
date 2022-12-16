import react, {useState, useEffect} from 'react'
import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { app, firestore } from '../firebase/clientApp'
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import styles from '../styles/supportUs.module.css';
import Head from 'next/head'
import CategoriesNavBar from '../components/CategoriesNavBar';
import Footer from '../components/footer';

import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const SupportUs = () => {

  const [blog, setBlogs] = useState([]);
  const [selectedPoem, setSelectedPoem] = useState([]);
  const [hide, setHide] = useState(true);

  const blogs = [];


  useEffect(() => {
       getBlogs();
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
          <h1 className={styles.Header}>Contact Us !</h1>
        </Grid>
        <Grid item sm={4} xs={12}>
          <img alt="image" className={styles.Image} src={"https://www.ksjournal.org/wp-content/uploads/elementor/thumbs/contactus-p7wedxd9wrgmywluznzg57tih2gls5ubzquhxyentg.jpg"}/>

        </Grid>
        <Grid item sm={8} xs={12}>
          <div className={styles.text}>
          <h2>Got suggestions? Feedback? Maybe complaints? <br/> We're happy to hear you out!</h2>
          <p>Contact the Sink Gang via e-mail or through our social media if you have any queries, proposals, or if you just have something nice to say. Someone from the team will get back to you as soon as possible!</p>
            <div className={styles.contacts}>
              <a href="tel:+8801871960077"><PhoneIcon/><p>+8801871960077</p><h3> Phone Number</h3></a>
              <a href="mailto:info@ksjournal.org" target="_blank" rel="noreferrer"><EmailIcon/><p>info@ksjournal.org</p><h3> Email Address</h3></a>
              <a href="https://www.facebook.com/ksjournal" target="_blank" rel="noreferrer"><FacebookIcon/><p>facebook.com/ksjournal</p><h3> Facebook Page</h3></a>
            </div>
          </div>
        </Grid>

      
      </Grid>

      
    </div>
    <Footer/>
  </>)
}
export default SupportUs;
