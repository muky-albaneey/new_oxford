"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { brandConfig } from "@/src/config/brand";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
  video?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaLabel,
  ctaHref,
  image = "/images/hero-school.jpg",
  video,
}: HeroProps) {
  const [videoError, setVideoError] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  // Spring animations for smoothness
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  useEffect(() => {
    // Reset states when video changes
    setVideoError(false);
    setVideoLoading(true);
    
    // Ensure video plays on mount
    if (videoRef.current && video) {
      // Check if browser supports the video format
      const videoElement = videoRef.current;
      const canPlay = videoElement.canPlayType('video/quicktime') || videoElement.canPlayType('video/mp4');
      
      if (!canPlay && video.endsWith('.MOV')) {
        console.warn('MOV format may not be supported in this browser. Consider converting to MP4.');
      }
      
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video playing successfully');
            setVideoLoading(false);
          })
          .catch((error) => {
            console.error('Error playing video:', error);
            setVideoError(true);
            setVideoLoading(false);
          });
      }
    }
  }, [video]);

  return (
    <section 
      ref={heroRef}
      className="relative flex min-h-screen flex-col items-center overflow-hidden bg-white md:flex-row"
    >
      {/* Left Side - Colored Background with Text */}
      <div className="relative z-10 flex min-h-[50vh] w-full flex-col justify-center px-8 py-12 md:min-h-screen md:w-3/5 md:px-16 md:py-20 lg:px-24 overflow-hidden" style={{ backgroundColor: '#358600' }}>
        {/* Animated Mathematical Formulas Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 5 }}>
          {[
            { formula: "E=mc²", size: "text-2xl md:text-6xl", top: "8%", left: "5%", delay: 0, showOnMobile: true },
            { formula: "π", size: "text-2xl md:text-7xl", top: "25%", left: "8%", delay: 0.4, showOnMobile: true },
            { formula: "∫", size: "text-3xl md:text-8xl", top: "42%", left: "4%", delay: 0.8, showOnMobile: true },
            { formula: "∞", size: "text-3xl md:text-8xl", top: "58%", left: "10%", delay: 1.2, showOnMobile: true },
            { formula: "∑", size: "text-3xl md:text-7xl", top: "75%", left: "6%", delay: 1.6, showOnMobile: false },
            { formula: "∇", size: "text-2xl md:text-6xl", top: "15%", left: "18%", delay: 0.2, showOnMobile: false },
            { formula: "√", size: "text-2xl md:text-7xl", top: "50%", left: "20%", delay: 1.0, showOnMobile: false },
            { formula: "Δ", size: "text-3xl md:text-7xl", top: "68%", left: "15%", delay: 1.4, showOnMobile: false },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`absolute ${item.size} font-serif select-none ${item.showOnMobile ? '' : 'hidden md:block'}`}
              style={{
                top: item.top,
                left: item.left,
                color: 'rgba(255, 255, 255, 0.45)',
                zIndex: 5,
                pointerEvents: 'none',
              }}
              initial={{ 
                opacity: 0.45, 
                scale: 0.9,
                rotate: 0,
              }}
              animate={{
                opacity: [0.45, 0.55, 0.45],
                scale: [0.9, 1.1, 0.9],
                rotate: [0, 360],
                y: [0, -20, 0],
                x: [0, 15, 0],
              }}
              transition={{
                duration: 8 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
            >
              {item.formula}
            </motion.div>
          ))}
          
          {/* Additional floating formulas with different styles */}
          {[
            { formula: "f(x) = ∫", top: "8%", right: "5%", delay: 0.1 },
            { formula: "lim", top: "18%", right: "9%", delay: 0.3 },
            { formula: "d/dx", top: "28%", right: "4%", delay: 0.5 },
            { formula: "Σ", top: "38%", right: "8%", delay: 0.7 },
            { formula: "∏", top: "48%", right: "12%", delay: 0.9 },
            { formula: "∫∫", top: "58%", right: "10%", delay: 1.1 },
            { formula: "∇²", top: "68%", right: "14%", delay: 1.3 },
            { formula: "e^x", top: "78%", right: "7%", delay: 1.5 },
            { formula: "sin", top: "13%", right: "18%", delay: 0.2 },
            { formula: "ln", top: "53%", right: "20%", delay: 1.0 },
          ].map((item, index) => (
            <motion.div
              key={`right-${index}`}
              className="absolute text-xl md:text-5xl font-serif select-none"
              style={{
                top: item.top,
                right: item.right,
                color: 'rgba(255, 255, 255, 0.4)',
                zIndex: 5,
                pointerEvents: 'none',
              }}
              initial={{ 
                opacity: 0.4, 
                scale: 0.85,
                rotate: 0
              }}
              animate={{
                opacity: [0.4, 0.5, 0.4],
                scale: [0.85, 1.05, 0.85],
                rotate: [0, -360],
                x: [0, -20, 0],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 10 + index * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
            >
              {item.formula}
            </motion.div>
          ))}
        </div>

        {/* Geometric Pattern Overlay */}
        <motion.div 
          className="absolute inset-0 opacity-10 z-[1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div 
            className="absolute right-0 top-0 h-full w-1/3"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="absolute right-0 top-0 h-full w-full origin-top-right skew-x-12 bg-white"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="relative z-20 text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            {/* Main Title - Large, Bold, All Caps, White with Typewriter Animation */}
            <h1 className="mb-2 font-serif text-xl font-bold leading-[1.2] text-white sm:text-2xl sm:mb-3 md:mb-4 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl" style={{ textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
              <TypeAnimation
                sequence={[
                  title,
                  3000,
                  '',
                  800,
                  title,
                  3000,
                ]}
                wrapper="span"
                speed={30}
                deletionSpeed={50}
                repeat={Infinity}
                style={{ 
                  display: 'block', 
                  fontSize: 'inherit', 
                  fontWeight: 'inherit', 
                  lineHeight: 'inherit',
                  textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  textAlign: 'left'
                }}
                cursor={true}
              />
            </h1>

            {/* Subtitle if provided */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-2 text-sm font-normal text-white/90 sm:text-base md:mb-3 md:text-lg lg:text-xl"
                style={{ textTransform: 'uppercase', textAlign: 'left' }}
              >
                {subtitle}
              </motion.p>
            )}

            {/* Description */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-4 max-w-2xl text-xs leading-relaxed text-white/90 sm:text-sm sm:mb-5 md:mb-6 md:text-base lg:text-lg"
                style={{ textAlign: 'left' }}
              >
                {description}
              </motion.p>
            )}

            {/* CTA Button */}
            {ctaLabel && ctaHref && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Link
                  href={ctaHref}
                  className="group inline-flex items-center rounded-full border-2 border-white bg-white px-5 py-2.5 text-xs font-semibold text-brand-primary transition-all hover:bg-transparent hover:text-white sm:px-6 sm:py-3 sm:text-sm md:text-base"
                >
                  {ctaLabel}
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Right Side - Image/Video with Diagonal Overlay */}
      <div className="relative h-[50vh] w-full md:absolute md:right-0 md:top-0 md:h-full md:w-2/5">
        {/* Background Image/Video */}
        <div className="relative h-full w-full overflow-hidden">
          {video && !videoError ? (
            <>
              {/* Background image - always visible behind video with parallax */}
              <motion.div 
                className="absolute inset-0 z-[0]"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
              
              <motion.video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={image}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectFit: 'cover', width: '100%', height: '100%', zIndex: 1 }}
                webkit-playsinline="true"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                onError={(e) => {
                  const videoElement = e.currentTarget as HTMLVideoElement;
                  const error = videoElement.error;
                  
                  // Get detailed error information
                  let errorDetails: any = {
                    videoSrc: video,
                    networkState: videoElement.networkState,
                    readyState: videoElement.readyState,
                    currentSrc: videoElement.currentSrc,
                    src: videoElement.src,
                  };
                  
                  if (error) {
                    errorDetails.errorCode = error.code;
                    errorDetails.errorMessage = error.message;
                    
                    // Decode error codes
                    const errorMessages: { [key: number]: string } = {
                      1: 'MEDIA_ERR_ABORTED - The user aborted the video',
                      2: 'MEDIA_ERR_NETWORK - A network error occurred',
                      3: 'MEDIA_ERR_DECODE - The video could not be decoded',
                      4: 'MEDIA_ERR_SRC_NOT_SUPPORTED - The video format is not supported',
                    };
                    errorDetails.errorDescription = errorMessages[error.code] || 'Unknown error';
                  }
                  
                  console.error('Video failed to load:', errorDetails);
                  
                  // Check if it's a format issue
                  if (video.endsWith('.MOV') || video.endsWith('.mov')) {
                    console.warn('MOV format detected. For best browser compatibility, convert to MP4 format.');
                  }
                  
                  // Check if file exists
                  fetch(video, { method: 'HEAD' })
                    .then((response) => {
                      if (!response.ok) {
                        console.error(`Video file not found (${response.status}): ${video}`);
                      }
                    })
                    .catch((err) => {
                      console.error('Error checking video file:', err);
                    });
                  
                  setVideoError(true);
                  setVideoLoading(false);
                }}
                onLoadedData={() => {
                  console.log('Video loaded successfully');
                  setVideoLoading(false);
                }}
                onCanPlay={() => {
                  console.log('Video can play');
                  setVideoLoading(false);
                  if (videoRef.current) {
                    videoRef.current.play().catch((err) => {
                      console.error('Play error:', err);
                      setVideoError(true);
                    });
                  }
                }}
                onLoadStart={() => {
                  console.log('Video loading started');
                  setVideoLoading(true);
                }}
              >
                {/* Primary MP4 source */}
                <source src={video} type="video/mp4" />
                {/* Fallback: try MOV if MP4 fails */}
                <source src={video.replace(/\.mp4$/i, '.MOV')} type="video/quicktime" />
              </motion.video>
              {/* Loading indicator */}
              {videoLoading && !videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/30">
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
                </div>
              )}
              
              {/* Fallback image (shown if video fails) */}
              {videoError && (
                <div className="absolute inset-0 z-[1]">
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="absolute inset-0 z-[1]">
              <Image
                src={image}
                alt=""
                fill
                className="object-cover"
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}
          
          {/* Formula overlays at top of video - 5 formulas */}
          <div className="absolute inset-0 z-[3] pointer-events-none">
            {[
              { formula: "E=mc²", top: "8%", left: "10%", delay: 0.8 },
              { formula: "π", top: "12%", left: "50%", delay: 1.0 },
              { formula: "∫", top: "6%", right: "15%", delay: 1.2 },
              { formula: "∞", top: "10%", left: "30%", delay: 1.4 },
              { formula: "∑", top: "14%", right: "25%", delay: 1.6 },
            ].map((item, index) => (
              <motion.div
                key={`video-top-${index}`}
                className="absolute z-[3] pointer-events-none"
                style={{
                  top: item.top,
                  left: item.left,
                  right: item.right,
                }}
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: item.delay, ease: "easeOut" }}
              >
                <motion.div
                  className="text-sm sm:text-base md:text-lg font-serif text-white/80 select-none"
                  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                  animate={{
                    opacity: [0.8, 0.95, 0.8],
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 5 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay + 1,
                  }}
                >
                  {item.formula}
                </motion.div>
              </motion.div>
            ))}
            
            {/* Formula overlays at bottom of video - 5 formulas */}
            {[
              { formula: "√", bottom: "12%", left: "15%", delay: 2.0 },
              { formula: "Δ", bottom: "10%", left: "50%", delay: 2.2 },
              { formula: "Ω", bottom: "14%", right: "12%", delay: 2.4 },
              { formula: "∇", bottom: "8%", left: "30%", delay: 2.6 },
              { formula: "α", bottom: "16%", right: "28%", delay: 2.8 },
            ].map((item, index) => (
              <motion.div
                key={`video-bottom-${index}`}
                className="absolute z-[3] pointer-events-none"
                style={{
                  bottom: item.bottom,
                  left: item.left,
                  right: item.right,
                }}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: item.delay, ease: "easeOut" }}
              >
                <motion.div
                  className="text-sm sm:text-base md:text-lg font-serif text-white/80 select-none"
                  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                  animate={{
                    opacity: [0.8, 0.95, 0.8],
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 5, 0],
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 5 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay + 1,
                  }}
                >
                  {item.formula}
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Diagonal Overlay from Left - Matching LEH style */}
          <div className="absolute inset-0 z-[2] pointer-events-none">
            {/* Mobile: Simple gradient overlay from top */}
            <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(to top, rgba(53, 134, 0, 0.7), rgba(53, 134, 0, 0.4), transparent)' }}></div>
            {/* Desktop: Gradient overlay with diagonal */}
            <div className="hidden md:block absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(53, 134, 0, 0.6), rgba(53, 134, 0, 0.5), transparent)' }}></div>
            {/* Diagonal cut overlay - desktop only */}
            <div className="hidden md:block absolute left-0 top-0 h-full w-1/3 origin-top-left -skew-x-12 md:w-2/5" style={{ backgroundColor: 'rgba(53, 134, 0, 0.8)' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

