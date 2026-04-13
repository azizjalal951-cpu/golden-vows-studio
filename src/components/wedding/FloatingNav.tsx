import { motion } from "framer-motion";
import { Heart, Calendar, Image, MapPin, Mail, MessageCircle } from "lucide-react";

const navItems = [
  { icon: Heart, href: "#couple", label: "Couple", color: "#D4AF37" },
  { icon: Calendar, href: "#event", label: "Event", color: "#D4AF37" },
  { icon: Image, href: "#gallery", label: "Gallery", color: "#D4AF37" },
  { icon: MapPin, href: "#location", label: "Location", color: "#D4AF37" },
  { icon: Mail, href: "#rsvp", label: "RSVP", color: "#D4AF37" },
  { icon: MessageCircle, href: "#wishes", label: "Wishes", color: "#D4AF37" },
];

const FloatingNav = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null;

  return (
    <motion.nav
      className="fixed left-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 p-1.5 rounded-full border border-white/10 backdrop-blur-md bg-black/40 shadow-xl"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      {navItems.map(({ icon: Icon, href, label, color }) => (
        <motion.a
          key={href}
          href={href}
          className="group relative p-2 rounded-full hover:bg-white/10 transition-all flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon className="w-4 h-4" style={{ color: color }} />
          
          {/* Tooltip Label */}
          <span className="absolute left-12 bg-[#1A1A1A] border border-white/10 text-[#D4AF37] text-[10px] px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 shadow-lg">
            {label}
          </span>
        </motion.a>
      ))}
    </motion.nav>
  );
};

export default FloatingNav;