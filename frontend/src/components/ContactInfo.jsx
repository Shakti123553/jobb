import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap  justify-between">
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg w-[600px]">
          <h2 className="text-xl font-bold text-center text-gray-700 mb-4 pb-4">
            Send us a message
          </h2>
          <p className="text-lg text-gray-700 text-center pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Row 1: Name | Company */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your company name"
              />
            </div>

            {/* Row 2: Phone | Email */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Phone number"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Email address"
              />
            </div>

            {/* Row 3: Division | Subject */}
            <div className="space-y-2">
              <label
                htmlFor="division"
                className="block text-sm font-medium text-gray-700"
              >
                Division
              </label>
              <select
                id="division"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select department</option>
                <option value="sales">Sales</option>
                <option value="support">Customer Support</option>
                <option value="hr">Human Resources</option>
                <option value="technical">Technical</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Subject of your message"
              />
            </div>

            {/* Message field - full width */}
            <div className="md:col-span-2 space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* LEFT SIDE */}
        {/* <div className="flex-1 min-w-[300px] space-y-6 bg-gray-200 pl-[30px]" >
          <p className="text-green-600 font-semibold">GET IN TOUCH</p>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900">
            Don't hesitate to contact<b></b> us for more information.
          </h2>
          <p className="text-gray-600" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          

          <div className="flex items-start gap-4">
            <MapPin className="text-green-600 w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800 " >Head Office</h4>
              <p className="text-gray-600">
                Jalan Cempaka Wangi No 22<br />
                Jakarta - Indonesia
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-green-600 w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Email us</h4>
              <p className="text-gray-600">
                support@yourdomain.tld<br />
                hello@yourdomain.tld
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-green-600 w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Call us</h4>
              <p className="text-gray-600">
                Phone: ‪+6221.2002.2012‬<br />
                Fax: ‪+6221.2002.2013‬
              </p>
            </div>
          </div>
        </div> */}

        {/* RIGHT SIDE: MAP */}
        <div className="flex-1 min-w-[450px] h-[800px] rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35627.55422652258!2d85.83584134095902!3d20.37290081051512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909ee33cbd993%3A0x7656054823a60bbf!2sCodekart%20Solutions%20Private%20Limited!5e1!3m2!1sen!2sin!4v1750241648776!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
