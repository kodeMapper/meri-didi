
import { motion } from "framer-motion";
import { AppleIcon, Smartphone, QrCode, User, Check } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 leading-tight">
              Download the Meri Didi App
            </h2>
            <p className="text-lg text-neutral-600">
              Get instant access to verified professionals, exclusive offers, and seamless booking experience right from your phone.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.a 
                href="#" 
                className="bg-black hover:bg-neutral-900 text-white px-6 py-4 rounded-xl flex items-center justify-center sm:justify-start space-x-3 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Smartphone size={24} />
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </motion.a>
              
              <motion.a 
                href="#" 
                className="bg-black hover:bg-neutral-900 text-white px-6 py-4 rounded-xl flex items-center justify-center sm:justify-start space-x-3 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AppleIcon size={24} />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </motion.a>
            </div>

            {/* Stats and Trust Indicators */}
            <div className="mt-8 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center ring-2 ring-white"
                    >
                      {String.fromCharCode(65 + i)}
                    </motion.div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold">Joined by 10,000+ users</p>
                  <p className="text-sm text-neutral-500">in the last month</p>
                </div>
              </div>
              
              <motion.div 
                className="flex items-center space-x-2 text-sm bg-white p-3 rounded-lg shadow-sm w-fit"
                whileHover={{ y: -2 }}
              >
                <Check className="text-primary" size={16} />
                <span>Verified Professionals</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full max-w-[300px] mx-auto">
              {/* Phone Frame */}
              <motion.div 
                className="bg-black rounded-[3rem] p-4 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative aspect-[9/19] rounded-[2.5rem] overflow-hidden bg-white">
                  <img 
                    src="/client/public/images/meri-didi-app-interface.jpg" 
                    alt="Meri Didi App Interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating QR Code */}
              <motion.div 
                className="absolute -right-20 top-1/4 bg-white p-4 rounded-xl shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <QrCode size={80} className="text-neutral-800" />
                <p className="text-xs text-center mt-2 text-neutral-600">Scan to download</p>
              </motion.div>

              {/* Features Badge */}
              <motion.div 
                className="absolute -left-16 bottom-1/4 bg-white px-4 py-2 rounded-lg shadow-lg"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <Check className="text-primary" size={16} />
                  <span className="text-sm">Instant Booking</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
