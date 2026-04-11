import { motion } from "framer-motion";
import { Heart, Calendar, Image, MapPin, Mail, MessageCircle } from "lucide-react";

const navItems = [
  { icon: Heart, href: "#couple", label: "Couple" },
  { icon: Calendar, href: "#event", label: "Event" },
  { icon: Image, href: "#gallery", label: "Gallery" },
  { icon: MapPin, href: "#location", label: "Location" },
  { icon: Mail, href: "#rsvp", label: "RSVP" },
  { icon: MessageCircle, href: "#wishes", label: "Wishes" },
];

const FloatingNav = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null;

  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 glass-card-premium rounded-full px-3 py-2 flex gap-0.5"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
    >
      {navItems.map(({ icon: Icon, href, label }) => (
        <a
          key={href}
          href={href}
          className="p-2.5 rounded-full text-foreground/40 hover:text-primary hover:bg-primary/10 transition-all duration-300"
          title={label}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </motion.nav>
  );
};

export default FloatingNav;
