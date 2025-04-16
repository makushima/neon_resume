export const cvData = {
  personalInfo: {
    name: "John Doe",
    title: "Junior DevOps Engineer",
    email: "john.doe@example.com",
    phone: "+1 (234) 567-8900",
    location: "San Francisco, California",
    socials: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      stackoverflow: "#",
      medium: "#",
    },
  },
  skills: {
    // Changed to category-based skill listing without percentages
    cloudSkills: [
      { name: "Azure", level: "intermediate" },
      { name: "AWS", level: "beginner" },
      { name: "Google Cloud Platform", level: "beginner" },
      { name: "Terraform", level: "beginner" },
    ],
    containerSkills: [
      { name: "Docker", level: "intermediate" },
      { name: "Kubernetes", level: "beginner" },
      { name: "Docker Compose", level: "intermediate" },
    ],
    cicdSkills: [
      { name: "GitHub Actions", level: "intermediate" },
      { name: "Jenkins", level: "beginner" },
      { name: "Ansible", level: "beginner" },
    ],
    monitoringSkills: [
      { name: "Prometheus", level: "beginner" },
      { name: "Grafana", level: "beginner" },
      { name: "ELK Stack", level: "beginner" },
    ],
    additionalSkills: [
      "Python",
      "Bash",
      "Git",
      "Linux",
      "PostgreSQL",
      "CI/CD Basics",
      "Azure DevOps",
    ],
  },
  experiences: [
    {
      title: "Junior DevOps Engineer",
      company: "TechStart Solutions",
      period: "Jan 2023 - Present",
      description:
        "Starting my journey in DevOps with a focus on automating deployment processes and learning cloud technologies for small to medium-sized applications.",
      achievements: [
        "Implemented basic CI/CD pipelines using GitHub Actions for company's internal projects.",
        "Maintained Docker containers and helped improve deployment processes.",
        "Learning Kubernetes and cloud infrastructure fundamentals through hands-on projects.",
      ],
      technologies: ["Docker", "GitHub Actions", "Azure", "Linux"],
    },
    {
      title: "IT Support Intern",
      company: "Global Learning Systems",
      period: "Jun 2022 - Dec 2022",
      description:
        "Provided technical support while gaining exposure to system administration and basic DevOps practices.",
      achievements: [
        "Assisted in maintaining and troubleshooting Linux servers.",
        "Gained hands-on experience with Docker for local development environments.",
        "Wrote scripts to automate routine system maintenance tasks.",
      ],
      technologies: ["Linux", "Bash", "Docker", "Python"],
    },
  ],
  projects: [
    {
      title: "NjordOps (Personal Project)",
      description:
        "A learning-focused project to implement infrastructure as code and CI/CD for a small web application.",
      features: [
        "Automated deployment pipeline with GitHub Actions",
        "Docker containerization for consistent environments",
        "Basic monitoring setup with Prometheus and Grafana",
      ],
      technologies: ["Docker", "GitHub Actions", "Terraform", "Azure"],
      commits: 87,
      link: "#",
    },
    {
      title: "SVsoft (Personal Project)",
      description:
        "A platform for practicing deployment strategies and cloud resource management.",
      features: [
        "Multi-environment setup (development, staging, production)",
        "Infrastructure as code using Terraform",
        "Automated testing and deployment",
      ],
      technologies: ["Azure", "Terraform", "Docker", "Python"],
      commits: 63,
      link: "#",
    },
  ],
  education: [
    {
      degree: "BSc in Computer Science",
      institution: "University of Technology",
      period: "2018 - 2022",
      description:
        "Focus areas included cloud computing, software engineering, and networking fundamentals. Active member of the Computer Science Club.",
    },
  ],
  certifications: [
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      year: "2022",
      icon: "microsoft",
    },
    {
      name: "Docker Essentials",
      issuer: "Docker, Inc.",
      year: "2022",
      icon: "docker",
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "aws",
    },
  ],
  achievements: [
    {
      title: "Microsoft Student Ambassador",
      period: "2021 - Present",
      description: "Representing Microsoft on campus, organizing workshops and events to promote Microsoft technologies and foster technical community growth.",
      highlights: [
        "Organized monthly Azure workshops for students",
        "Mentored junior students in cloud technologies",
        "Connected students with Microsoft resources and learning paths"
      ]
    },
    {
      title: "Hackathon Organizer",
      period: "2022",
      description: "Lead organizer for the annual TechInnovate Hackathon, bringing together 150+ participants for a 48-hour coding marathon.",
      highlights: [
        "Secured sponsorships from tech companies",
        "Coordinated a team of 15 volunteers",
        "Designed technical challenges focused on cloud solutions"
      ],
      photos: [
        "hackathon-opening.jpg",
        "hackathon-teams.jpg",
        "hackathon-winners.jpg"
      ]
    }
  ],
  gallery: [
    {
      title: "DevOps Workshop",
      description: "Leading a hands-on workshop on Docker and containerization basics",
      image: "workshop-docker.jpg",
      date: "May 2023"
    },
    {
      title: "Azure Learning Session",
      description: "Microsoft Student Ambassador event teaching Azure fundamentals",
      image: "azure-learning.jpg",
      date: "February 2023"
    },
    {
      title: "TechInnovate Hackathon",
      description: "Opening ceremony of the hackathon I organized",
      image: "hackathon-opening.jpg",
      date: "November 2022"
    },
    {
      title: "Cloud Computing Conference",
      description: "Attending my first professional conference on cloud technologies",
      image: "cloud-conference.jpg",
      date: "September 2022"
    }
  ]
};
