import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from "react-router-dom";

const JobBannerSection = () => {
  return (
    <div className="bg-[#123344] text-white">
      {/* Top Banner */}
 <div className="bg-white shadow-md p-8 flex flex-col md:flex-row justify-between items-center rounded-lg mx-4 md:mx-24 -mt-[80px] relative z-10">

        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-black mb-4">
            Looking for a career change? Browse our job listings now!
          </h2>
          <p className="text-gray-500 mb-6">
            Sociosqu eros cras magna phasellus conubia semper netus lectus
            lacinia mattis sed.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded">
            APPLY NOW
          </button>
        </div>
        <div className="mx-4 md:mx-16 -mt-16 md:-mt-24 relative z-10">
          <img
            src="https://web.moxcreative.com/jobbe/wp-content/uploads/sites/2/2023/01/img_1.png"
            alt="Professional"
            className="w-64 md:w-72"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-24 pb-10 px-4 md:px-24 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Text */}
        <div>
          <h1 className="text-6xl font-bold pb-4 ">
              J<span style={{ color: "#83B348" }}>o</span>
                   bbe      
                   </h1>
          <p className="text-md text-gray-300 mb-4">
            Est class vel si sit orci rutrum at morbi commodo pellentesque.
            Faucibus sociosqu suspendisse integer id justo enim letius eleifend
            volutpat suscipit consectetur.
          </p>
          <div className="flex gap-4 text-white text-xl">
            <a
      href="https://www.facebook.com/hrithikroshan/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookF/>
    </a>
    <a href="https://twitter.com/roshanhrithik" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          
        <a href="https://www.youtube.com/@roshanhrithik" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>   
          </div>
        </div>

        {/* Categories  */}
         <div className="pl-20">
          <div className="flex-1 min-w-[300px] space-y-6 bg-transparent pl-[30px]" >
            <h3 className="text-2xl font-semibold mb-4">Contact us</h3>
                    <div className="flex items-start gap-4">
                      <MapPin className="text-green-600 w-6 h-6 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-300 text-md" >Head Office</h4>
                        <p className="text-gray-300 text-md">
                          Jalan Cempaka Wangi No 22<br />
                          Jakarta - Indonesia
                        </p>
                      </div>
                    </div>
          
                    <div className="flex items-start gap-4">
                      <Mail className="text-green-600 w-6 h-6 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-300 text-md">Email us</h4>
                        <p className="text-gray-300 text-md">
                          support@yourdomain.tld<br />
                          hello@yourdomain.tld
                        </p>
                      </div>
                    </div>
          
                    <div className="flex items-start gap-4">
                      <Phone className="text-green-600 w-6 h-6 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-300 text-md">Call us</h4>
                        <p className="text-white text-md">
                          Phone: ‪+6221.2002.2012‬<br />
                          Fax: ‪+6221.2002.2013‬
                        </p>
                      </div>
                    </div>
                  </div>
        </div>

        {/* Company */}
<div className="pl-30 pr-20">
  <h3 className="text-2xl font-semibold mb-4 text-white">Qick Link</h3>
  <ul className="space-y-1 text-gray-300 text-md">
    <li>
      <Link to="/" className="hover:text-white transition">Home</Link>
    </li>
    <li>
      <Link to="/About" className="hover:text-white transition">About us</Link>
    </li>
    <li>
      <Link to="/JobList" className="hover:text-white transition">JobList</Link>
    </li>
    <li>
      <Link to="/Contact" className="hover:text-white transition">Contact us</Link>
    </li>
  </ul>
</div>


        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-300 text-md mb-4">
            Get exclusive deals by signing up to our Newsletter.
          </p>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-4 rounded bg-white text-black mb-3"
          />
          <button className="w-full bg-green-500 hover:bg-green-600 py-4 rounded text-white font-semibold flex items-center justify-center gap-2">
            <span>📧</span> SIGN UP
          </button>
        </div>
        
      </footer>
       <footer className="bg-[#173243] text-white text-sm mt-10">
      {/* Horizontal Line */}
      <hr className="border-gray-600 " />

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center py-6 px-6 md:px-20">
        {/* Left Side */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          Copyright © 2023 <span className="font-semibold">Jobbe</span>, All rights reserved. Powered by <span className="font-semibold">MoxCreative</span>.
        </div>

        {/* Right Side */}
        <div className="flex gap-3 text-center md:text-right">
          <a href="#" className="hover:underline">
            Term of use
          </a>
          <span className="text-green-400">|</span>
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
          <span className="text-green-400">|</span>
          <a href="#" className="hover:underline">
            Cookie policy
          </a>
        </div>
      </div>
    </footer>

    </div>
  );
};

export default JobBannerSection;
