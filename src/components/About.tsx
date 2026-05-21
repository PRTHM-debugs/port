import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Globe, Target, Briefcase } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: 'Projects Completed', value: '5+' },
    { label: 'Certifications', value: '7+' },
    { label: 'Technologies', value: '15+' },
  ];

  const details = [
    { icon: MapPin, label: 'Location', value: 'Ichalkaranji, Kolhapur, Maharashtra' },
    { icon: Globe, label: 'Languages', value: 'Marathi, Hindi, English, Sanskrit' },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="floating-shape w-80 h-80 top-0 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl" />
              
              {/* Stats Cards */}
              <div className="relative p-8 md:p-12 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="text-sm text-primary font-semibold tracking-wider uppercase"
                >
                  Hello
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold"
                >
                  I'm <span className="text-gradient">Pratham Buran</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground text-lg leading-relaxed"
                >
                  Passionate Computer Engineering student dedicated to crafting exceptional digital 
                  experiences. With a keen eye for detail and a user-centric approach, I transform 
                  ideas into intuitive and visually stunning solutions using web technologies, 
                  cloud computing, and AI-powered analytics.
                </motion.p>

                {/* Stats Row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-3 gap-4 pt-6"
                >
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Career Objective */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="p-6 bg-card border border-border rounded-2xl card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Career Objective</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seeking opportunities to apply my technical skills in fullstack development, 
                    cloud deployment, and data analytics while continuously learning and growing 
                    professionally in a dynamic environment.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Currently */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="p-6 bg-card border border-border rounded-2xl card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Currently</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pursuing B.E. in Computer Engineering at ISBM College of Engineering (SPPU), 
                    while building projects with IoT, Python fullstack, and GenAI technologies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Personal Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid gap-4"
            >
              {details.map((detail, index) => (
                <div
                  key={detail.label}
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl"
                >
                  <detail.icon className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">
                      {detail.label}
                    </div>
                    <div className="font-medium">{detail.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
