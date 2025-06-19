import React from 'react';
import { motion } from 'framer-motion';
import Contactus from './Contactus';
 // update this path if different
 import JobBannerSection from './JobBannerSection';
 import OurValueSection from './OurValueSection'; // update this path if different
import Featured from './Featured';

function About() {
  return (
    <>
     <Contactus />
      {/* Image + Text Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 py-12 pl-40 pt-50 pb-50">
        {/* Text Content - now on left */}
        <div className="md:order-1 order-2">
          <p className="text-green-600 font-semibold uppercase text-base mb-2">
            Who we are
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
            Here’s to growth and <br></br>happiness in every person’s<br></br> career journey
          </h2>
          <p className="text-gray-500 mb-6 text-lg">
            Donec class lacinia vel hac laoreet amet et dictumst suspendisse.<br></br> Maximus tortor pede egestas quis facilisis est. Neque dis fringilla augue<br></br> mollis viverra enim conubia pulvinar.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition text-lg">
            DISCOVER MORE
          </button>
        </div>

        {/* Image Content - now on right */}
        <div className="relative w-full max-w-md mx-auto md:mx-0 md:ml-6 left-6 md:order-2 order-1">
          {/* Green blob background */}
          <div className="absolute -left-15 top-15 w-[450px] h-[450px] bg-green-200 rounded-full -z-10 blur-2xl opacity-40"></div>

          {/* Image */}
          {/* Image */}
<img
  src="https://web.moxcreative.com/jobbe/wp-content/uploads/sites/2/2023/01/portrait-of-a-black-warehouse-manager-standing-in-a-large-distribution-center-a-concept-of-career-1536x1025.jpg"
  alt="Warehouse manager"
  className="rounded-[100px_0_100px_0] w-full object-cover"
/>

          {/* Years Circle */}
          <div className="absolute -top-8 -right-8 bg-white shadow-lg rounded-full w-40 h-40 flex flex-col items-center justify-center text-center">
            <span className="text-green-600 text-6xl font-bold">15+</span>
            <span className="text-lg font-semibold text-gray-700 uppercase">
              Years of
              <br />
              Experience
            </span>
          </div>
        </div>
      </div>
      <OurValueSection/>

      {/* Contactus Section */}
      {/* Join Community Section */}
        <section
          className="relative h-[700px] w-full bg-cover"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1397783002/photo/man-business-chair-sitting-waiting-woman-businessman-candidate-recruitment-businesswoman.jpg?s=612x612&w=0&k=20&c=stFt9UF5KYPqpfBm_NyUuo2FHkorVIsKXmKSt-cTX8M=')",
          }}
        >
          <div className="bg-[#0f3550]/80 w-full h-full py-24 px-6 md:px-20">
            <div className="max-w-4xl text-white pl-10 pt-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Join our community of talented
                <br /> professionals by applying for a <br /> job today!
              </h2>
              <p className="text-lg mb-6 pt-6 pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus <br></br>nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="bg-green-500 hover:bg-green-600 px-6 py-3 text-white font-semibold rounded-md">
                DISCOVER MORE
              </button>
            </div>
          </div>

          {/* Stats Card */}
          {/* <div className="absolute w-full bottom-[-90px] px-6 md:px-20">
            <div className="h-[180px] bg-white shadow-lg rounded-xl flex flex-wrap justify-between items-center p-8 gap-6 text-center max-w-[93rem] mx-auto">
              {[
                { value: "540K+", label: "Member Active" },
                { value: "14K+", label: "Companies" },
                { value: "270+", label: "Expert Trainers" },
                { value: "15+", label: "Years of Experience" },
              ].map((stat, idx) => (
                <div key={idx} className="flex-1 min-w-[120px] border-r last:border-none pr-6">
                  <h3 className="text-5xl font-bold text-green-600">
                    {stat.value}
                  </h3>
                  <p className="text-gray-800 font-semibold mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
        </section>
         {/* Padding fix for next section */}
        {/* <div className="pt-20"></div> */}
        
 {/* Padding fix for next section */}
        <div className="pt-20"></div>
      {/* Job Banner Section */}
      <JobBannerSection />
    </>
  );
}

export default About;
