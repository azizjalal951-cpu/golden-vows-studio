import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/wedding/LoadingScreen";
import HeroSection from "@/components/wedding/HeroSection";
import CoupleSection from "@/components/wedding/CoupleSection";
import EventDetails from "@/components/wedding/EventDetails";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import Gallery from "@/components/wedding/Gallery";
import LoveStory from "@/components/wedding/LoveStory";
import LocationSection from "@/components/wedding/LocationSection";
import RSVPForm from "@/components/wedding/RSVPForm";
import WishesSection, { type Wish } from "@/components/wedding/WishesSection";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import FloatingNav from "@/components/wedding/FloatingNav";
import ornament from "@/assets/ornament.png";

const Index = () => {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to") || undefined;
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "auto";
  };

  const handleWishAdded = (wish: Wish) => {
    setWishes((prev) => [wish, ...prev]);
  };

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="min-h-screen bg-background">
      <LoadingScreen isVisible={loading} />

      {!loading && (
        <>
          <AnimatePresence>
            {!isOpen && <HeroSection guestName={guestName} onOpen={handleOpen} />}
          </AnimatePresence>

          {isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
              <CoupleSection />

              <div className="flex justify-center">
                <img src={ornament} alt="" className="w-20 opacity-20" loading="lazy" />
              </div>

              <EventDetails />
              <CountdownTimer />

              <div className="flex justify-center">
                <img src={ornament} alt="" className="w-20 opacity-20" loading="lazy" />
              </div>

              <Gallery />
              <LoveStory />
              <LocationSection />

              <div className="flex justify-center">
                <img src={ornament} alt="" className="w-20 opacity-20" loading="lazy" />
              </div>

              <RSVPForm onWishAdded={handleWishAdded} />
              <WishesSection wishes={wishes} />

              {/* Footer */}
              <footer className="text-center py-12 px-6">
                <p className="font-serif text-2xl text-gradient-gold mb-2">Ahmad & Aisyah</p>
                <p className="font-sans text-xs tracking-[0.2em] text-foreground/30">
                  Thank you for being part of our special day
                </p>
                <p className="font-sans text-[10px] text-foreground/20 mt-4">
                  Made with ❤️
                </p>
              </footer>
            </motion.div>
          )}

          <MusicPlayer isOpen={isOpen} />
          <FloatingNav isOpen={isOpen} />
        </>
      )}
    </div>
  );
};

export default Index;
