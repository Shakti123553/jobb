import { motion } from 'framer-motion';

   function About() {
     return (
       <motion.div
         className="py-16 container mx-auto px-4"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
       >
         <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
         <p className="text-gray-600 max-w-3xl mx-auto text-center">
           Job Board is dedicated to bridging the gap between talented professionals and innovative companies. Our mission is to simplify the hiring process with a user-friendly platform that empowers both job seekers and employers. Join us in building a brighter future for work!
         </p>
       </motion.div>
     );
   }

   export default About;