import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Intern – Python Fullstack with Cloud Computing',
    company: 'Softmusk Info Pvt. Ltd.',
    period: '2024',
    type: 'Internship',
    highlights: [
      'Worked on fullstack development and cloud deployment projects',
      'Gained hands-on experience with Python, web development, and databases',
      'Collaborated with team on real-world software solutions',
      'Learned cloud infrastructure and deployment practices',
    ],
  },
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    company: 'Forage (Virtual Experience)',
    period: '2025',
    type: 'Virtual Internship',
    highlights: [
      'Performed exploratory data analysis and risk profiling',
      'Applied AI models to predict delinquency and improve collection strategies',
      'Created business reports and data storytelling outputs',
      'Developed insights for data-driven decision making',
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/20 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="floating-shape w-96 h-96 -top-48 -right-48 opacity-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="accent-line mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experiences that have shaped my skills and expertise
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative p-6 md:p-8 bg-card border border-border rounded-2xl card-hover overflow-hidden">
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/30" />

                <div className="pl-4 md:pl-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                        {exp.type}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="grid md:grid-cols-2 gap-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <motion.div
                        key={hIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 + hIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
