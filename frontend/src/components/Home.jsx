import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png"; // Replace this with your actual image path
import girlImage from "../assets/girl.png";
import { Briefcase, ClipboardList, Users } from "lucide-react"; // Or use SVGs as images/icons
import Testimonials from "../components/Testimonials"; // adjust path based on your file structure
import BenefitsSection from "../components/BenefitsSection";
import Question from "./Question";
import JobBannerSection from "./JobBannerSection"; // adjust path based on your file structure
import FeatureCards from "./FeatureCards";
import Featured from "./Featured";
import CountUp from "react-countup";




function Home() {
  return (
    <>
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className=" p-6 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="ml-15" // Shifts content slightly to the right
          >
            <p className=" text-base font-medium mb-3 uppercase tracking-wide" style={{ color: "#83B348" }}>
              Let's start your careers here!
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight mb-6">
              Looking for a career <br /> change? Browse our job <br /> listings
              now!
            </h1>
            <p className="text-gray-500 text-xl mb-6">
              Mus vehicula dignissim quis si lorem libero cras pulvinar orci
              dapibus. Sagittis quisque orci pretium donec elit platea porta
              integer maecenas risus lobortis.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <img
                  className="w-12 h-12 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                />
                <img
                  className="w-12 h-12 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                />
                <img
                  className="w-12 h-12 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/men/3.jpg"
                />
                <img
                  className="w-12 h-12 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/women/4.jpg"
                />
                <img
                  className="w-12 h-12 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/women/5.jpg"
                />
              </div>

              <p className="font-bold text-xl pl-10 text-gray-700">
                540 K+ Member Active
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              <Link
  to="/jobs"
  className="text-white px-12 py-4 rounded-md transition text-lg mt-6 font-semibold"
  style={{ backgroundColor: "#83B348" }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#73a133")} // darker shade on hover
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#83B348")}
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
            <img
              src={heroImage}
              alt="hero"
              className="w-full max-w-2xl mx-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <FeatureCards/>
      {/* Experience Section */}
      <div className="py-20 px-6 md:px-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Image Block with Years Bubble */}
          <div className="relative w-full max-w-md mx-auto md:mx-0 md:ml-6 left-6">
            {/* Green blob background */}
            <div className="absolute -left-10 top-10 w-[350px] h-[350px] bg-green-200 rounded-full -z-10 blur-2xl opacity-40"></div>

            {/* Actual image */}
            <img
              src={girlImage}
              alt="woman smiling"
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

          {/* Right Text Content */}
          <div>
            <p className="text-green-600 font-semibold uppercase text-base mb-2">
              Our Service
            </p>{" "}
            {/* Increased from sm to base */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
              Bridge for industrial and
              <br />
              corporate development.
            </h2>{" "}
            {/* Increased from 3xl to 4xl and 4xl to 5xl */}
            <p className="text-gray-500 mb-6 text-lg">
              Donec class lacinia vel hac laoreet amet et dictumst suspendisse.
              <br></br> Maximus tortor pede egestas quis facilisis est. Neque
              dis fringilla augue<br></br> mollis viverra enim conubia pulvinar.
            </p>{" "}
            {/* Increased from default to lg */}
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition text-lg">
              DISCOVER MORE
            </button>{" "}
            {/* Added text-lg for button text */}
          </div>
        </div>

        {/* Latest Job Listing Section */}
        <section className="py-20 px-6 md:px-20 bg-white">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Latest Job Listing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job Cards */}
            {[
              {
                companyLogo:
                  "https://outview.com.br/wp-content/uploads/2024/09/fox-hub-2.png",
                companyName: "FoxHUB Studios",
                companyLocation: "Jakarta, Indonesia",
                jobTitle: "IT Support Associate",
              },
              {
                companyLogo:
                  "https://point.moxcreative.com/pabriz/wp-content/uploads/sites/35/2022/07/treva.png",
                companyName: "Treva Agency",
                companyLocation: "Bandung, Indonesia",
                jobTitle: "Android Developer",
              },
              {
                companyLogo:
                  "https://tse4.mm.bing.net/th/id/OIP.92l2AQycISfVQNWGuoc0cgAAAA?rs=1&pid=ImgDetMain",
                companyName: "Muzica Studio",
                companyLocation: "Surabaya, Indonesia",
                jobTitle: "Senior Manager",
              },
              {
                companyLogo:
                  "https://web.moxcreative.com/jobbe/wp-content/uploads/sites/2/elementor/thumbs/logo_1-q0nbmht3xanw0jsjjk1g46nczpu73i3y6dd5sw6blo.png",
                companyName: "Earth Community",
                companyLocation: "Jakarta, Indonesia",
                jobTitle: "Web Developer",
              },
              {
                companyLogo:
                  "https://web.moxcreative.com/jobbe/wp-content/uploads/sites/2/elementor/thumbs/logo_2-q0nbmiqy44p6c5r6e2g2ooetl3pkb77oii0na64xfg.png",
                companyName: "Atica Ltd",
                companyLocation: "Jakarta, Indonesia",
                jobTitle: "Digital Marketer",
              },
              {
                companyLogo:
                  "https://web.moxcreative.com/jobbe/wp-content/uploads/sites/2/elementor/thumbs/logo_3-q0nbmjosayqgnrpt8kup966a6hkxiwbeumo4rg3j98.png",
                companyName: "Fossa News",
                companyLocation: "Bandung, Indonesia",
                jobTitle: "UX/UI Designer",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-8 border border-gray-100 transition hover:shadow-xl min-h-[400px] flex flex-col"
              >
                {/* Verified Badge */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-lime-100 text-lime-700 text-sm font-medium px-3 py-1 rounded-full">
                    ✅ Verified Company
                  </span>
                </div>

                {/* Company Info */}
                <div className="flex items-center mb-4 space-x-4">
                  <img
                    src={job.companyLogo}
                    alt="Company Logo"
                    className="w-15 h-15 object-contain"
                  />
                  <div>
                    <p className="text-md text-gray-500">
                      {job.companyLocation}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {job.companyName}
                    </p>
                  </div>
                </div>

                <hr className="mb-4" />

                {/* Job Title */}
                <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                  {job.jobTitle}
                </h3>
                <p className="text-md text-gray-500 mb-6 flex-grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>

                {/* Job Footer */}
                <div className="flex items-center justify-between text-sm text-gray-600 mt-auto">
                  <div>
                    <p className="flex text-md items-center space-x-2  font-medium">
                      <span>💼 Full Time</span>
                    </p>
                   <p className="mt-1 text-gray-500 text-md font-medium">
                      <img src="https://toppng.com/uploads/preview/dollar-png-icon-dollar-ico-11563184791mhpavffw5e.png" alt="dollar icon" className="inline w-5 h-5 mr-1 align-middle"/>
                                 $20k - $25k </p>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-9 py-3 rounded-md font-semibold transition">
                    APPLY NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Featured Company Section */}
        

        {/* Padding fix for next section */}
        {/* <div className="pt-20"></div> */}
      </div>
    </div>
      {/*<Featured />*/}
        {/* Join Community Section */}
        <section
          className="relative h-[700px] w-full bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e')",
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
          <div className="absolute w-full bottom-[-90px] px-6 md:px-20">
  <div className="h-[180px] bg-white shadow-lg rounded-xl flex flex-wrap justify-between items-center p-8 gap-6 text-center max-w-[93rem] mx-auto">
    {[
      { value: 540, suffix: "K+", label: "Member Active" },
      { value: 14, suffix: "K+", label: "Companies" },
      { value: 270, suffix: "+", label: "Expert Trainers" },
      { value: 15, suffix: "+", label: "Years of Experience" },
    ].map((stat, idx) => (
      <div key={idx} className="flex-1 min-w-[120px] border-r last:border-none pr-6">
        <h3 className="text-5xl font-bold text-green-600">
          <CountUp end={stat.value} duration={1.5} suffix={stat.suffix} />
        </h3>
        <p className="text-gray-800 font-semibold mt-2">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</div>

        </section>  
    <Testimonials />
    <BenefitsSection />
          <Question/> 
           {/* Padding fix for next section */}
        <div className="pt-20"></div>
          <JobBannerSection />   
    </>
    
    
  );
}

export default Home;


