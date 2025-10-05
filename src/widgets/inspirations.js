import { motion } from 'motion/react';

function Inspirations() {
  return (
    <div className="h-screen flex items-center justify-center flex-col bg-navy">
      <h2 className="font-poly text-white font-thin text-xl md:text-2xl lg:text-3xl mt-0 text-left underline m-4">
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
        <div className="flex items-center justify-center">
          <p className="font-poly text-white font-thin text-lg md:text-xl lg:text-2xl m-2">
            Software engineering
          </p>
          <p className="font-poly text-comfort-blue font-thin text-lg md:text-xl lg:text-2xl m-2">
            Cooking
          </p>
          <p className="font-poly text-white font-thin text-lg md:text-xl lg:text-2xl m-2">
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
        <div className="flex items-center justify-center">
          <p className="font-poly text-comfort-blue font-thin text-lg md:text-xl lg:text-2xl m-2">
            Gaming
          </p>
          <p className="font-poly text-white font-thin text-lg md:text-xl lg:text-2xl m-2">
            Travel
          </p>
          <p className="font-poly text-comfort-blue font-thin text-lg md:text-xl lg:text-2xl m-2">
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
        <div className="flex items-center justify-center">
          <p className="font-poly text-white font-thin text-lg md:text-xl lg:text-2xl m-2">
            Business strategy
          </p>
          <p className="font-poly text-comfort-blue font-thin text-lg md:text-xl lg:text-2xl m-2">
            Gardening
          </p>
          <p className="font-poly text-white font-thin text-lg md:text-xl lg:text-2xl m-2">
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
        <div className="flex items-center justify-center">
          <p className="font-poly text-comfort-blue font-thin text-lg md:text-xl lg:text-2xl m-2">
            Data science
          </p>
          <p className="font-poly text-white font-thin text-lg md:text-xl lg:text-2xl m-2">
            Capital management
          </p>
          <p className="font-poly text-comfort-blue font-thin text-lg md:text-xl lg:text-2xl m-2">
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
        <div className="flex items-center justify-center">
          <p className="font-poly text-white font-thin text-lg md:text-xl lg:text-2xl m-2">
            History
          </p>
          <p className="font-poly text-comfort-blue font-thin text-lg md:text-xl lg:text-2xl m-2">
            Design
          </p>
          <p className="font-poly text-white font-thin text-lg md:text-xl lg:text-2xl m-2">
            Hiking
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Inspirations;
