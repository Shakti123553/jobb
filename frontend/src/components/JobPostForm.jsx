import { useState } from 'react';
   import { motion } from 'framer-motion';
   import { useNavigate } from 'react-router-dom';

   function JobPostForm({ setJobs }) {
     const [formData, setFormData] = useState({
       title: '',
       company: '',
       location: '',
       description: '',
     });
     const navigate = useNavigate();

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       const newJob = {
         id: Date.now(), // Using timestamp for unique ID
         ...formData,
         posted: new Date().toISOString().split('T')[0],
       };
       setJobs((prevJobs) => [...prevJobs, newJob]);
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
           <h2 className="text-2xl font-bold mb-4">Post a New Job</h2>
           <div>
             <div className="mb-4">
               <label className="block text-gray-700">Job Title</label>
               <input
                 type="text"
                 name="title"
                 value={formData.title}
                 onChange={handleChange}
                 className="w-full p-2 border rounded"
                 required
               />
             </div>
             <div className="mb-4">
               <label className="block text-gray-700">Company</label>
               <input
                 type="text"
                 name="company"
                 value={formData.company}
                 onChange={handleChange}
                 className="w-full p-2 border rounded"
                 required
               />
             </div>
             <div className="mb-4">
               <label className="block text-gray-700">Location</label>
               <input
                 type="text"
                 name="location"
                 value={formData.location}
                 onChange={handleChange}
                 className="w-full p-2 border rounded"
                 required
               />
             </div>
             <div className="mb-4">
               <label className="block text-gray-700">Description</label>
               <textarea
                 name="description"
                 value={formData.description}
                 onChange={handleChange}
                 className="w-full p-2 border rounded"
                 required
               ></textarea>
             </div>
             <button
               onClick={handleSubmit}
               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
             >
               Post Job
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

   export default JobPostForm;