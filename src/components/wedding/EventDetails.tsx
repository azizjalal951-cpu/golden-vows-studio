import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "Akad Nikah",
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
  },
];

const EventCard = ({ event, index }: { event: typeof events[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-xl p-8 md:p-10 text-center border-gradient-gold"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <h3 className="font-serif text-2xl md:text-3xl text-primary mb-6">{event.title}</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-center gap-3 text-foreground/70">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="font-sans text-sm">{event.date}</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-foreground/70">
          <Clock className="w-4 h-4 text-primary" />
          <span className="font-sans text-sm">{event.time}</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-foreground/70">
          <MapPin className="w-4 h-4 text-primary" />
          <div>
            <p className="font-sans text-sm font-medium">{event.location}</p>
            <p className="font-sans text-xs text-foreground/50">{event.address}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EventDetails = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="event" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/40 mb-3">
            Save the Date
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold">
            Wedding Events
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {events.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
