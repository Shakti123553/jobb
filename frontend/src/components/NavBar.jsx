import { Link } from 'react-router-dom';

   function NavBar() {
     return (
       <nav className="bg-blue-600 text-white p-4 sticky top-0 z-10">
         <div className="container mx-auto flex justify-between items-center">
           <h1 className="text-2xl font-bold">Job Board</h1>
           <div className="space-x-4">
             <Link to="/" className="hover:underline">Home</Link>
             <Link to="/about" className="hover:underline">About Us</Link>
             <Link to="/jobs" className="hover:underline">Job List</Link>
             <Link to="/contact" className="hover:underline">Contact Us</Link>
             <Link to="/post" className="hover:underline">Post a Job</Link>
           </div>
         </div>
       </nav>
     );
   }

   export default NavBar;