"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

interface InfoMessageProps {
  message?: string;
}

export function InfoMessage(props: InfoMessageProps) {
  const { message } = props;

  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-blue-500/10 border border-blue-500/30 text-blue-400 px-6 py-4 rounded-xl max-w-md mx-auto shadow-md text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AlertCircle className="w-8 h-8 mb-2 text-blue-400" />
      <p className="font-medium">{message || ""}</p>
    </motion.div>
  );
}
