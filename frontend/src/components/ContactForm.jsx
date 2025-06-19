import React from 'react';

const ContactForm = () => {
  return (
    <section className="relative  bg-gray-100">
      {/* Background image with overlay */}
      <div className="relative bg-fixed inset-0 bg-[url('D:\jobb\frontend\src\assets\ContactFormBg.jpg')] bg-cover bg-center h-110 ">
      
      <div className="container mx-auto px-4 relative z-10 pt-[150px] ">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Send us a message</h2>
          <p className="text-lg text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
</div>
<div className='flex justify-center relative overflow-visible'>
        {/* <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg w-[600px]">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            //Row 1: Name | Company
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your company name"
              />
            </div>

            //Row 2: Phone | Email
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Phone number"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Email address"
              />
            </div>

            //Row 3: Division | Subject
            <div className="space-y-2">
              <label htmlFor="division" className="block text-sm font-medium text-gray-700">Division</label>
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
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Subject of your message"
              />
            </div>

           // Message field - full width
            <div className="md:col-span-2 space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Type your message here..."
              ></textarea>
            </div>

             //Submit button *
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center shadow-md hover:shadow-lg"
              >
                Send Message
                
              </button>
            </div>
          </form>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;