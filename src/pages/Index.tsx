import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Components
import LoadingScreen from "@/components/wedding/LoadingScreen";
import HeroSection from "@/components/wedding/HeroSection";
import CoupleSection from "@/components/wedding/CoupleSection";
import LoveStory from "@/components/wedding/LoveStory";
import CountdownTimer from "@/components/wedding/CountdownTimer"; // Tambahkan ini
import EventSection from "@/components/wedding/EventDetails";
import Gallery from "@/components/wedding/Gallery"; 
import LocationSection from "@/components/wedding/LocationSection";
import WeddingGift from "@/components/wedding/WeddingGift"; 
import RSVPForm from "@/components/wedding/RSVPForm";
import WishesSection, { type Wish } from "@/components/wedding/WishesSection";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import FloatingNav from "@/components/wedding/FloatingNav";
import ornament from "@/assets/ornament.png";

const Index = () => {
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [wishes, setWishes] = useState<Wish[]>([]);

  const guestName = searchParams.get("to") || undefined;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    window.scrollTo(0, 0);
  };

  const handleAddWish = (newWish: Wish) => {
    setWishes((prev) => [newWish, ...prev]);
  };

  if (isLoading) return <LoadingScreen isVisible={isLoading} />;

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      <AnimatePresence>
        {!isOpen ? (
          <HeroSection 
            key="hero"
            guestName={guestName} 
            onOpen={handleOpenInvitation} 
          />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <CoupleSection />
            <LoveStory />
            
            {/* COUNTDOWN DIMUNCULKAN DI SINI */}
            <CountdownTimer />

            <EventSection />
            
            <div className="flex justify-center py-12">
              <img 
                src={ornament} 
                alt="ornament" 
                className="w-20 opacity-20 select-none pointer-events-none" 
              />
            </div>

            {/* GALLERY DIMUNCULKAN DI SINI */}
            <Gallery />

            <LocationSection />
            <WeddingGift />
            <RSVPForm onWishSubmitted={handleAddWish} />
            <WishesSection wishes={wishes} />
            
            <footer className="py-12 text-center border-t border-white/5 bg-[#0a0a0a]">
              <p className="font-serif text-[#D4AF37] text-lg mb-2">Ahmad & Aisyah</p>
              <p className="font-sans text-[10px] tracking-widest text-white/30 uppercase">
                Created by AzizProject
              </p>
            </footer>

            <FloatingNav isOpen={isOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      <MusicPlayer isOpen={isOpen} />
    </main>
  );
};

export default Index;