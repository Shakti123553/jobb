import { motion } from 'framer-motion';
   import { Link } from 'react-router-dom';

   function JobList({ jobs, setJobs }) {
     return (
       <div className="container mx-auto px-4 py-16">
         <h2 className="text-3xl font-bold text-center mb-6">Job Listings</h2>
         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
           {jobs.map((job) => (
             <motion.div
               key={job.id}
               className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.3 }}
             >
               <h3 className="text-xl font-semibold">{job.title}</h3>
               <p className="text-gray-600">{job.company} - {job.location}</p>
               <p className="text-gray-500 mt-2">{job.description}</p>
               <p className="text-gray-400 text-sm mt-2">Posted: {job.posted}</p>
               <Link
                 to={`/apply/${job.id}`}
                 className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
               >
                 Apply Now
               </Link>
             </motion.div>
           ))}
         </div>
       </div>
     );
   }

   export default JobList;