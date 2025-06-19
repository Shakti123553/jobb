import { useState } from 'react';
   import { motion } from 'framer-motion';
   import Contactus1 from "../components/Contactus1";
   import ContactInfo from '../components/ContactInfo';
   import ContactForm from '../components/ContactForm';
   import JobBannerSection from '../components/JobBannerSection'; 

   function Contact() {
    
     return (
       <>
        <Contactus1/>
         {/* Padding fix for next section */}
        {/* <div className="pt-20"></div> */}
        <ContactInfo />
        {/* Padding fix for next section */}
        {/* <div className="pt-20"></div> */}
        {/* <ContactForm /> */}
         {/* Padding fix for next section */}
        <div className="pt-20"></div>
        <JobBannerSection />
        
        
       </>
     );
   }

   export default Contact;