import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PolicyModal = ({ title, children }) => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50"
        >
          {/* Header */}
          <div className="sticky top-0 bg-gray-900/95 backdrop-blur-md p-6 border-b border-gray-700/50 flex justify-between items-center">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              {title}
            </h2>
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6 text-gray-300 space-y-6 leading-relaxed">
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PolicyModal;