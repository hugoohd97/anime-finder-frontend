"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
  message?: string;
}

export function ErrorMessage(props: ErrorMessageProps) {
  const { message } = props;

  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-red-500/10 border border-red-500/30 text-red-400 px-6 py-4 rounded-xl max-w-md mx-auto shadow-md text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AlertCircle className="w-8 h-8 mb-2 text-red-400" />
      <p className="font-medium">
        {message || "Ha ocurrido un error inesperado. Intenta nuevamente."}
      </p>
    </motion.div>
  );
}
