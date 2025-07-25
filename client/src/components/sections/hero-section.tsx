import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import img from "../../assets/img/logo.jpg";
export function HeroSection() {
  const { toast } = useToast();

  // const handleDownloadResume = async () => {
  //   try {
  //     const response = await fetch("/api/resume");
  //     const data = await response.json();
      
  //     if (data.success) {
  //       toast({
  //         title: "Resume Download",
  //         description: "Your resume download will begin shortly.",
  //       });
  //       // In a real implementation, this would trigger a file download
  //     }
  //   } catch (error) {
  //     toast({
  //       title: "Download Error",
  //       description: "Failed to download resume. Please try again.",
  //       variant: "destructive",
  //     });
  //   }
  // };
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Ahmad_Hassan_Resume.pdf"; // desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    toast({
      title: "Resume Download",
      description: "Your resume download has started.",
    });
  };  

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="animate-float mb-8"
        >
          <img 
            src={img} 
            alt="Ahmad Hassan - Software Engineer" 
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white shadow-2xl object-cover"
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm Ahmad Hassan
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Full Stack Developer crafting digital experiences with 3+ years of expertise
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold transform hover:scale-105 transition-transform"
          >
            View My Work
          </Button>
          <Button
            onClick={handleDownloadResume}
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-8 w-8 text-white" />
      </motion.div>
    </section>
  );
}
