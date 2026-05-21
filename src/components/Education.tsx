import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    degree: 'B.E. in Computer Engineering',
    institution: 'ISBM College of Engineering, Pune',
    university: 'Savitribai Phule Pune University',
    period: '2025 – Present',
    status: 'Pursuing',
    highlight: true,
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'MSBTE',
    period: '2022 – 2025',
    score: '85.86%',
    highlight: false,
  },
  {
    degree: 'SSC (10th Grade)',
    institution: 'CBSE Board',
    period: '2022',
    score: '78%',
    highlight: false,
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-secondary/20 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="floating-shape w-96 h-96 -bottom-48 -left-48 opacity-10" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="accent-line mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic journey that laid the foundation for my technical expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" 
                  style={{ boxShadow: '0 0 20px hsl(32, 100%, 50%, 0.4)' }}
                />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-2xl border transition-all duration-300 ${
                      edu.highlight 
                        ? 'bg-card border-primary/50 shadow-lg' 
                        : 'bg-card border-border hover:border-primary/30'
                    }`}
                    style={edu.highlight ? { boxShadow: '0 0 30px -10px hsl(32, 100%, 50%, 0.3)' } : {}}
                  >
                    {edu.status && (
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                        {edu.status}
                      </span>
                    )}

                    <div className={`flex items-start gap-3 mb-3 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}>
                      <div className={`p-2 bg-primary/10 rounded-lg ${
                        index % 2 === 0 ? 'md:ml-auto' : ''
                      }`}>
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div className={index % 2 === 0 ? 'md:mr-auto' : ''}>
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        {edu.university && (
                          <p className="text-sm text-muted-foreground">{edu.university}</p>
                        )}
                      </div>
                    </div>

                    <div className={`flex items-center gap-4 text-sm ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      {edu.score && (
                        <div className="flex items-center gap-1 text-primary font-semibold">
                          <Award className="w-4 h-4" />
                          {edu.score}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
