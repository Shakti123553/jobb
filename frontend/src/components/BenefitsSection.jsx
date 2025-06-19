import React from "react";
import { FaHardHat, FaStar, FaChalkboardTeacher } from "react-icons/fa";
import teamImage from "../assets/team.jpg"; // Update path as needed

const BenefitsSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Section */}
      <div className="md:w-1/2 pl-20">
        <p className="text-green-600 text-xl pb-7 font-semibold uppercase">Benefit</p>
        <h2 className="text-5xl font-bold text-gray-900 mt-2 mb-4 pb-5">
          Adding People Strategy in <br /> Every Company.
        </h2>
        <p className="text-gray-500 mb-10 pb-5 text-xl">
          Commodo vel nec eleifend fames ad tempus conubia interdum <br></br> Consectetur
          urna finibus porttitor ad si blandit dignissim.
        </p>

        {/* Benefits */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-500 text-white p-4 rounded-full">
              <FaHardHat size={24} />
            </div>
            <div>
              <h4 className="font-bold text-2xl text-gray-900">By real employees</h4>
              <p className="text-gray-500 text-md">
                Lorem sollicitudin orci lacinia inceptos feugiat quam et<br></br>lectus sodales
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-500 text-white p-4 rounded-full">
              <FaStar size={24} />
            </div>
            <div>
              <h4 className="font-bold text-2xl text-gray-900">Comprehensive ratings</h4>
              <p className="text-gray-500 text-md">
                Lorem sollicitudin orci lacinia inceptos feugiat quam et <br></br>lectus sodales
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-500 text-white p-4 rounded-full">
              <FaChalkboardTeacher size={24} />
            </div>
            <div>
              <h4 className="font-bold text-2xl text-gray-900">Free Coaching</h4>
              <p className="text-gray-500 text-md">
                Lorem sollicitudin orci lacinia inceptos feugiat quam et<br></br> lectus sodales
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="relative md:w-1/2 w-full pr-18 max-w-[1500px] max-h-[1500px] ">
        <img
          src={teamImage}
          alt="Team"
          className="relative z-10 rounded-[35%] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default BenefitsSection;
