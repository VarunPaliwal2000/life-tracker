import { AnimatePresence, motion } from "framer-motion";

export default function GymTrackerPopup({ isOpen, setIsOpen }: any) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            className="fixed inset-0 bg-[rgba(0,0,0,0.3)] z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Popup Form */}
          <motion.div
            className="fixed z-50 top-1/2 left-1/2 w-full max-w-md bg-white rounded-xl p-6 shadow-lg transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-xl font-bold mb-4">Animated Form</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-3 p-2 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 p-2 border rounded"
                required
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
