import { motion } from 'motion/react';

function Inspirations() {
  return (
    <div className="h-screen flex items-center justify-center flex-col bg-navy py-32">
      <h2 className="font-poly text-white font-thin text-3xl lg:text-4xl text-center underline mb-8">
        Things that I enjoy
      </h2>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          delay: 0.5,
        }}
      >
        <div className="flex items-center justify-center gap-4 mt-2 mb-2">
          <p className="font-poly text-white font-thin text-xl lg:text-2xl">
            Software engineering
          </p>
          <p className="font-poly text-comfort-blue font-thin text-xl lg:text-2xl">
            Cooking
          </p>
          <p className="font-poly text-white font-thin text-xl lg:text-2xl">
            Learning
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
        }}
      >
        <div className="flex items-center justify-center gap-4 mt-2 mb-2">
          <p className="font-poly text-comfort-blue font-thin text-xl lg:text-2xl">
            Gaming
          </p>
          <p className="font-poly text-white font-thin text-xl lg:text-2xl">
            Travel
          </p>
          <p className="font-poly text-comfort-blue font-thin text-xl lg:text-2xl">
            DevOps
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
        }}
      >
        <div className="flex items-center justify-center gap-4 mt-2 mb-2">
          <p className="font-poly text-white font-thin text-xl lg:text-2xl">
            Business strategy
          </p>
          <p className="font-poly text-comfort-blue font-thin text-xl lg:text-2xl">
            Gardening
          </p>
          <p className="font-poly text-white font-thin text-xl lg:text-2xl">
            Fencing
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
        }}
      >
        <div className="flex items-center justify-center gap-4 mt-2 mb-2">
          <p className="font-poly text-comfort-blue font-thin text-xl lg:text-2xl">
            Data science
          </p>
          <p className="font-poly text-white font-thin text-xl lg:text-2xl">
            Capital management
          </p>
          <p className="font-poly text-comfort-blue font-thin text-xl lg:text-2xl">
            Skiing
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
        }}
      >
        <div className="flex items-center justify-center gap-4 mt-2 mb-2">
          <p className="font-poly text-white font-thin text-xl lg:text-2xl">
            History
          </p>
          <p className="font-poly text-comfort-blue font-thin text-xl lg:text-2xl">
            Design
          </p>
          <p className="font-poly text-white font-thin text-xl lg:text-2xl">
            Hiking
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Inspirations;
