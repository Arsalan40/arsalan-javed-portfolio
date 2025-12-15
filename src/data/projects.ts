export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  image?: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  // Case study details
  client: string;
  duration: string;
  role: string;
  challenge: string;
  solution: string[];
  results: {
    metric: string;
    value: string;
  }[];
  keyFeatures: string[];
  teamSize?: string;
  industry: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "maneh-certification-saudi-vision-2030",
    title: "SASO Maneh - Saudi Vision 2030",
    category: "Digital Transformation",
    image: "/Projects/SASO_Maneh.png",
    description:
      "Led business analysis for Maneh online certification system as part of Saudi Vision 2030 initiative. Digitized product certification processes, improved development efficiency by 20% through effective story writing and backlog grooming.",
    technologies: ["Requirements Gathering", "JIRA", "User Stories", "Agile/Scrum", "Stakeholder Management", "UAT Coordination", "Figma", "Backlog Grooming", "Sprint Planning", "Live Demos"],
    github: "",
    live: "",
    client: "AZM Development (Saudi Vision 2030)",
    duration: "Feb 2025 - Present",
    role: "Business Analyst",
    industry: "Government / Digital Transformation",
    challenge: "Digitize Saudi Arabia's product certification processes as part of Vision 2030, ensuring compliance with international standards while maintaining efficiency and user-friendliness.",
    solution: [
      "Conducted comprehensive stakeholder analysis and requirements gathering across multiple government departments",
      "Created detailed user stories and acceptance criteria in JIRA, improving development clarity",
      "Collaborated with designers in Figma to validate user flows and ensure UI consistency",
      "Implemented agile ceremonies including sprint planning, backlog grooming, and retrospectives",
      "Coordinated UAT sessions with government stakeholders, gathering feedback and prioritizing changes"
    ],
    results: [
      { metric: "Development Efficiency", value: "+20%" },
      { metric: "UAT Acceptance Cycles", value: "Faster by 30%" },
      { metric: "Stakeholder Satisfaction", value: "95%" }
    ],
    keyFeatures: [
      "Online certification application and tracking system",
      "Multi-level approval workflows",
      "Document management and verification",
      "Real-time status tracking for applicants",
      "Integration with government databases"
    ],
    teamSize: "8-12 members (Developers, QA, Designers)"
  },
  {
    id: 2,
    slug: "elixir-cloud-healthcare",
    title: "Elixir Cloud",
    category: "Cloud SaaS",
    description:
      "Analyzed client business requirements and implemented Elixir Cloud solutions for healthcare industry. Enhanced operational workflows by 25%. Developed and deployed Tango CCM solution with seamless database integration.",
    technologies: ["Business Requirements", "SQL", "Client Analysis", "Solution Design", "UAT Testing", "Data Integration", "XML/RDBMS", "Project Planning", "Training & Support", "Implementation"],
    github: "",
    live: "",
    client: "Healthcare Industry Clients (via Elixir Technologies)",
    duration: "Sep 2024 - Nov 2024",
    role: "Implementation Consultant",
    industry: "Healthcare / SaaS",
    challenge: "Implement Elixir Cloud platform for healthcare providers while ensuring HIPAA compliance, data security, and seamless integration with existing healthcare systems.",
    solution: [
      "Conducted detailed requirements gathering with healthcare stakeholders",
      "Implemented Tango CCM solution with multi-source data integration",
      "Configured data mappings for XML files, delimited files, and RDBMS",
      "Ensured HIPAA compliance throughout implementation",
      "Provided comprehensive training and ongoing support"
    ],
    results: [
      { metric: "Operational Workflows", value: "+25% efficiency" },
      { metric: "Data Integration", value: "Seamless across 3 sources" },
      { metric: "User Adoption", value: "Improved significantly" },
      { metric: "Post-Deployment Issues", value: "Reduced" }
    ],
    keyFeatures: [
      "Patient data management",
      "Multi-source data integration (XML, CSV, RDBMS)",
      "HIPAA-compliant cloud infrastructure",
      "Automated reporting and analytics",
      "Role-based access control"
    ],
    teamSize: "2-4 members"
  },
  {
    id: 3,
    slug: "jira-insights-dashboard",
    title: "JIRA Insight Dashboard",
    category: "Business Intelligence",
    description:
      "Developed comprehensive JIRA analytics dashboard providing real-time insights into project progress, team performance, and sprint metrics. Empowered stakeholders with data-driven decision making capabilities.",
    technologies: ["JIRA Administration", "Dashboard Design", "KPI Tracking", "Agile Metrics", "Sprint Analytics", "Workflow Configuration", "Reporting", "Data Analysis", "Stakeholder Presentations"],
    github: "",
    live: "",
    client: "Internal Project Management Enhancement",
    duration: "2023 - 2024",
    role: "Business Analyst / Data Analyst",
    industry: "Project Management / SaaS",
    challenge: "Extract actionable insights from JIRA data to improve project visibility, track team performance, and identify bottlenecks in the development process.",
    solution: [
      "Integrated with JIRA API to extract real-time project data",
      "Designed interactive dashboards for sprint metrics and burndown charts",
      "Created custom reports for velocity tracking and resource allocation",
      "Implemented automated alerts for at-risk tasks and blockers",
      "Provided training to stakeholders on dashboard usage and interpretation"
    ],
    results: [
      { metric: "Project Visibility", value: "+60%" },
      { metric: "Decision Making Speed", value: "+40%" },
      { metric: "Sprint Planning Accuracy", value: "+35%" },
      { metric: "Stakeholder Satisfaction", value: "92%" }
    ],
    keyFeatures: [
      "Real-time sprint progress tracking",
      "Team velocity and capacity analytics",
      "Burndown and burnup charts",
      "Custom KPI dashboards",
      "Automated performance reports"
    ],
    teamSize: "Individual contributor with stakeholder collaboration"
  },
  {
    id: 4,
    slug: "paf-office-management-erp",
    title: "Office Management ERP - PAF",
    category: "ERP System",
    description:
      "Led ERP system implementation for Pakistan Air Force Office Management module. Improved operational efficiency by 30%, reduced manual workloads significantly through SQL-based workflow configurations, cutting data-entry time by 40%.",
    technologies: ["ERP Implementation", "Requirements Analysis", "SQL Queries", "UAT Management", "JIRA Tracking", "Client Demos", "Process Documentation", "Workflow Configuration", "Stakeholder Communication"],
    github: "",
    live: "",
    client: "Pakistan Air Force (via CARE Pvt Ltd)",
    duration: "Dec 2022 - Sep 2024",
    role: "Implementation Engineer",
    industry: "Defense / Government",
    challenge: "Replace manual paper-based office management processes with a digital ERP system across multiple PAF departments while ensuring security, reliability, and user adoption.",
    solution: [
      "Conducted detailed business process mapping and gap analysis",
      "Configured SQL-based workflows to automate routine office tasks",
      "Designed and implemented role-based access control for security",
      "Provided comprehensive training to 50+ users across departments",
      "Managed UAT cycles with continuous stakeholder feedback"
    ],
    results: [
      { metric: "Operational Efficiency", value: "+30%" },
      { metric: "Data Entry Time", value: "-40%" },
      { metric: "Manual Workload", value: "Significantly Reduced" },
      { metric: "User Adoption", value: "90% within 2 months" }
    ],
    keyFeatures: [
      "Automated office correspondence tracking",
      "Digital file management system",
      "Leave and attendance management",
      "Task assignment and monitoring",
      "Reporting and analytics dashboards"
    ],
    teamSize: "3-5 members"
  },
  {
    id: 5,
    slug: "paf-finance-module",
    title: "Finance Management ERP - PAF",
    category: "ERP System",
    description:
      "Implemented comprehensive Finance module for Pakistan Air Force departments. Created dynamic dashboards using Poli for real-time analytics and decision-making. Managed UAT sessions with 30% fewer rework iterations through continuous feedback.",
    technologies: ["Finance Module Implementation", "SQL Development", "JavaScript Configuration", "Dashboard Design", "Process Optimization", "Data Accuracy", "UAT Coordination", "JIRA", "KPI Reporting"],
    github: "",
    live: "",
    client: "Pakistan Air Force (via CARE Pvt Ltd)",
    duration: "Dec 2022 - Sep 2024",
    role: "Implementation Engineer",
    industry: "Defense / Government / Finance",
    challenge: "Implement a robust financial management system for PAF with real-time reporting capabilities, ensuring accuracy, compliance, and audit readiness.",
    solution: [
      "Analyzed existing financial processes and identified automation opportunities",
      "Configured finance module with budget tracking and expense management",
      "Created dynamic Poli dashboards for real-time financial analytics",
      "Implemented approval workflows for financial transactions",
      "Conducted thorough UAT with finance department stakeholders"
    ],
    results: [
      { metric: "UAT Rework Iterations", value: "-30%" },
      { metric: "Report Generation Time", value: "-60%" },
      { metric: "Financial Visibility", value: "Real-time" },
      { metric: "Audit Compliance", value: "100%" }
    ],
    keyFeatures: [
      "Budget allocation and tracking",
      "Expense management and approval workflows",
      "Real-time financial dashboards",
      "Automated report generation",
      "Integration with existing accounting systems"
    ],
    teamSize: "3-5 members"
  },
  {
    id: 6,
    slug: "paf-overtime-management",
    title: "HR Management System - PAF",
    category: "ERP System",
    description:
      "Delivered comprehensive Overtime Management module for Pakistan Air Force departments. Executed SQL-based workflow configurations and managed UAT sessions. Improved operational efficiency.",
    technologies: ["HR Module Implementation", "Workflow Automation", "Requirements Documentation", "UAT Testing", "SQL Configuration", "Process Improvement", "Client Training", "JIRA Project Management"],
    github: "",
    live: "",
    client: "Pakistan Air Force (via CARE Pvt Ltd)",
    duration: "Dec 2022 - Sep 2024",
    role: "Implementation Engineer",
    industry: "Defense / Government / HR",
    challenge: "Automate overtime tracking and approval processes for PAF personnel while ensuring accuracy, fairness, and compliance with military regulations.",
    solution: [
      "Mapped existing overtime processes and identified pain points",
      "Configured SQL-based automated workflows for overtime requests",
      "Implemented multi-level approval chains based on organizational hierarchy",
      "Created reports for overtime analytics and budget tracking",
      "Managed UAT with HR and finance departments"
    ],
    results: [
      { metric: "Manual Tracking Workload", value: "Eliminated" },
      { metric: "Operational Efficiency", value: "Improved" },
      { metric: "Approval Time", value: "-50%" },
      { metric: "Data Accuracy", value: "99%" }
    ],
    keyFeatures: [
      "Automated overtime request and approval",
      "Multi-level authorization workflows",
      "Overtime analytics and reporting",
      "Budget tracking and alerts",
      "Integration with payroll systems"
    ],
    teamSize: "3-5 members"
  },
  {
    id: 7,
    slug: "dsr-aurum-horse-trading",
    title: "DSR Aurum - Horse Trading Platform",
    category: "Web Application",
    image: "/Projects/DSR Aurum.png",
    description:
      "Designed and analyzed requirements for a comprehensive horse trading platform connecting buyers, sellers, and breeders. Created intuitive user flows and detailed feature specifications for the equestrian marketplace.",
    technologies: ["Product Requirements", "Feature Specifications", "User Flow Design", "API Documentation", "Acceptance Criteria", "Cross-functional Collaboration", "Sprint Planning", "Release Management"],
    github: "",
    live: "",
    client: "DSR Aurum",
    duration: "2024",
    role: "Business Analyst",
    industry: "E-commerce / Equestrian",
    challenge: "Create a specialized trading platform for the horse industry with unique requirements including pedigree tracking, health records, and secure transaction handling.",
    solution: [
      "Conducted market research and competitor analysis in equestrian e-commerce",
      "Facilitated workshops with horse breeders, traders, and buyers",
      "Defined user personas and journey maps for different stakeholder types",
      "Created detailed user stories with acceptance criteria",
      "Designed process flows for listing, bidding, and transaction management"
    ],
    results: [
      { metric: "Requirements Clarity", value: "Comprehensive documentation" },
      { metric: "Stakeholder Alignment", value: "95%" },
      { metric: "Feature Prioritization", value: "3-phase roadmap" },
      { metric: "Technical Feasibility", value: "Validated" }
    ],
    keyFeatures: [
      "Horse listing with pedigree information",
      "Advanced search and filtering",
      "Secure bidding and transaction system",
      "Health records and vet certification management",
      "Breeder and seller verification"
    ],
    teamSize: "BA + Design team collaboration"
  },
];
