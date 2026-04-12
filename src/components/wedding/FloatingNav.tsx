import { motion } from "framer-motion";
import { Heart, Calendar, Image, MapPin, Mail, MessageCircle } from "lucide-react";

const navItems = [
  { icon: Heart, href: "#couple", label: "Couple", color: "#F472B6" },
  { icon: Calendar, href: "#event", label: "Event", color: "#60A5FA" },
  { icon: Image, href: "#gallery", label: "Gallery", color: "#34D399" },
  { icon: MapPin, href: "#location", label: "Location", color: "#FBBF24" },
  { icon: Mail, href: "#rsvp", label: "RSVP", color: "#A78BFA" },
  { icon: MessageCircle, href: "#wishes", label: "Wishes", color: "#2DD4BF" },
];

const FloatingNav = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null;

  return (
    <motion.nav
      // left-2 (lebih mepet kiri), bg-black/20 (lebih transparan)
      className="fixed left-2 top-[60%] -translate-y-1/2 z-50 flex flex-col gap-1 p-1 rounded-full border border-white/5 backdrop-blur-md bg-black/20 shadow-none"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {navItems.map(({ icon: Icon, href, label, color }) => (
        <motion.a
          key={href}
          href={href}
          // Padding p-1.5 agar lebih ramping
          className="group relative p-1.5 rounded-full hover:bg-white/10 transition-all flex items-center justify-center"
          whileTap={{ scale: 0.9 }}
        >
          <Icon className="w-3.5 h-3.5" style={{ color: color }} />
          
          {/* Label Tooltip - Muncul ke arah kanan */}
          <span className="absolute left-10 bg-black/60 backdrop-blur-md text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none uppercase tracking-widest whitespace-nowrap">
            {label}
          </span>
        </motion.a>
      ))}
    </motion.nav>
  );
};

export default FloatingNav;