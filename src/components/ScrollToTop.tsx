import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setShowTopBtn(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const circumference = 2 * Math.PI * 20; // radius = 20
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          onClick={goToTop}
          className="fixed bottom-6 ltr:right-6 rtl:left-6 z-50 group"
          aria-label="Scroll to top"
        >
          <div className="relative w-12 h-12">
            {/* Progress circle */}
            <svg
              className="w-12 h-12 -rotate-90 transform"
              viewBox="0 0 48 48"
            >
              {/* Background circle */}
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted-foreground/20"
              />
              {/* Progress circle */}
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-primary transition-all duration-150"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset,
                }}
              />
            </svg>
            {/* Arrow icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-background rounded-full m-1.5 shadow-lg border group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <ArrowUp className="w-5 h-5" />
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
