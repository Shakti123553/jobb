import { motion } from 'framer-motion';
   import { Link } from 'react-router-dom';

   function Home() {
     return (
       <motion.div
         className="text-center py-16"
         initial={{ scale: 0.9 }}
         animate={{ scale: 1 }}
         transition={{ duration: 0.5 }}
       >
         <h2 className="text-4xl font-bold mb-4">Welcome to Job Board</h2>
         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           Connect with top opportunities or find the perfect candidate for your company. Explore jobs, post openings, or get in touch with us today!
         </p>
         <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
           <Link to="/jobs" className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
             Browse Jobs
           </Link>
         </motion.div>
       </motion.div>
     );
   }

   export default Home;