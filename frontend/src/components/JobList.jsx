import { motion } from 'framer-motion';
   import { Link } from 'react-router-dom';
   import BenefitsSection from "../components/BenefitsSection";
   import JobBannerSection from './JobBannerSection';
   import BrowseJobSection from './BrowseJobSection';

   function JobList({}) {
     return (
       <>
        <BrowseJobSection />
       {/* Latest Job Listing Section */}
        <section className="py-20 px-6 md:px-20 bg-white">
          
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
          </div>
        </section>
        {/* Padding fix for next section
        <div className="pt-20"></div> */}

<BenefitsSection />

 {/* Padding fix for next section */}
        <div className="pt-20"></div>
        <JobBannerSection />

       </>
         
     );
   }

   export default JobList;