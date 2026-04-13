import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, Maximize2 } from "lucide-react";

// Import images
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, size: "col-span-2 row-span-2" },
  { src: gallery2, size: "col-span-1 row-span-1" },
  { src: gallery3, size: "col-span-1 row-span-2" },
  { src: gallery4, size: "col-span-1 row-span-1" },
  { src: gallery5, size: "col-span-2 row-span-1" },
  { src: gallery6, size: "col-span-1 row-span-1" },
];

const Gallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-24 px-6 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-[#D4AF37]/60 mb-4">
            Our Moments
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#D4AF37]">
            Gallery
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 auto-rows-[160px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-2xl ${img.size}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              onClick={() => setSelected(img.src)}
            >
              <img
                src={img.src}
                alt={`Wedding Moment ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 brightness-[90%] group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="p-3 rounded-full bg-white/10 border border-white/20">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white/70 hover:text-[#D4AF37]"
              onClick={() => setSelected(null)}
            >
              <X className="w-10 h-10" />
            </motion.button>
            <motion.img
              src={selected}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;