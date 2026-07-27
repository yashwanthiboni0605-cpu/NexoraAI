import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="bg-[#050816] py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-cyan-400">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Let's Build Your Career Together
          </h2>

          <p className="text-gray-400 mt-6">
            Have questions? We'd love to hear from you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="flex items-center gap-5">
              <Mail className="text-cyan-400" size={28}/>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-400">
                  contact@nexora.ai
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <Phone className="text-cyan-400" size={28}/>
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-gray-400">
                  +91 70755 23342
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <MapPin className="text-cyan-400" size={28}/>
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-gray-400">
                  India
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-[#0d1325] p-4 text-white outline-none"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl bg-[#0d1325] p-4 text-white outline-none"
              required
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full rounded-xl bg-[#0d1325] p-4 text-white outline-none"
              required
            />

            <button
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 text-white font-semibold flex justify-center items-center gap-2 hover:scale-105 transition"
            >
              <Send size={18}/>
              Send Message
            </button>

            {submitted && (
              <p className="text-green-400 text-center">
                ✅ Message Sent Successfully!
              </p>
            )}

          </motion.form>

        </div>

      </div>
    </section>
  );
}