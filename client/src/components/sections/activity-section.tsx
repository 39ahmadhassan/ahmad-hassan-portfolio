import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, FileText, Mic, ExternalLink, Calendar } from "lucide-react";

export function ActivitySection() {
  const activities = [
    {
      title: "GitHub Activity",
      icon: Github,
      iconColor: "text-foreground",
      stats: [
        { label: "Repositories", value: "45+" },
        { label: "Contributions", value: "1,200+" },
        { label: "Stars Earned", value: "150+" },
      ],
      link: { text: "View Profile", icon: Github },
    },
    {
      title: "Blog Writing",
      icon: FileText,
      iconColor: "text-accent",
      stats: [
        { label: "Articles Published", value: "25+" },
        { label: "Total Views", value: "10K+" },
        { label: "Followers", value: "500+" },
      ],
      link: { text: "Read Articles", icon: ExternalLink },
    },
    {
      title: "Speaking Events",
      icon: Mic,
      iconColor: "text-purple-600",
      stats: [
        { label: "Tech Talks", value: "8" },
        { label: "Workshops", value: "5" },
        { label: "Conferences", value: "3" },
      ],
      link: { text: "View Events", icon: Calendar },
    },
  ];

  return (
    <section id="activity" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Recent Activity</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with my latest contributions and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <activity.icon className={`h-8 w-8 ${activity.iconColor} mr-4`} />
                    <h3 className="text-xl font-semibold text-foreground">{activity.title}</h3>
                  </div>
                  <div className="space-y-4 mb-6">
                    {activity.stats.map((stat) => (
                      <div key={stat.label} className="flex justify-between">
                        <span className="text-muted-foreground">{stat.label}</span>
                        <span className="font-semibold text-foreground">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    <activity.link.icon className="h-4 w-4 mr-2" />
                    {activity.link.text}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
