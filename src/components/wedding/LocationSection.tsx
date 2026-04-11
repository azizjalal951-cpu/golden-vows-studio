import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ExternalLink } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid";

  return (
    <section id="location" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/40 mb-3">
            Find Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold">Location</h2>
        </motion.div>

        <motion.div
          className="glass-card rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <iframe
            src={mapUrl}
            className="w-full h-64 md:h-80 border-0 opacity-80"
            allowFullScreen
            loading="lazy"
            title="Wedding location"
          />
          <div className="p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-serif text-xl text-primary">Grand Ballroom Hotel Mulia</h3>
            </div>
            <p className="font-sans text-sm text-foreground/60 mb-6">
              Jl. Senayan No. 8, Jakarta Selatan, DKI Jakarta
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-outline inline-flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View Location
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
