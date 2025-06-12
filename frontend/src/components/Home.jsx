import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png'; // Replace this with your actual image path
import girlImage from '../assets/girl.png';
import { Briefcase, ClipboardList, Users } from 'lucide-react'; // Or use SVGs as images/icons

function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="py-20 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Side */}
<motion.div
  initial={{ x: -50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="ml-15" // Shifts content slightly to the right
>
  <p className="text-green-600 text-base font-medium mb-3 uppercase tracking-wide">
    Let's start your careers here!
  </p>
  <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight mb-6">
    Looking for a career <br /> change? Browse our job <br /> listings now!
  </h1>
  <p className="text-gray-500 text-xl mb-6">
    Mus vehicula dignissim quis si lorem libero cras pulvinar orci dapibus.
    Sagittis quisque orci pretium donec elit platea porta integer maecenas risus lobortis.
  </p>

  <div className="flex items-center gap-4">
    <div className="flex -space-x-2">
  <img className="w-12 h-12 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/1.jpg" />
  <img className="w-12 h-12 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/2.jpg" />
  <img className="w-12 h-12 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/3.jpg" />
  <img className="w-12 h-12 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/4.jpg" />
  <img className="w-12 h-12 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/5.jpg" />
</div>

    <p className="font-bold text-xl pl-10 text-gray-700">540 K+ Member Active</p>
  </div>

  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="mt-6">
    <Link
  to="/jobs"
  className="bg-green-600 text-white px-12 py-4 rounded-md hover:bg-green-700 transition text-lg mt-6"
>
  Browse Job
</Link>


  </motion.div>
</motion.div>


          {/* Right Side Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img src={heroImage} alt="hero" className="w-full max-w-2xl mx-auto" />

          </motion.div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="bg-white py-12 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Briefcase className="mx-auto text-green-600 w-12 h-12 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Talents Agency</h3>
            <p className="text-gray-500">
              Facilisi etiam consectetur mi nibh bibendum posuere ultricies cubilia donec potenti si
            </p>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="bg-green-500 text-white rounded-xl shadow-md p-6 text-center">
            <ClipboardList className="mx-auto w-12 h-12 mb-4" />
            <h3 className="text-lg font-bold mb-2">Portal Job</h3>
            <p>
              Facilisi etiam consectetur mi nibh bibendum posuere ultricies cubilia donec potenti si
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Users className="mx-auto text-green-600 w-12 h-12 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Careers Coaching</h3>
            <p className="text-gray-500">
              Facilisi etiam consectetur mi nibh bibendum posuere ultricies cubilia donec potenti si
            </p>
          </div>
        </div>
      </div>
      {/* Experience Section */}
<div className="py-20 px-6 md:px-20 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
    {/* Left Image Block with Years Bubble */}
    <div className="relative w-full max-w-md mx-auto md:mx-0">
      {/* Green blob background */}
      <div className="absolute -left-10 top-10 w-[350px] h-[350px] bg-green-200 rounded-full -z-10 blur-2xl opacity-40"></div>

      {/* Actual image */}
      <img
        src={girlImage}
        alt="woman smiling"
        className="rounded-[100px_0_100px_0] w-full object-cover"
      />

      {/* Years Circle */}
      <div className="absolute -top-8 -right-8 bg-white shadow-lg rounded-full w-32 h-32 flex flex-col items-center justify-center text-center">
        <span className="text-green-600 text-3xl font-bold">15+</span>
        <span className="text-xs font-semibold text-gray-700 uppercase">Years of<br />Experience</span>
      </div>
    </div>

    {/* Right Text Content */}
    <div>
      <p className="text-green-600 font-semibold uppercase text-sm mb-2">Our Service</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
        Bridge for industrial and<br />corporate development.
      </h2>
      <p className="text-gray-500 mb-6">
        Donec class lacinia vel hac laoreet amet et dictumst suspendisse. Maximus tortor pede egestas
        quis facilisis est. Neque dis fringilla augue mollis viverra enim conubia pulvinar.
      </p>
      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition">
        DISCOVER MORE
      </button>
    </div>
  </div>
  {/* Latest Job Listing Section */}
<section className="py-20 px-6 md:px-20 bg-white">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Latest Job Listing</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Job Card */}
    {[
      {
        companyLogo: "https://seeklogo.com/images/F/foxhub-logo-7492C4E260-seeklogo.com.png",
        companyName: "FoxHUB Studios",
        companyLocation: "Jakarta, Indonesia",
        jobTitle: "IT Support Associate"
      },
      {
        companyLogo: "https://seeklogo.com/images/T/treva-logo-62F702AC0E-seeklogo.com.png",
        companyName: "Treva Agency",
        companyLocation: "Bandung, Indonesia",
        jobTitle: "Android Developer"
      },
      {
        companyLogo: "https://seeklogo.com/images/M/muzica-logo-A80B69F10E-seeklogo.com.png",
        companyName: "Muzica Studio",
        companyLocation: "Surabaya, Indonesia",
        jobTitle: "Senior Manager"
      }
    ].map((job, index) => (
      <div key={index} className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 transition hover:shadow-xl">
        {/* Verified Badge */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="bg-lime-100 text-lime-700 text-sm font-medium px-3 py-1 rounded-full">
            ✅ Verified Company
          </span>
        </div>

        {/* Company Info */}
        <div className="flex items-center mb-4 space-x-4">
          <img src={job.companyLogo} alt="Company Logo" className="w-12 h-12 object-contain" />
          <div>
            <p className="text-sm text-gray-500">{job.companyLocation}</p>
            <p className="text-md font-semibold text-gray-900">{job.companyName}</p>
          </div>
        </div>

        <hr className="mb-4" />

        {/* Job Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.jobTitle}</h3>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        {/* Job Footer */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>
            <p className="flex items-center space-x-2 text-green-600 font-medium">
              <span>💼 Full Time</span>
            </p>
            <p className="mt-1 text-gray-500">$20k - $25k</p>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-semibold transition">
            APPLY NOW
          </button>
        </div>
      </div>
    ))}
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Job Card */}
    {[
      {
        companyLogo: "https://seeklogo.com/images/F/foxhub-logo-7492C4E260-seeklogo.com.png",
        companyName: "FoxHUB Studios",
        companyLocation: "Jakarta, Indonesia",
        jobTitle: "IT Support Associate"
      },
      {
        companyLogo: "https://seeklogo.com/images/T/treva-logo-62F702AC0E-seeklogo.com.png",
        companyName: "Treva Agency",
        companyLocation: "Bandung, Indonesia",
        jobTitle: "Android Developer"
      },
      {
        companyLogo: "https://seeklogo.com/images/M/muzica-logo-A80B69F10E-seeklogo.com.png",
        companyName: "Muzica Studio",
        companyLocation: "Surabaya, Indonesia",
        jobTitle: "Senior Manager"
      }
    ].map((job, index) => (
      <div key={index} className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 transition hover:shadow-xl">
        {/* Verified Badge */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="bg-lime-100 text-lime-700 text-sm font-medium px-3 py-1 rounded-full">
            ✅ Verified Company
          </span>
        </div>

        {/* Company Info */}
        <div className="flex items-center mb-4 space-x-4">
          <img src={job.companyLogo} alt="Company Logo" className="w-12 h-12 object-contain" />
          <div>
            <p className="text-sm text-gray-500">{job.companyLocation}</p>
            <p className="text-md font-semibold text-gray-900">{job.companyName}</p>
          </div>
        </div>

        <hr className="mb-4" />

        {/* Job Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.jobTitle}</h3>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        {/* Job Footer */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>
            <p className="flex items-center space-x-2 text-green-600 font-medium">
              <span>💼 Full Time</span>
            </p>
            <p className="mt-1 text-gray-500">$20k - $25k</p>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-semibold transition">
            APPLY NOW
          </button>
        </div>
      </div>
    ))}
  </div>
</section>
{/* Featured Company Section */}
<section className="bg-gray-50 py-20 px-6 md:px-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Logos Grid */}
    <div className="grid grid-cols-3 gap-4 sm:gap-6">
      {[
        { src: "https://seeklogo.com/images/V/velocity9-logo-6DB0380F99-seeklogo.com.png", alt: "Velocity9" },
        { src: "https://seeklogo.com/images/T/treva-logo-62F702AC0E-seeklogo.com.png", alt: "Treva" },
        { src: "https://seeklogo.com/images/M/muzica-logo-A80B69F10E-seeklogo.com.png", alt: "Muzica" },
        { src: "https://seeklogo.com/images/G/goldline-logo-8F4A835D24-seeklogo.com.png", alt: "Goldline" },
        { src: "https://seeklogo.com/images/F/foxhub-logo-7492C4E260-seeklogo.com.png", alt: "FoxHUB" },
        { src: "https://seeklogo.com/images/C/codelab-logo-F1D6A4E6C2-seeklogo.com.png", alt: "CodeLab" },
        { src: "https://seeklogo.com/images/A/aven-logo-65E1357334-seeklogo.com.png", alt: "Aven" },
        { src: "https://seeklogo.com/images/A/asgardia-logo-671FD1977F-seeklogo.com.png", alt: "Asgardia" },
        { src: "https://seeklogo.com/images/E/earth20-logo-770F258E3B-seeklogo.com.png", alt: "Earth2.0" },
      ].map((logo, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
          <img src={logo.src} alt={logo.alt} className="h-10 object-contain" />
        </div>
      ))}
    </div>

    {/* Text Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Featured Company</h2>
      <p className="text-gray-600 mb-6">
        Dui vel aliquam nullam natoque iaculis viverra conubia letius. Primis non rhoncus dolor a urna finibus ultricies libero.
      </p>
      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold transition">
        BROWSE COMPANY
      </button>
    </div>
  </div>
</section>
{/* Join Community Section */}
<section className="relative bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e')" }}>
  <div className="bg-[#0f3550]/80 w-full h-full py-24 px-6 md:px-20">
    <div className="max-w-4xl text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Join our community of talented<br /> professionals by applying for a job today!
      </h2>
      <p className="text-lg mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <button className="bg-green-500 hover:bg-green-600 px-6 py-3 text-white font-semibold rounded-md">
        DISCOVER MORE
      </button>
    </div>
  </div>

  {/* Stats Card */}
  <div className="absolute w-full bottom-[-80px] px-6 md:px-20">
    <div className="bg-white shadow-lg rounded-xl flex flex-wrap justify-between items-center p-8 gap-6 text-center max-w-6xl mx-auto">
      {[
        { value: "540K+", label: "Member Active" },
        { value: "14K+", label: "Companies" },
        { value: "270+", label: "Expert Trainers" },
        { value: "15+", label: "Years of Experience" },
      ].map((stat, idx) => (
        <div key={idx} className="flex-1 min-w-[120px]">
          <h3 className="text-3xl font-bold text-green-600">{stat.value}</h3>
          <p className="text-gray-800 font-semibold mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Padding fix for next section */}
<div className="pt-40"></div>


</div>

    </div>
  );
}

export default Home;
