import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
<<<<<<< HEAD
import { X, Maximize2 } from "lucide-react";

// Import images
=======
import { X } from "lucide-react";
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

<<<<<<< HEAD
const images = [
  // Audit #8: Mengatur span agar layout bervariasi (Masonry Effect)
  { src: gallery1, size: "col-span-2 row-span-2" }, // Foto Utama (Besar)
  { src: gallery2, size: "col-span-1 row-span-1" },
  { src: gallery3, size: "col-span-1 row-span-2" }, // Potrait (Memanjang)
  { src: gallery4, size: "col-span-1 row-span-1" },
  { src: gallery5, size: "col-span-2 row-span-1" }, // Landscape (Melebar)
  { src: gallery6, size: "col-span-1 row-span-1" },
];

const Gallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-24 md:py-32 px-6 bg-[#121212] overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-[#C9A961]/50 mb-4">
            Our Moments
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-gradient-gold-strong">
            Gallery
          </h2>
        </motion.div>

        {/* Audit #8 & #16: 
            grid-cols-2 (mobile), grid-cols-4 (desktop)
            auto-rows: mengunci tinggi baris agar bento grid terbentuk sempurna
        */}
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
              {/* Image Treatment - Subtle Warm Filter */}
              <img
                src={img.src}
                alt={`Wedding Moment ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 sepia-[10%] brightness-[95%] group-hover:brightness-100"
                loading="lazy"
              />
              
              {/* Elegant Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                 <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="p-3 rounded-full bg-white/10 border border-white/20"
                 >
                    <Maximize2 className="w-5 h-5 text-white" />
                 </motion.div>
              </div>

              {/* Gold Border Glow on Hover */}
              <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 rounded-2xl transition-all duration-500 pointer-events-none" />
=======
const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/30 mb-4">
            Our Moments
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold">Gallery</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelected(img)}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-xl transition-colors duration-500" />
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
            </motion.div>
          ))}
        </div>
      </div>

<<<<<<< HEAD
      {/* Lightbox Premium */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f0f0f]/95 backdrop-blur-xl p-4 md:p-12"
=======
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-6"
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
<<<<<<< HEAD
            <motion.button
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-[#D4AF37] transition-colors"
              whileHover={{ rotate: 90, scale: 1.1 }}
              onClick={() => setSelected(null)}
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </motion.button>
            
            <motion.img
              src={selected}
              alt="Gallery preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
=======
            <button
              className="absolute top-6 right-6 text-foreground/40 hover:text-primary transition-colors z-10"
              onClick={() => setSelected(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              src={selected}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

<<<<<<< HEAD
export default Gallery;
=======
export default Gallery;
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
