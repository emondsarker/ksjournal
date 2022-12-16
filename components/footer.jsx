import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {


  return(
    <>
    <footer className="footer">

        <div className="footerKarjo">
          <h1>Kitchen Sink</h1>
          <h5>A literary Journal</h5>
          <div className="footerLinks">
            <a href='https://www.facebook.com/ksjournal' target="_blank" rel="noreferrer"> <FacebookIcon/> /ksjournal </a>
            <a href='https://www.instagram.com/kitchen.sink.journal/' target="_blank" rel="noreferrer"><InstagramIcon/> /kitchen.sink.journal </a>
            <a href='https://www.linkedin.com/company/ksjournal/' target="_blank" rel="noreferrer"><LinkedInIcon/> /company/ksjournal </a> 
          </div>
                   
          <p>All rights reserved. Contributors retain rights to own works.</p>
          <p>© 2021 Kitchen Sink</p>
        </div>
        


    </footer>
    </>
  )
}

export default Footer;

{/* <div className="footerLinks">
          <h5>Company</h5>
          <a href="/about-karjo">About</a>
          <a href="/pricing-strategy-at-karjo">Pricing</a>
          <a href="/security-at-karjo">Security</a>
          <a href="/karjo-privacy-policy">Privacy</a>
        </div>
        <div className="footerLinks">
          <h5>Resources</h5>
          <a  href="/karjo-work-categories">Work <br/>Categories</a>
          <a  href="/karjo-help-and-support">Help & <br/>Support</a>
        </div>
        <div className="footerLinks">
          <h5>Socials</h5>
          <a>Facebook</a>
          <a>Instagram</a>
          <a>LinkedIn</a>
        </div> */}