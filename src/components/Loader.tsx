"use client";
import { motion } from "framer-motion";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
}

export default function Loader({ size = "md" }: LoaderProps) {
  const sizes = {
    sm: "w-6 h-6 border-2",
    md: "w-12 h-12 border-4",
    lg: "w-20 h-20 border-8",
  };

  return (
    <div className="flex justify-center items-center w-full h-full min-h-[150px]">
      <motion.div
        className={`${sizes[size]} border-indigo-500 border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
}
