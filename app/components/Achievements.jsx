import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { achievements } from '@/assets/assets';


export default function TimeLine() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  const x = useMotionValue(0);

  const reversedAchievements = [...achievements].reverse();

  useEffect(() => {
    function updateConstraints() {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = contentRef.current.scrollWidth;

        const maxDrag = contentWidth - containerWidth;

        setConstraints({
          left: 0,
          right: maxDrag > 0 ? maxDrag : 0,
        });

        if (maxDrag > 0) {
          x.set(-maxDrag);
        } else {
          x.set(0);
        }
      }
    }

    updateConstraints();
    window.addEventListener("resize", updateConstraints);

    return () => window.removeEventListener("resize", updateConstraints);
  }, [achievements.length, x]);

  return (
    <section
      id="achievements"
      className="max-w-6xl mx-auto px-6 py-12 scroll-mt-20"
    >
      <h2 className="text-5xl font-ovo mb-12 text-center">My Achievements</h2>

      <div
        ref={containerRef}
        className="overflow-hidden cursor-grab select-none relative"
        style={{ touchAction: "pan-y" }}
      >
        {/* خط افقی */}
        <div className="absolute top-28 left-0 right-0 h-1 bg-sky-400 rounded" />

        <motion.div
          drag="x"
          dragConstraints={{ left: -constraints.right, right: 0 }}
          dragElastic={0.15}
          style={{ x }}
          className="flex items-center gap-20 py-12"
          ref={contentRef}
        >
          {reversedAchievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative flex-shrink-0 w-48 text-center"
            >
              <time className="absolute -top-10 left-1/2 -translate-x-1/2 text-sky-600 font-semibold">
                {item.date}
              </time>

              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 to-cyan-400 shadow-lg flex items-center justify-center text-white text-2xl font-bold z-10">
                {item.icon}
              </div>

              <div className="mt-32 bg-white p-4 shadow-md border-[0.5px] border-gray-400
                        rounded-xl h-[250px]">
                <h3 className="text-lg font-ovo font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700 font-ovo dark:text-gray-500">{item.description1}</p>
                <p className="text-gray-700 font-ovo dark:text-gray-500">{item.description2}</p>
                <p className="text-gray-700 font-ovo dark:text-gray-500">{item.description3}</p>
                <p className="text-gray-700 font-ovo dark:text-gray-500">{item.description4}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
