"use client";

import { AnimatePresence, motion } from "framer-motion";

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog(props: ConfirmDialogProps) {
  const {
    open,
    title = "Confirmar acción",
    message = "¿Estás seguro de que deseas continuar?",
    onConfirm,
    onCancel,
  } = props;

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 flex justify-center items-center z-[60]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gray-900 border border-gray-700 p-6 rounded-xl text-white w-full max-w-sm shadow-lg text-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-gray-400 mb-6">{message}</p>

          <div className="flex justify-center gap-4">
            <button
              onClick={onCancel}
              className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition"
            >
              Eliminar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
