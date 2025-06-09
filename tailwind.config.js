module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  safelist: [
  "hidden",
  "block",
  "fixed",
  "bottom-4",
  "right-4",
  "bg-pink-400",
  "text-white",
  "hover:bg-pink-500",
  "transition",
  "duration-300",
  "ease-in-out",
  "rounded-full",
  "shadow-md",
  "bg-purple-700",
  "bg-pink-500",
  "bg-blue-500",
  "bg-purple-500",
  "hover:bg-purple-600",
  "bg-blue-400",
  "hover:bg-blue-500",
  "opacity-10",
  "opacity-20",
  "opacity-30",
  "transform",
  "translate-y-0",
  "dynamic-gradient"
],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
        'bounce-slow': 'bounceSlow 4s infinite',
        'pulse': 'pulse 3s ease-in-out infinite', // <-- Add this line
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: { 
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
    },
  },
};
