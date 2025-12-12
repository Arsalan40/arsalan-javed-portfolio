export interface Project {
  id: number;
  slug: string;
  title: string;
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
    title: "Maneh Certification System - Saudi Vision 2030",
    description:
      "Led business analysis for Maneh online certification system as part of Saudi Vision 2030 initiative. Digitized product certification processes, improved development efficiency by 20% through effective story writing and backlog grooming.",
    technologies: ["JIRA", "Agile", "Figma", "User Stories", "Backlog Grooming", "UAT"],
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
    slug: "paf-office-management-erp",
    title: "PAF Office Management ERP System",
    description:
      "Led ERP system implementation for Pakistan Air Force Office Management module. Improved operational efficiency by 30%, reduced manual workloads significantly through SQL-based workflow configurations, cutting data-entry time by 40%.",
    technologies: ["ERP", "SQL", "Workflow Configuration", "Process Optimization", "UAT"],
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
    id: 3,
    slug: "paf-finance-module",
    title: "PAF Finance Module Implementation",
    description:
      "Implemented comprehensive Finance module for Pakistan Air Force departments. Created dynamic dashboards using Poli for real-time analytics and decision-making. Managed UAT sessions with 30% fewer rework iterations through continuous feedback.",
    technologies: ["Poli Dashboards", "SQL", "Financial Analytics", "Real-time Reporting", "UAT"],
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
    id: 4,
    slug: "elixir-cloud-healthcare",
    title: "Elixir Cloud - Healthcare Solutions",
    description:
      "Analyzed client business requirements and implemented Elixir Cloud solutions for healthcare industry. Enhanced operational workflows by 25%. Developed and deployed Tango CCM solution with seamless database integration.",
    technologies: ["Tango CCM", "Database Integration", "XML", "RDBMS", "Healthcare Compliance"],
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
    id: 5,
    slug: "elixir-cloud-banking",
    title: "Elixir Cloud - Banking Solutions",
    description:
      "Implemented Elixir Cloud solutions for banking industry clients. Managed multiple data sources and improved user adoption through effective training sessions. Reduced post-deployment issues.",
    technologies: ["Banking Systems", "Data Integration", "User Training", "Implementation Support"],
    github: "",
    live: "",
    client: "Banking Industry Clients (via Elixir Technologies)",
    duration: "Sep 2024 - Nov 2024",
    role: "Implementation Consultant",
    industry: "Banking / Financial Services",
    challenge: "Deploy Elixir Cloud platform for banking clients with stringent security requirements, complex data integrations, and minimal downtime tolerance.",
    solution: [
      "Analyzed banking workflows and mapped data requirements",
      "Implemented secure data integration across multiple banking systems",
      "Developed comprehensive training materials for bank staff",
      "Provided ongoing implementation support and issue resolution",
      "Coordinated with engineering teams for custom feature requests"
    ],
    results: [
      { metric: "User Adoption", value: "Improved" },
      { metric: "Post-Deployment Issues", value: "Reduced" },
      { metric: "Data Source Integration", value: "Multiple sources" },
      { metric: "System Uptime", value: "99.5%" }
    ],
    keyFeatures: [
      "Secure multi-source data integration",
      "Customer relationship management",
      "Transaction monitoring and reporting",
      "Compliance and audit trails",
      "User training and documentation"
    ],
    teamSize: "2-4 members"
  },
  {
    id: 6,
    slug: "paf-overtime-management",
    title: "PAF Overtime Management System",
    description:
      "Delivered comprehensive Overtime Management module for Pakistan Air Force departments. Executed SQL-based workflow configurations and managed UAT sessions. Improved operational efficiency.",
    technologies: ["ERP", "SQL", "Workflow Automation", "Process Management", "UAT"],
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
];
