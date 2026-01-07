import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary/80 text-foreground transition-colors hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Moon className="h-5 w-5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Sun className="h-5 w-5" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-full"
        initial={false}
        animate={{
          boxShadow: isDark
            ? "0 0 20px 2px rgba(255, 200, 100, 0.15)"
            : "0 0 20px 2px rgba(100, 150, 255, 0.15)",
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
