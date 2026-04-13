import { motion, useInView } from "framer-motion";
import { useRef } from "react";
<<<<<<< HEAD
import { Clock, MapPin, Map } from "lucide-react";
=======
import { Calendar, Clock, MapPin } from "lucide-react";
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf

const events = [
  {
    title: "Akad Nikah",
<<<<<<< HEAD
    day: "25",
    month: "April",
    year: "2026",
    time: "08:00 - 10:00 WIB",
    location: "Masjid Al-Ikhlas",
    address: "Jl. Merdeka No. 10, Jakarta Selatan",
    link: "https://maps.google.com", 
  },
  {
    title: "Resepsi",
    day: "25",
    month: "April",
    year: "2026",
    time: "11:00 - 14:00 WIB",
    location: "Grand Ballroom Hotel Mulia",
    address: "Jl. Senayan No. 8, Jakarta Selatan",
    link: "https://maps.google.com",
=======
    date: "Kamis, 25 Desember 2025",
    time: "08:00 - 10:00 WIB",
    location: "Masjid Al-Ikhlas",
    address: "Jl. Merdeka No. 10, Jakarta Selatan",
  },
  {
    title: "Resepsi",
    date: "Kamis, 25 Desember 2025",
    time: "11:00 - 14:00 WIB",
    location: "Grand Ballroom Hotel Mulia",
    address: "Jl. Senayan No. 8, Jakarta Selatan",
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
  },
];

const EventCard = ({ event, index }: { event: typeof events[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
<<<<<<< HEAD
      className="glass-card-premium rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden group border border-white/5"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#D4AF37]/20 rounded-tr-[2.5rem] group-hover:border-[#D4AF37]/50 transition-colors duration-500" />
      <h3 className="font-serif text-3xl md:text-4xl text-[#D4AF37] mb-10 tracking-wide">{event.title}</h3>

      <div className="flex flex-col items-center gap-10">
        <div className="flex items-center justify-center gap-6 py-6 border-y border-[#D4AF37]/20 w-full max-w-[320px]">
          <div className="text-right">
            <p className="font-sans text-[9px] tracking-[0.3em] text-[#C9A961]/50 uppercase">Hari</p>
            <p className="font-serif text-lg text-white">Sabtu</p>
          </div>
          <div className="h-12 w-[1px] bg-[#D4AF37]/30" />
          <div className="text-center">
            <p className="font-serif text-5xl md:text-6xl text-[#D4AF37] leading-none">{event.day}</p>
            <p className="font-sans text-[10px] tracking-[0.3em] text-white/60 uppercase mt-2">{event.month}</p>
          </div>
          <div className="h-12 w-[1px] bg-[#D4AF37]/30" />
          <div className="text-left">
            <p className="font-sans text-[9px] tracking-[0.3em] text-[#C9A961]/50 uppercase">Tahun</p>
            <p className="font-serif text-lg text-white">{event.year}</p>
          </div>
        </div>

        <div className="space-y-8 w-full">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-[#C9A961]">
              <Clock className="w-4 h-4" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Waktu</span>
            </div>
            <p className="text-[17px] md:text-xl text-white/90 font-light">{event.time}</p>
          </div>
          <div className="flex flex-col items-center gap-3 px-4">
            <div className="flex items-center gap-2 text-[#C9A961]">
              <MapPin className="w-4 h-4" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Lokasi</span>
            </div>
            <p className="text-[18px] md:text-2xl text-white font-serif mb-1">{event.location}</p>
            <p className="text-sm text-white/40 leading-relaxed max-w-[280px] mx-auto italic font-light">{event.address}</p>
          </div>
        </div>

        <motion.a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-3 px-10 py-4 bg-transparent border border-[#C9A961]/30 rounded-full text-[#C9A961] text-[10px] tracking-[0.3em] uppercase hover:bg-[#C9A961] hover:text-black transition-all duration-500 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Map className="w-4 h-4" />
          Petunjuk Lokasi
        </motion.a>
=======
      className="glass-card-premium rounded-2xl p-8 md:p-10 text-center border-gradient-gold"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <h3 className="font-serif text-2xl md:text-3xl text-primary mb-8">{event.title}</h3>

      <div className="space-y-5">
        <div className="flex items-center justify-center gap-3 text-foreground/60">
          <Calendar className="w-4 h-4 text-primary/70 flex-shrink-0" />
          <span className="font-sans text-sm">{event.date}</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-foreground/60">
          <Clock className="w-4 h-4 text-primary/70 flex-shrink-0" />
          <span className="font-sans text-sm">{event.time}</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-foreground/60">
          <MapPin className="w-4 h-4 text-primary/70 flex-shrink-0" />
          <div>
            <p className="font-sans text-sm font-medium">{event.location}</p>
            <p className="font-sans text-xs text-foreground/40 mt-0.5">{event.address}</p>
          </div>
        </div>
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
      </div>
    </motion.div>
  );
};

const EventDetails = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
<<<<<<< HEAD
    <section id="event" className="relative py-24 md:py-32 px-6 bg-[#121212] overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-[#C9A961]/50 mb-4">Save the Date</p>
          <h2 className="font-serif text-4xl md:text-6xl text-gradient-gold-strong">Wedding Events</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
=======
    <section id="event" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/30 mb-4">
            Save the Date
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold">
            Wedding Events
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
          {events.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default EventDetails;
=======
export default EventDetails;
>>>>>>> 38fe2865c1ab42f3c76eb91a398eb4e9b141fdaf
