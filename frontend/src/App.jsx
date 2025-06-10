import { useState } from 'react';
   import { Routes, Route } from 'react-router-dom';
   import NavBar from './components/NavBar.jsx';
   import Home from './components/Home.jsx';
   import About from './components/About.jsx';
   import JobList from './components/JobList.jsx';
   import JobPostForm from './components/JobPostForm.jsx';
   import JobApplyForm from './components/JobApplyForm.jsx';
   import Contact from './components/Contact.jsx';

   const initialJobs = [
     { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote', description: 'Build responsive web apps.', posted: '2025-06-01' },
     { id: 2, title: 'Backend Engineer', company: 'Data Inc', location: 'New York', description: 'Manage server-side logic.', posted: '2025-06-05' },
   ];

   function App() {
     const [jobs, setJobs] = useState(initialJobs);

     return (
       <div className="min-h-screen bg-gray-100">
         <NavBar />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/jobs" element={<JobList jobs={jobs} setJobs={setJobs} />} />
           <Route path="/post" element={<JobPostForm setJobs={setJobs} />} />
           <Route path="/apply/:jobId" element={<JobApplyForm jobs={jobs} />} />
           <Route path="/contact" element={<Contact />} />
         </Routes>
       </div>
     );
   }

   export default App;