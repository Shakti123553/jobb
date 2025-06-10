import { useState } from 'react';
   import { motion } from 'framer-motion';
   import { useNavigate, useParams } from 'react-router-dom';

   function JobApplyForm({ jobs }) {
     const { jobId } = useParams();
     const navigate = useNavigate();
     const job = jobs.find((j) => j.id.toString() === jobId);
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       resume: '',
     });

     if (!job) {
       return <div className="text-center py-16">Job not found</div>;
     }

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert(`Application submitted for ${job.title} at ${job.company}!`);
       navigate('/jobs');
     };

     return (
       <motion.div
         className="container mx-auto px-4 py-16"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
       >
         <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
           <h2 className="text-2xl font-bold mb-4">Apply for {job.title}</h2>
           <p className="text-gray-600 mb-4">{job.company} - {job.location}</p>
           <div>
             <div className="mb-4">
               <label className="block text-gray-700">Full Name</label>
               <input
                 type="text"
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                 className="w-full p-2 border rounded"
                 required
               />
             </div>
             <div className="mb-4">
               <label className="block text-gray-700">Email</label>
               <input
                 type="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 className="w-full p-2 border rounded"
                 required
               />
             </div>
             <div className="mb-4">
               <label className="block text-gray-700">Resume (Text)</label>
               <textarea
                 name="resume"
                 value={formData.resume}
                 onChange={handleChange}
                 className="w-full p-2 border rounded"
                 required
               ></textarea>
             </div>
             <button
               onClick={handleSubmit}
               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
             >
               Submit Application
             </button>
             <button
               onClick={() => navigate('/jobs')}
               className="ml-4 text-gray-600 hover:underline"
             >
               Cancel
             </button>
           </div>
         </div>
       </motion.div>
     );
   }

   export default JobApplyForm;