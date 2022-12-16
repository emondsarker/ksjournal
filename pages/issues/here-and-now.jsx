import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { app, firestore } from '../../firebase/clientApp'
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import styles from '../../styles/reading.module.css';
import Head from 'next/head'
import React, {useState, useEffect} from 'react';
// import CategoriesNavBar from '../../components/CategoriesNavBar';
import Selection from '../../components/selection';
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Link from 'next/link'
import CategoriesNavBar from "../../components/CategoriesNavBar";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Ruser = (query) => {

  const [countryInfo, setCountryInfo] = useState({});
  const [title, setTitle] = useState({});
  const [poem, setPoem] = useState([]);
  const [selectedPoem, setSelectedPoem] = useState([]);
  const [hide, setHide] = useState(true);
  const [poemIndex, setPoemIndex] = useState('0')

  const list = [];
  const poemArray = [];

  useEffect(() => {
    //    test2();
    console.log(query.issue)
    setPoem(query.list)
    setTitle(query.issue[0])
    // query.list.forEach((poem) =>{
    //     if(poem.id !="issueDetails"){
    //         list.push(doc.data());}
    //       else{
    //         setTitle(doc.data())
    //       }
    // })
    }, []);

  const test = async ()=>{
    // const querySnapshot = doc(firestore, "HereAndNow", "issueDetails");
    const docSnap = await getDoc();

      const data = docSnap.data()
      if(data){
        setTitle(data);
        console.log(data);
      }
  }

  const test2 = async ()=>{
    const querySnapshot = await getDocs(collection(firestore, "HereAndNow"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
    if(doc.id !="issueDetails"){
      list.push(doc.data());}
    else{
      setTitle(doc.data())
    }
    console.log(list);
  });
  setPoem(list);
  }

function goToPoem(item, index){
  console.log(item[2])
  setPoemIndex(index)
  item.Content = item.Content.replace(/\\n/g, '\n');
  console.log(item)
  setSelectedPoem(item)
  document.getElementById("divFirst").scrollIntoView();

}

function nextPoem(){
  list = poem //assgin poem to access index
  if(list.length == poemIndex + 1){
      return
  }
  let tempObject = list[poemIndex + 1]
  tempObject.Content = tempObject.Content.replace(/\\n/g, '\n');
  setSelectedPoem(tempObject)
  setPoemIndex(poemIndex+1)
  console.log(list[poemIndex])

  document.getElementById("divFirst").scrollIntoView();
}
function previousPoem(){
  list = poem //assgin poem to access index
  if(poemIndex == 0){
      return
  }
  let tempObject = list[poemIndex - 1]
  tempObject.Content = tempObject.Content.replace(/\\n/g, '\n');
  setSelectedPoem(tempObject)
  setPoemIndex(poemIndex-1)
  console.log(list[poemIndex])

  document.getElementById("divFirst").scrollIntoView();
}


function hidef(){
  setHide(false);
  document.getElementById("divFirst").scrollIntoView();
}
function showf(){
  setHide(true);
  document.getElementById("divFirst").scrollIntoView();
}

console.log(poem);

return(

  <>
<CategoriesNavBar/>
    <div className="body">

      
    
        <Grid container spacing={0}>
          

          <Grid item sm={6} xs={12}>
          <div className={styles.cover}>
            <img src={title.coverphoto} alt="coverphoto"/>
          </div>
          </Grid>

          

          <Grid item sm={6} xs={12}  id="divFirst">
          { hide ?
          <div className={styles.list} >
            <h1>{title.title}</h1>

            {poem.map((item, index) => {

              return  <div key={index} className={styles.listItem} onClick={()=>{goToPoem(item, index);hidef()}}>
                <div className={styles.poemTitle}>
                  <p> {item.Title}</p>
                </div>
                <div className={styles.author}>
                  <p>- {item.Author}</p>
                </div>
              </div>

            })}

          </div>
          :
          <div className={styles.selectedPoem}>
            <div className={styles.selectedPoemTitle}>
              <h3>{selectedPoem.Author} | <a onClick={()=>{showf()}}> Back</a> </h3>
              <div className={styles.selectedPoemButtons}>
                { poemIndex == 0 ? null : <ArrowBackIosIcon onClick={()=>{previousPoem()}}/>}
                { poemIndex+1 == poem.length ? null : <ArrowForwardIosIcon  onClick={()=>{nextPoem()}}/>}
                
              </div>
            </div>
            <h1>{selectedPoem.Title}</h1>
            <p>{selectedPoem.Content}</p>
            <img src={selectedPoem.Image} alt="image"/>
            <div className={styles.selectedPoemBottom}>
              <h3> | <a onClick={()=>{showf()}}> View List</a> </h3>
              <div className={styles.selectedPoemBottomButtons}>
              { poemIndex+1 == poem.length ? null :
               <a onClick={()=>{nextPoem()}}> 
               Read Next
               <ArrowForwardIosIcon  onClick={()=>{nextPoem()}}/>
               </a> 
              }
              </div>
            </div>
          </div>
          }
          </Grid>

          




        </Grid>
        <Selection/>
    </div>
    <br/>
    <br/>
    <br/>
    <Footer/>
  </>
)
}

export async function getStaticProps() {
    const list = []
    let issue = []
    const querySnapshot = await getDocs(collection(firestore, "HereAndNow"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
    if(doc.id !="issueDetails"){
      list.push(doc.data());
    }
    else{
    //   setTitle(doc.data())
        issue.push(doc.data())
    }
        
    console.log(list);
  });
//   issue = issue.json()
    // Pass data to the page via props
    return { props: { list, issue } }
  }

export default Ruser;


//Maybe later use?
 
        // <Grid item xs={3}>
        //     <Link href="/issues/space-bar">  
        //         <img className={styles.selectIssue} src="https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/here-and-now.jpg?alt=media&token=3ed94f3e-675c-48ad-9eaa-b2865642e7d5"/>
        //     </Link>
        //   </Grid>

        //   <Grid item xs={3}>
        //     <img className={styles.selectIssue} src="https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/here-and-now.jpg?alt=media&token=3ed94f3e-675c-48ad-9eaa-b2865642e7d5"/>
        //   </Grid>

        //   <Grid item xs={3}>
        //     <img className={styles.selectIssue} src="https://firebasestorage.googleapis.com/v0/b/ksjournal-64785.appspot.com/o/here-and-now.jpg?alt=media&token=3ed94f3e-675c-48ad-9eaa-b2865642e7d5"/>
        //   </Grid>

        //   <Grid item xs={3}>
        //     <img className={styles.selectIssue} src="" alt=":("/>
        //   </Grid>
