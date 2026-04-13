import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
<<<<<<< HEAD

// Components
=======
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
import LoadingScreen from "@/components/wedding/LoadingScreen";
import HeroSection from "@/components/wedding/HeroSection";
import CoupleSection from "@/components/wedding/CoupleSection";
import EventDetails from "@/components/wedding/EventDetails";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import Gallery from "@/components/wedding/Gallery";
import LoveStory from "@/components/wedding/LoveStory";
import LocationSection from "@/components/wedding/LocationSection";
import RSVPForm from "@/components/wedding/RSVPForm";
<<<<<<< HEAD
import WeddingGift from "@/components/wedding/weddinggift"; 
import WishesSection, { type Wish } from "@/components/wedding/WishesSection";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import FloatingNav from "@/components/wedding/FloatingNav";

// Assets
import ornament from "@/assets/ornament.png";

const SectionDivider = () => (
  <div className="flex justify-center py-12">
    <img src={ornament} alt="" className="w-20 opacity-20 select-none pointer-events-none" loading="lazy" />
=======
import WishesSection, { type Wish } from "@/components/wedding/WishesSection";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import FloatingNav from "@/components/wedding/FloatingNav";
import ornament from "@/assets/ornament.png";

const SectionDivider = () => (
  <div className="flex justify-center py-4">
    <img src={ornament} alt="" className="w-16 opacity-15" loading="lazy" />
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
  </div>
);

const Index = () => {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to") || undefined;
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>([]);

<<<<<<< HEAD
  // Simulation loading state
=======
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
<<<<<<< HEAD
    // Smooth scroll enabling
=======
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
    document.body.style.overflow = "auto";
  };

  const handleWishAdded = (wish: Wish) => {
    setWishes((prev) => [wish, ...prev]);
  };

<<<<<<< HEAD
  // Lock scroll on lander
=======
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-[#121212] selection:bg-[#D4AF37]/30 overflow-x-hidden">
=======
    <div className="min-h-screen bg-background overflow-x-hidden">
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
      <LoadingScreen isVisible={loading} />

      {!loading && (
        <>
<<<<<<< HEAD
          {/* Welcome Screen / Cover */}
          <AnimatePresence>
            {!isOpen && (
              <HeroSection guestName={guestName} onOpen={handleOpen} />
            )}
          </AnimatePresence>

          {/* Main Invitation Content */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <CoupleSection />
              
              <SectionDivider />
              <EventDetails />
              
              <CountdownTimer />
              
              <SectionDivider />
              <Gallery />
              
              <LoveStory />
              
              <SectionDivider />
              <LocationSection />
              
              {/* Partisi RSVP: Interaksi Tamu */}
              <SectionDivider />
              <RSVPForm onWishAdded={handleWishAdded} />
              
              {/* Partisi Wedding Gift: Tanda Kasih */}
              <SectionDivider />
              <WeddingGift />
              
              <SectionDivider />
              <WishesSection wishes={wishes} />

              {/* Footer Section - Audit #10: Sopan & Berkesan */}
              <footer className="relative py-24 px-6 bg-gradient-to-t from-black/50 to-transparent text-center">
                <div className="max-w-md mx-auto space-y-6">
                  <p className="font-serif text-3xl md:text-4xl text-gradient-gold-strong">
                    Ahmad & Aisyah
                  </p>
                  <p className="font-sans text-xs tracking-[0.3em] text-white/40 leading-relaxed uppercase">
                    Kami yang berbahagia, <br /> beserta keluarga besar.
                  </p>
                  
                  <div className="pt-12 border-t border-white/5">
                    <p className="font-sans text-[10px] tracking-[0.2em] text-[#C9A961]/30">
                      DESIGNED BY AZIZPROJECT &copy; 2026
                    </p>
                  </div>
                </div>
=======
          <AnimatePresence>
            {!isOpen && <HeroSection guestName={guestName} onOpen={handleOpen} />}
          </AnimatePresence>

          {isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <CoupleSection />
              <SectionDivider />
              <EventDetails />
              <CountdownTimer />
              <SectionDivider />
              <Gallery />
              <LoveStory />
              <LocationSection />
              <SectionDivider />
              <RSVPForm onWishAdded={handleWishAdded} />
              <WishesSection wishes={wishes} />

              <footer className="text-center py-16 px-6">
                <p className="font-serif text-2xl text-gradient-gold mb-3">Ahmad & Aisyah</p>
                <p className="font-sans text-xs tracking-[0.2em] text-foreground/25">
                  Thank you for being part of our special day
                </p>
                <p className="font-sans text-[10px] text-foreground/15 mt-6">
                  Made with ❤️
                </p>
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
              </footer>
            </motion.div>
          )}

<<<<<<< HEAD
          {/* Global UI Elements */}
=======
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
          <MusicPlayer isOpen={isOpen} />
          <FloatingNav isOpen={isOpen} />
        </>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default Index;
=======
export default Index;
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
