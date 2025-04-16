import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for handling contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body against the schema
      const validatedData = contactSchema.parse(req.body);
      
      // In a real app, this would send an email or save to a database
      console.log("Contact form submission:", validatedData);
      
      // Simulate a processing delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.status(200).json({ 
        success: true, 
        message: "Your message has been received. I'll get back to you soon." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to process your message. Please try again later." 
        });
      }
    }
  });

  // Route to serve the CV as a downloadable file
  app.get("/api/download-cv", (req: Request, res: Response) => {
    // Generate a simple text CV as a placeholder (in a real app, this would be a PDF)
    const cvData = `
John Doe - Junior DevOps Engineer
Microsoft Student Ambassador

Contact: john.doe@example.com | +1 (234) 567-8900 | San Francisco, California

SUMMARY
Enthusiastic Junior DevOps Engineer with a growing knowledge of cloud technologies, containerization, and automation.
Passionate about modern deployment techniques and building scalable, reliable systems.

EXPERIENCE
Junior DevOps Engineer | TechStart Solutions | Jan 2023 - Present
- Implemented basic CI/CD pipelines using GitHub Actions for company's internal projects
- Maintained Docker containers and helped improve deployment processes
- Learning Kubernetes and cloud infrastructure fundamentals through hands-on projects

IT Support Intern | Global Learning Systems | Jun 2022 - Dec 2022
- Assisted in maintaining and troubleshooting Linux servers
- Gained hands-on experience with Docker for local development environments
- Wrote scripts to automate routine system maintenance tasks

PROJECTS
NjordOps (Personal Project)
- Automated deployment pipeline with GitHub Actions
- Docker containerization for consistent environments
- Basic monitoring setup with Prometheus and Grafana

SVsoft (Personal Project)
- Multi-environment setup (development, staging, production)
- Infrastructure as code using Terraform
- Automated testing and deployment

EDUCATION
BSc in Computer Science | University of Technology | 2018 - 2022

CERTIFICATIONS
- Microsoft Certified: Azure Fundamentals (2022)
- Docker Essentials (2022)
- AWS Cloud Practitioner (2023)

ACHIEVEMENTS
Microsoft Student Ambassador (2021 - Present)
- Organized monthly Azure workshops for students
- Mentored junior students in cloud technologies
- Connected students with Microsoft resources and learning paths

Hackathon Organizer (2022)
- Lead organizer for the annual TechInnovate Hackathon
- Coordinated a team of 15 volunteers
- Designed technical challenges focused on cloud solutions
    `;

    // Set headers for file download
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', 'attachment; filename="john_doe_cv.txt"');
    
    // Send the CV data
    res.status(200).send(cvData);
  });

  const httpServer = createServer(app);

  return httpServer;
}
