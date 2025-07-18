import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function BlogSection() {
  const articles = [
    {
      title: "Building Scalable React Applications",
      category: "React",
      date: "Dec 15, 2023",
      excerpt: "Learn the best practices for creating maintainable and scalable React applications that can grow with your business needs.",
      categoryColor: "bg-primary",
    },
    {
      title: "Optimizing Node.js Performance",
      category: "Node.js",
      date: "Dec 10, 2023",
      excerpt: "Discover advanced techniques for optimizing Node.js applications for better performance and scalability.",
      categoryColor: "bg-accent",
    },
    {
      title: "The Future of Web Development",
      category: "Web Dev",
      date: "Dec 5, 2023",
      excerpt: "Exploring emerging trends and technologies that will shape the future of web development in 2024 and beyond.",
      categoryColor: "bg-purple-600",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest Articles</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing insights and experiences from the world of web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className={`${article.categoryColor} text-white px-3 py-1 rounded-full text-sm`}>
                      {article.category}
                    </span>
                    <span className="text-muted-foreground ml-4 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors">
                    <span className="mr-2">Read More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
