import { useState } from 'react';
   import { motion } from 'framer-motion';

   function Contact() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: '',
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Thank you for your message! We\'ll get back to you soon.');
       setFormData({ name: '', email: '', message: '' });
     };

     return (
       <motion.div
         className="container mx-auto px-4 py-16"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
       >
         <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
         <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
           <div>
             <div className="mb-4">
               <label className="block text-gray-700">Name</label>
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
               <label className="block text-gray-700">Message</label>
               <textarea
                 name="message"
                 value={formData.message}
                 onChange={handleChange}
                 className="w-full p-2 border rounded"
                 required
               ></textarea>
             </div>
             <button
               onClick={handleSubmit}
               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
             >
               Send Message
             </button>
           </div>
         </div>
       </motion.div>
     );
   }

   export default Contact;