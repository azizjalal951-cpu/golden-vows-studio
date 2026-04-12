import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, MapPin, Map } from "lucide-react";

const events = [
  {
    title: "Akad Nikah",
    date: "Kamis, 25 Desember 2026",
    day: "25",
    month: "DESEMBER",
    year: "2026",
    time: "08:00 - 10:00 WIB",
    location: "Masjid Al-Ikhlas",
    address: "Jl. Merdeka No. 10, Jakarta Selatan",
    link: "https://maps.google.com",
  },
  {
    title: "Resepsi",
    date: "Kamis, 25 Desember 2026",
    day: "25",
    month: "DESEMBER",
    year: "2026",
    time: "11:00 - 14:00 WIB",
    location: "Grand Ballroom Hotel Mulia",
    address: "Jl. Senayan No. 8, Jakarta Selatan",
    link: "https://maps.google.com",
  },
];

const EventCard = ({ event, index }: { event: typeof events[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="glass-card-premium rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Dekorasi Sudut */}
      <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#D4AF37]/20 rounded-tr-3xl group-hover:border-[#D4AF37]/50 transition-colors duration-500" />
      
      {/* Audit #14: Elegant Date Presentation */}
      <h3 className="font-serif text-3xl md:text-4xl text-[#D4AF37] mb-8 tracking-wide">
        {event.title}
      </h3>

      <div className="flex flex-col items-center gap-8">
        {/* Date Display Box */}
        <div className="flex items-center justify-center gap-4 py-4 border-y border-[#D4AF37]/20 w-full">
          <div className="text-right">
            <p className="font-sans text-[10px] tracking-[0.2em] text-[#C9A961]/60">HARI</p>
            <p className="font-serif text-lg text-white">Kamis</p>
          </div>
          <div className="h-10 w-[1px] bg-[#D4AF37]/30" />
          <div className="text-center">
            <p className="font-serif text-4xl md:text-5xl font-light text-white leading-none">{event.day}</p>
            <p className="font-sans text-[10px] tracking-[0.2em] text-[#C9A961] mt-1">{event.month}</p>
          </div>
          <div className="h-10 w-[1px] bg-[#D4AF37]/30" />
          <div className="text-left">
            <p className="font-sans text-[10px] tracking-[0.2em] text-[#C9A961]/60">TAHUN</p>
            <p className="font-serif text-lg text-white">{event.year}</p>
          </div>
        </div>

        {/* Audit #3: Mobile text minimum 16px */}
        <div className="space-y-6 w-full">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-[#C9A961]">
              <Clock className="w-4 h-4" />
              <span className="font-sans text-xs tracking-[0.2em] uppercase">Pukul</span>
            </div>
            <p className="text-[17px] md:text-lg text-white/80">{event.time}</p>
          </div>

          <div className="flex flex-col items-center gap-2 px-4">
            <div className="flex items-center gap-2 text-[#C9A961]">
              <MapPin className="w-4 h-4" />
              <span className="font-sans text-xs tracking-[0.2em] uppercase">Lokasi</span>
            </div>
            <p className="text-[17px] md:text-lg text-white font-serif">{event.location}</p>
            <p className="text-sm text-white/40 leading-relaxed max-w-[250px] mx-auto italic">
              {event.address}
            </p>
          </div>
        </div>

        {/* Audit #7: Button Enhancement */}
        <motion.a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-3 px-8 py-3 bg-transparent border border-[#C9A961]/30 rounded-full text-[#C9A961] text-xs tracking-[0.2em] uppercase hover:bg-[#C9A961] hover:text-black transition-all duration-500 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Map className="w-4 h-4 transition-transform group-hover:rotate-12" />
          Buka Peta
        </motion.a>
      </div>
    </motion.div>
  );
};

const EventDetails = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="event" className="relative py-24 md:py-32 px-6 bg-[#121212] overflow-hidden" ref={ref}>
      {/* Audit #4: Romantic Atmosphere (Background Bokeh) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-[#C9A961]/50 mb-4">
            Save the Date
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-gradient-gold-strong">
            Wedding Events
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;