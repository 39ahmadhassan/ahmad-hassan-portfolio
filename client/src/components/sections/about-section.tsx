import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Database, Cloud } from "lucide-react";

export function AboutSection() {
  const expertise = [
    { icon: Code, label: "Frontend Development" },
    { icon: Server, label: "Backend Development" },
    { icon: Database, label: "Database Design" },
    { icon: Cloud, label: "Cloud Deployment" },
  ];

  const timeline = [
    { role: "Senior Full Stack Developer", period: "2022 - Present", color: "bg-primary" },
    { role: "Frontend Developer", period: "2021 - 2022", color: "bg-accent" },
    { role: "Junior Developer", period: "2021 - 2021", color: "bg-gray-400" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and bringing ideas to life through code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern developer workspace" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Building digital experiences that matter
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With 3+ years of experience in full-stack development, I specialize in creating robust, 
              scalable web applications using modern technologies. My journey began with a curiosity for 
              problem-solving and has evolved into a passion for crafting exceptional digital experiences.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Key Expertise</h4>
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <item.icon className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="timeline">
              <h4 className="text-lg font-semibold text-foreground mb-4">Experience Timeline</h4>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.role}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className={`w-4 h-4 ${item.color} rounded-full mr-4 mt-1`}></div>
                    <div>
                      <h5 className="font-semibold text-foreground">{item.role}</h5>
                      <p className="text-sm text-muted-foreground">{item.period}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
