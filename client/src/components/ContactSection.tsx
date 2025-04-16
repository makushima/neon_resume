import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaStackOverflow, 
  FaMediumM 
} from "react-icons/fa";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent!",
        description: "Thanks for your message. I'll get back to you soon.",
        variant: "default",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-muted-foreground text-center">
            Interested in working together or have questions about my experience? 
            Feel free to reach out.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="bg-card p-6 rounded-xl border border-gray-800"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <Label htmlFor="name" className="block text-muted-foreground mb-2">Name</Label>
                <Input
                  id="name"
                  className="w-full px-4 py-2 bg-background border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-foreground transition-colors"
                  placeholder="Your name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              
              <div className="mb-4">
                <Label htmlFor="email" className="block text-muted-foreground mb-2">Email</Label>
                <Input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 bg-background border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-foreground transition-colors"
                  placeholder="your.email@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              
              <div className="mb-4">
                <Label htmlFor="subject" className="block text-muted-foreground mb-2">Subject</Label>
                <Input
                  id="subject"
                  className="w-full px-4 py-2 bg-background border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-foreground transition-colors"
                  placeholder="What's this about?"
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <Label htmlFor="message" className="block text-muted-foreground mb-2">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-foreground transition-colors resize-none"
                  placeholder="Your message here..."
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
              
              <Button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300"
                style={{ boxShadow: "0 0 5px rgba(0, 255, 170, 0.5), 0 0 10px rgba(0, 255, 170, 0.3)" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-background border border-gray-700 flex items-center justify-center text-primary mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:john.doe@example.com" className="text-muted-foreground hover:text-primary transition-colors">john.doe@example.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-background border border-gray-700 flex items-center justify-center text-primary mr-4">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+12345678900" className="text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-8900</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-background border border-gray-700 flex items-center justify-center text-primary mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">San Francisco, California</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-card rounded-xl border border-gray-800">
              <h4 className="font-semibold mb-4">Social Profiles</h4>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-background border border-gray-700 hover:border-primary flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300">
                  <FaGithub />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-background border border-gray-700 hover:border-primary flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-background border border-gray-700 hover:border-primary flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300">
                  <FaTwitter />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-background border border-gray-700 hover:border-primary flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300">
                  <FaStackOverflow />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-background border border-gray-700 hover:border-primary flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300">
                  <FaMediumM />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
