import React from "react";
import { Phone, Mail, MapPin, Send, Paperclip } from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full mt-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-4">
          <Send className="text-white mr-3" size={24} />
          <h2 className="text-2xl font-semibold">Contact</h2>
        </div>

        <h1 className="text-3xl font-medium mb-12">Let's Get in Touch!</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Contact Information */}
          <div className="space-y-6">
            {/* Contact Number */}
            <div className="bg-[#151515] rounded-lg p-2 flex items-center">
              <Phone className="text-green-600 mr-4" size={24} />
              <div>
                <p className="text-sm text-gray-300 mb-1">Contact No</p>
                <p className="text-md font-medium">+(91) 9315290229</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#151515] rounded-lg p-2 flex items-center">
              <Mail className="text-green-600 mr-4" size={24} />
              <div>
                <p className="text-sm text-gray-300 mb-1">Email</p>
                <p className="text-md font-meddium">hemathapa108111@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            {/* <div className="bg-[#151515] rounded-lg p-2 flex items-center">
              <MapPin className="text-green-600 mr-4" size={24} />
              <div>
                <p className="text-sm text-gray-300 mb-1">Address</p>
                <p className="text-lg font-bold">
                  Beverly Hills, Los Angeles, California, USA
                </p>
              </div>
            </div> */}
          </div>

          {/* Right Section - Contact Form */}
          <div className="space-y-6">
            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#151515] text-white placeholder-gray-400 rounded-lg px-4 py-3 border-0 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#151515] text-white placeholder-gray-400 rounded-lg px-4 py-3 border-0 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-[#151515] text-white placeholder-gray-400 rounded-lg px-4 py-3 border-0 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full bg-[#151515] text-white placeholder-gray-400 rounded-lg px-4 py-3 border-0 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                />
                <Paperclip
                  className="absolute right-3 top-3 text-gray-400"
                  size={20}
                />
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                className="w-full cursor-pointer bg-[#28E98C] text-black font-medium py-3 px-6 rounded-lg hover:bg-[#28E98C] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
