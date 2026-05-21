import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Globe, Database, Cloud, Brain, Users, Camera, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['C', 'C++', 'Java', 'Python', 'PHP', 'JavaScript'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'React'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['SQL', 'MySQL', 'PostgreSQL'],
    color: 'from-purple-500 to-violet-500',
  },
  {
    title: 'Technologies',
    icon: Cloud,
    skills: ['Cloud Computing', 'Internet of Things (IoT)', 'REST APIs'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Data & AI',
    icon: Brain,
    skills: ['Exploratory Data Analysis', 'GenAI Analytics', 'AI/ML Concepts'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Communication', 'Problem Solving', 'Team Collaboration', 'Business Etiquette'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Creative',
    icon: Camera,
    skills: ['Video Editing', 'Photography', 'Content Creation'],
    color: 'from-indigo-500 to-purple-500',
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="floating-shape w-80 h-80 top-20 right-0 opacity-10" />
      <div className="floating-shape w-64 h-64 bottom-0 left-20 opacity-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="accent-line mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technical and soft skills developed through education and hands-on experience
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 bg-card border border-border rounded-2xl card-hover"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10`}>
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Featured Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: skillCategories.length * 0.1 }}
            className="md:col-span-2 lg:col-span-3 xl:col-span-4 p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Core Strengths</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Python Fullstack', 'Cloud Deployment', 'IoT Solutions', 'GenAI Analytics', 'Web Development', 'Data Analysis'].map((strength) => (
                <span
                  key={strength}
                  className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium"
                >
                  {strength}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
