export interface WorkflowNode {
  id: string;
  type: 'trigger' | 'action' | 'condition' | 'output';
  label: string;
  integration?: string;
  description?: string;
  position: { x: number; y: number };
}

export interface WorkflowConnection {
  from: string;
  to: string;
  label?: string;
}

export interface Automation {
  id: number;
  title: string;
  description: string;
  efficiency: string;
  timeSaved: string;
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
}

export const automationsData: Automation[] = [
  {
    id: 1,
    title: "Sales Lead Management Workflow",
    description:
      "Built n8n workflow that automatically captures leads from website forms, enriches data via API, creates CRM records, sends Slack notifications, and triggers personalized email sequences. Reduced lead response time from 4 hours to 5 minutes.",
    efficiency: "98% faster response",
    timeSaved: "25 hours/week",
    nodes: [
      { id: '1', type: 'trigger', label: 'Form Submit', integration: 'form', description: 'Webhook trigger on form submission', position: { x: 80, y: 120 } },
      { id: '2', type: 'action', label: 'Enrich Data', integration: 'database', description: 'Fetch additional data from API', position: { x: 280, y: 120 } },
      { id: '3', type: 'condition', label: 'Validate Lead', description: 'Check lead quality score', position: { x: 480, y: 120 } },
      { id: '4', type: 'action', label: 'Create CRM Record', integration: 'crm', description: 'Add to Salesforce', position: { x: 680, y: 120 } },
      { id: '5', type: 'action', label: 'Slack Notification', integration: 'slack', description: 'Alert sales team', position: { x: 880, y: 120 } },
      { id: '6', type: 'output', label: 'Email Sequence', integration: 'email', description: 'Start drip campaign', position: { x: 1080, y: 120 } },
    ],
    connections: [
      { from: '1', to: '2' },
      { from: '2', to: '3' },
      { from: '3', to: '4', label: 'Valid' },
      { from: '4', to: '5' },
      { from: '5', to: '6' },
    ]
  },
  {
    id: 2,
    title: "Invoice Processing Automation",
    description:
      "Designed automated invoice processing system using n8n. Extracts data from email attachments, validates against purchase orders, updates accounting software, and sends approval requests. Eliminated 90% of manual data entry.",
    efficiency: "90% reduction",
    timeSaved: "18 hours/week",
    nodes: [
      { id: '1', type: 'trigger', label: 'Email Received', integration: 'email', description: 'Invoice email with PDF', position: { x: 80, y: 120 } },
      { id: '2', type: 'action', label: 'Extract PDF Data', integration: 'database', description: 'Parse invoice details', position: { x: 320, y: 120 } },
      { id: '3', type: 'condition', label: 'Validate PO', description: 'Match with purchase order', position: { x: 560, y: 120 } },
      { id: '4', type: 'action', label: 'Update Accounting', integration: 'database', description: 'QuickBooks entry', position: { x: 800, y: 120 } },
      { id: '5', type: 'output', label: 'Send Approval', integration: 'email', description: 'Manager notification', position: { x: 1040, y: 120 } },
    ],
    connections: [
      { from: '1', to: '2' },
      { from: '2', to: '3' },
      { from: '3', to: '4', label: 'Valid' },
      { from: '4', to: '5' },
    ]
  },
  {
    id: 3,
    title: "Customer Support Ticketing System",
    description:
      "Created n8n workflow integrating email, Slack, and support platform. Automatically categorizes tickets, assigns to appropriate teams, sends auto-responses, and escalates based on priority rules. Improved first response time by 75%.",
    efficiency: "75% faster",
    timeSaved: "20 hours/week",
    nodes: [
      { id: '1', type: 'trigger', label: 'Support Request', integration: 'email', description: 'Email or Slack message', position: { x: 80, y: 120 } },
      { id: '2', type: 'action', label: 'AI Categorize', integration: 'database', description: 'Classify ticket type', position: { x: 320, y: 120 } },
      { id: '3', type: 'condition', label: 'Priority Check', description: 'Urgent vs Standard', position: { x: 560, y: 120 } },
      { id: '4', type: 'action', label: 'Assign Team', integration: 'crm', description: 'Route to specialist', position: { x: 800, y: 120 } },
      { id: '5', type: 'output', label: 'Auto-Response', integration: 'email', description: 'Acknowledge receipt', position: { x: 1040, y: 120 } },
    ],
    connections: [
      { from: '1', to: '2' },
      { from: '2', to: '3' },
      { from: '3', to: '4' },
      { from: '4', to: '5' },
    ]
  },
  {
    id: 4,
    title: "HR Onboarding Automation",
    description:
      "Automated new employee onboarding process with n8n. Triggers account creation across 8 systems, sends welcome emails, schedules orientation meetings, creates task checklists, and notifies relevant departments. Reduced onboarding time from 3 days to 2 hours.",
    efficiency: "95% time reduction",
    timeSaved: "30 hours/month",
    nodes: [
      { id: '1', type: 'trigger', label: 'New Hire Added', integration: 'form', description: 'HR system webhook', position: { x: 80, y: 120 } },
      { id: '2', type: 'action', label: 'Create Accounts', integration: 'database', description: '8 system provisioning', position: { x: 320, y: 120 } },
      { id: '3', type: 'action', label: 'Welcome Email', integration: 'email', description: 'Personalized onboarding', position: { x: 560, y: 120 } },
      { id: '4', type: 'action', label: 'Schedule Meetings', integration: 'calendar', description: 'Book orientation slots', position: { x: 800, y: 120 } },
      { id: '5', type: 'output', label: 'Team Notifications', integration: 'slack', description: 'Alert managers', position: { x: 1040, y: 120 } },
    ],
    connections: [
      { from: '1', to: '2' },
      { from: '2', to: '3' },
      { from: '3', to: '4' },
      { from: '4', to: '5' },
    ]
  },
  {
    id: 5,
    title: "Social Media Content Scheduler",
    description:
      "Built content management workflow that pulls approved content from Google Sheets, formats for different platforms, schedules posts via APIs, and generates performance reports. Streamlined content distribution across 5 social platforms.",
    efficiency: "85% automation",
    timeSaved: "12 hours/week",
    nodes: [
      { id: '1', type: 'trigger', label: 'Content Approved', integration: 'database', description: 'Google Sheets update', position: { x: 80, y: 120 } },
      { id: '2', type: 'action', label: 'Format Content', integration: 'database', description: 'Platform-specific formatting', position: { x: 320, y: 120 } },
      { id: '3', type: 'condition', label: 'Schedule Check', description: 'Optimal posting time', position: { x: 560, y: 120 } },
      { id: '4', type: 'action', label: 'Multi-Platform Post', integration: 'database', description: 'Twitter, LinkedIn, FB', position: { x: 800, y: 120 } },
      { id: '5', type: 'output', label: 'Analytics Report', integration: 'email', description: 'Weekly performance', position: { x: 1040, y: 120 } },
    ],
    connections: [
      { from: '1', to: '2' },
      { from: '2', to: '3' },
      { from: '3', to: '4', label: 'Ready' },
      { from: '4', to: '5' },
    ]
  },
  {
    id: 6,
    title: "Inventory Sync & Alerts",
    description:
      "Developed n8n workflow syncing inventory across e-commerce platform, warehouse management system, and accounting software. Sends low-stock alerts, auto-generates purchase orders, and updates all systems in real-time.",
    efficiency: "Real-time sync",
    timeSaved: "15 hours/week",
    nodes: [
      { id: '1', type: 'trigger', label: 'Stock Update', integration: 'database', description: 'E-commerce webhook', position: { x: 80, y: 120 } },
      { id: '2', type: 'action', label: 'Sync All Systems', integration: 'database', description: 'WMS + Accounting', position: { x: 320, y: 120 } },
      { id: '3', type: 'condition', label: 'Low Stock?', description: 'Check threshold levels', position: { x: 560, y: 120 } },
      { id: '4', type: 'action', label: 'Auto PO', integration: 'database', description: 'Generate purchase order', position: { x: 800, y: 120 } },
      { id: '5', type: 'output', label: 'Alert Team', integration: 'slack', description: 'Low stock notification', position: { x: 1040, y: 120 } },
    ],
    connections: [
      { from: '1', to: '2' },
      { from: '2', to: '3' },
      { from: '3', to: '4', label: 'Below threshold' },
      { from: '4', to: '5' },
    ]
  },
  {
    id: 7,
    title: "Meeting Notes & Action Items",
    description:
      "Automated meeting workflow that captures Zoom recordings, generates transcripts, extracts action items using AI, creates tasks in project management tools, and sends summary emails to participants.",
    efficiency: "100% automated",
    timeSaved: "10 hours/week",
    nodes: [
      { id: '1', type: 'trigger', label: 'Recording Ready', integration: 'calendar', description: 'Zoom webhook trigger', position: { x: 80, y: 120 } },
      { id: '2', type: 'action', label: 'AI Transcription', integration: 'database', description: 'Speech-to-text processing', position: { x: 320, y: 120 } },
      { id: '3', type: 'action', label: 'Extract Actions', integration: 'database', description: 'GPT action item extraction', position: { x: 560, y: 120 } },
      { id: '4', type: 'action', label: 'Create Tasks', integration: 'crm', description: 'Add to Asana/Jira', position: { x: 800, y: 120 } },
      { id: '5', type: 'output', label: 'Email Summary', integration: 'email', description: 'Send to attendees', position: { x: 1040, y: 120 } },
    ],
    connections: [
      { from: '1', to: '2' },
      { from: '2', to: '3' },
      { from: '3', to: '4' },
      { from: '4', to: '5' },
    ]
  },
  {
    id: 8,
    title: "Data Backup & Reporting",
    description:
      "Scheduled n8n workflows for automated database backups, data validation checks, report generation from multiple sources, and distribution to stakeholders. Ensures data integrity and timely reporting.",
    efficiency: "Zero manual intervention",
    timeSaved: "8 hours/week",
    nodes: [
      { id: '1', type: 'trigger', label: 'Daily Schedule', integration: 'calendar', description: 'Cron job trigger', position: { x: 80, y: 120 } },
      { id: '2', type: 'action', label: 'Database Backup', integration: 'database', description: 'Full DB snapshot', position: { x: 320, y: 120 } },
      { id: '3', type: 'action', label: 'Data Validation', integration: 'database', description: 'Integrity checks', position: { x: 560, y: 120 } },
      { id: '4', type: 'action', label: 'Generate Reports', integration: 'database', description: 'Analytics compilation', position: { x: 800, y: 120 } },
      { id: '5', type: 'output', label: 'Email Distribution', integration: 'email', description: 'Send to stakeholders', position: { x: 1040, y: 120 } },
    ],
    connections: [
      { from: '1', to: '2' },
      { from: '2', to: '3' },
      { from: '3', to: '4' },
      { from: '4', to: '5' },
    ]
  },
];
