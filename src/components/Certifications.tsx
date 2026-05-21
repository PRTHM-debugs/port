import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'TCS iON Career Edge – Young Professional',
    issuer: 'TCS iON',
    year: '2025',
    category: 'Professional Development',
  },
  {
    title: 'GenAI Powered Data Analytics',
    issuer: 'Forage',
    year: '2025',
    category: 'AI & Analytics',
  },
  {
    title: 'Python Fullstack with Cloud Computing',
    issuer: 'Softmusk Info Pvt. Ltd.',
    year: '2024',
    category: 'Development',
  },
  {
    title: 'Java Certification',
    issuer: 'Intellipaat',
    year: '2024',
    category: 'Programming',
  },
  {
    title: 'Python Certification',
    issuer: 'Intellipaat',
    year: '2024',
    category: 'Programming',
  },
  {
    title: 'OCI Generative AI Professional',
    issuer: 'Oracle',
    year: '2024',
    category: 'Cloud & AI',
  },
  {
    title: 'Digital Marketing Certification',
    issuer: 'HubSpot',
    year: '2024',
    category: 'Marketing',
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding bg-secondary/20 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="floating-shape w-80 h-80 top-20 -left-40 opacity-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="accent-line mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my skills and commitment to continuous learning
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="cert-card group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-primary font-medium">{cert.category}</span>
                  <h3 className="font-semibold mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{cert.issuer}</span>
                    <span className="text-muted-foreground">{cert.year}</span>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-1 mt-3 pt-3 border-t border-border/50">
                <CheckCircle className="w-3 h-3 text-primary" />
                <span className="text-xs text-muted-foreground">Verified Certificate</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 md:p-8 bg-card border border-border rounded-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gradient mb-1">7+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Platforms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-1">4+</div>
              <div className="text-sm text-muted-foreground">Tech Areas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-1">2025</div>
              <div className="text-sm text-muted-foreground">Latest Cert</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
