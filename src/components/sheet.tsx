import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode
}

const Sheet: React.FC<SheetProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-80 min-h-screen shadow-xl p-6"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button onClick={onClose} className="mb-4 text-red-500">
              <FaTimes className='text-black text-2xl'></FaTimes>
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sheet;
