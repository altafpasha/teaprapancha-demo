"use client";

import { useState, useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, ArrowRight, Sparkles, Coffee, Leaf } from 'lucide-react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 1.5, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    },
    float: {
      y: [-15, 15, -15],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }
    }
  };

  const socialIcons = [
    { Icon: Instagram, href: "#", label: "Instagram", color: "from-pink-500 to-purple-500" },
    { Icon: Facebook, href: "#", label: "Facebook", color: "from-blue-500 to-blue-600" },
    { Icon: Twitter, href: "#", label: "Twitter", color: "from-blue-400 to-cyan-400" },
    { Icon: Mail, href: "#", label: "Email", color: "from-red-500 to-orange-500" }
  ];

  const teaElements = [
    { Icon: Coffee, delay: 0 },
    { Icon: Leaf, delay: 1 },
    { Icon: Sparkles, delay: 2 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-amber-500 via-yellow-500 to-orange-600 relative overflow-hidden">
      {/* Dynamic mouse-following cursor effect */}
      <motion.div
        className="fixed w-6 h-6 bg-white/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.2
        }}
      />

      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-white/30 to-yellow-200/20 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-pink-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-amber-300/20 to-yellow-300/20 rounded-full blur-3xl"
        />
        
        {/* Floating tea elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Sparkle effects */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={sparkleVariants}
            animate="animate"
          >
            <Sparkles className="w-3 h-3 text-white/40" />
          </motion.div>
        ))}
      </div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent backdrop-blur-sm" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8"
        >
          {/* Main Content Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="w-full max-w-5xl mx-auto backdrop-blur-2xl bg-gradient-to-br from-white/25 via-white/20 to-white/10 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/30 relative overflow-hidden"
          >
            {/* Card decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-yellow-200/10 rounded-3xl sm:rounded-[2.5rem]" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            
            <div className="relative z-10">
              {/* Logo with enhanced animations */}
              <motion.div
                variants={logoVariants}
                animate={["visible", "float"]}
                className="flex justify-center mb-6 sm:mb-8 lg:mb-12"
              >
                <motion.div 
                  className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-xl scale-110" />
                  <img
                    src="https://supabase.codesec.me/storage/v1/object/public/client//ChatGPT%20Image%20Aug%2022,%202025,%2010_03_14%20PM.png"
                    alt="Tea Prapancha Logo"
                    className="relative w-full h-full object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>

              {/* Enhanced heading with gradient text */}
              <motion.div
                variants={itemVariants}
                className="text-center mb-6 sm:mb-8 lg:mb-12"
              >
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 leading-tight"
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{
                    background: "linear-gradient(45deg, #ffffff, #fef3c7, #fed7aa, #ffffff, #fbbf24)",
                    backgroundSize: "300% 300%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))"
                  }}
                >
                  We're Brewing
                </motion.h1>
                <motion.div
                  className="relative"
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-amber-200 via-yellow-100 to-orange-200 bg-clip-text text-transparent drop-shadow-lg">
                    Something Special!
                  </h2>
                  {/* Tea steam effect */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-8 bg-gradient-to-t from-white/40 to-transparent rounded-full"
                        style={{ left: `${i * 8 - 8}px` }}
                        animate={{
                          opacity: [0, 1, 0],
                          y: [0, -20],
                          x: [0, Math.random() * 10 - 5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced subheading */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl lg:text-2xl text-white/95 text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Our website is under maintenance. Stay tuned for a refreshing tea experience that will awaken your senses.
              </motion.p>

              {/* Enhanced newsletter subscription */}
              <motion.div
                variants={itemVariants}
                className="max-w-lg mx-auto mb-8 sm:mb-10 lg:mb-12 px-4"
              >
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-1">
                    <motion.input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email for updates"
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/30 transition-all duration-300 shadow-xl text-sm sm:text-base"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-700 via-amber-800 to-orange-800 text-white rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-sm border border-amber-600/50 text-sm sm:text-base relative overflow-hidden"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">
                      {isSubscribed ? (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex items-center gap-2"
                        >
                          ✨ Subscribed!
                        </motion.span>
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
                {isSubscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="text-center text-white/90 mt-4 drop-shadow-md text-sm sm:text-base px-4"
                    style={{ 
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      textShadow: '0 1px 3px rgba(0,0,0,0.3)'
                    }}
                  >
                    🎉 Thank you for subscribing! We'll keep you updated with our latest brewing adventures.
                  </motion.p>
                )}
              </motion.div>

              {/* Enhanced social media icons */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 px-4"
              >
                {socialIcons.map(({ Icon, href, label, color }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ 
                      scale: 1, 
                      rotate: 0,
                      transition: { 
                        delay: index * 0.1,
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }
                    }}
                    whileHover={{ 
                      scale: 1.3,
                      y: -8,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-white shadow-xl border border-white/30 backdrop-blur-sm relative overflow-hidden group`}
                    aria-label={label}
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 drop-shadow-lg" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Enhanced codesec message */}
              <motion.p
                variants={itemVariants}
                className="text-center text-white/90 text-sm sm:text-base px-4"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  textShadow: '0 1px 3px rgba(0,0,0,0.3)'
                }}
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 10px rgba(255,255,255,0.5)",
                      "0 0 0px rgba(255,255,255,0)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ✨ Codesec is crafting something extraordinary
                </motion.span>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced footer */}
        <motion.footer
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center p-4 sm:p-6 text-white text-sm sm:text-base font-medium"
          style={{ 
            fontFamily: 'system-ui, -apple-system, sans-serif',
            textShadow: '0 1px 3px rgba(0,0,0,0.5)'
          }}
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-sm bg-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 inline-block border border-white/20 shadow-lg"
          >
            © 2025 Tea Prapancha. Crafted with ❤️ by{' '}
            <motion.a
              href="https://codesec.me"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 8px rgba(255,255,255,0.8)"
              }}
              className="text-amber-200 hover:text-yellow-100 transition-all duration-300 underline decoration-amber-200/60 hover:decoration-yellow-100 font-bold"
            >
              Codesec
            </motion.a>
          </motion.p>
        </motion.footer>
      </div>
    </div>
  );
}
