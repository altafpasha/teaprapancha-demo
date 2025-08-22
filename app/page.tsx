"use client";

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, ArrowRight } from 'lucide-react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    },
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const socialIcons = [
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-60 h-60 bg-yellow-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-orange-300/20 rounded-full blur-2xl"></div>
      </div>

      {/* Full page glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/10 z-5"></div>

      {/* Main glassmorphism container */}
      <div className="relative z-10 w-full h-full min-h-screen flex items-center justify-center p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl mx-auto"
        >
          {/* Main Content Card with enhanced glassmorphism */}
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-xl bg-white/25 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/40 relative overflow-hidden"
          >
            {/* Additional glassmorphism layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            
            <div className="relative z-10">
              {/* Logo */}
              <motion.div
                variants={logoVariants}
                animate={["visible", "float"]}
                className="flex justify-center mb-8"
              >
                <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                  <img
                    src="https://supabase.codesec.me/storage/v1/object/public/client//ChatGPT%20Image%20Aug%2022,%202025,%2010_03_14%20PM.png"
                    alt="Tea Prapancha Logo"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight drop-shadow-lg"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                We're Brewing
                <span className="block bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent">
                  Something Special!
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-white/95 text-center mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Our website is under maintenance. Stay tuned for a refreshing experience.
              </motion.p>

              {/* Newsletter Subscription */}
              <motion.div
                variants={itemVariants}
                className="max-w-md mx-auto mb-12"
              >
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email for updates"
                      className="w-full px-6 py-4 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 transition-all duration-300 shadow-lg"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-amber-800 to-amber-900 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-sm border border-amber-700/50"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {isSubscribed ? (
                      "Subscribed!"
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>
                {isSubscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-white/90 mt-4 drop-shadow-md"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    Thank you for subscribing! We'll keep you updated.
                  </motion.p>
                )}
              </motion.div>

              {/* Social Media Icons */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center gap-6 mb-8"
              >
                {socialIcons.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/35 transition-all duration-300 border border-white/40 shadow-lg"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            variants={itemVariants}
            className="text-center mt-8 text-white text-base drop-shadow-lg font-medium"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            <p>
              © 2025 Tea Prapancha. Developed by{' '}
              <a
                href="https://codesec.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-200 transition-colors duration-300 underline decoration-white/80 hover:decoration-amber-200 font-semibold"
              >
                Codesec
              </a>
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
}
