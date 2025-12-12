export interface WorkflowNode {
  id: string;
  type: 'trigger' | 'action' | 'condition' | 'output';
  label: string;
  icon?: string;
}

export interface Automation {
  id: number;
  title: string;
  description: string;
  efficiency: string;
  timeSaved: string;
  nodes: WorkflowNode[];
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
      { id: '1', type: 'trigger', label: 'Form Submit' },
      { id: '2', type: 'action', label: 'Enrich Data' },
      { id: '3', type: 'condition', label: 'Validate Lead' },
      { id: '4', type: 'action', label: 'Create CRM' },
      { id: '5', type: 'action', label: 'Slack Alert' },
      { id: '6', type: 'output', label: 'Email Sequence' },
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
      { id: '1', type: 'trigger', label: 'Email Received' },
      { id: '2', type: 'action', label: 'Extract PDF' },
      { id: '3', type: 'condition', label: 'Validate PO' },
      { id: '4', type: 'action', label: 'Update Accounting' },
      { id: '5', type: 'output', label: 'Send Approval' },
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
      { id: '1', type: 'trigger', label: 'Email/Slack' },
      { id: '2', type: 'action', label: 'Categorize' },
      { id: '3', type: 'condition', label: 'Check Priority' },
      { id: '4', type: 'action', label: 'Assign Team' },
      { id: '5', type: 'output', label: 'Auto-Response' },
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
      { id: '1', type: 'trigger', label: 'New Hire' },
      { id: '2', type: 'action', label: 'Create Accounts' },
      { id: '3', type: 'action', label: 'Welcome Email' },
      { id: '4', type: 'action', label: 'Schedule Meeting' },
      { id: '5', type: 'output', label: 'Notify Teams' },
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
      { id: '1', type: 'trigger', label: 'Google Sheets' },
      { id: '2', type: 'action', label: 'Format Content' },
      { id: '3', type: 'condition', label: 'Check Schedule' },
      { id: '4', type: 'action', label: 'Post to Platforms' },
      { id: '5', type: 'output', label: 'Performance Report' },
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
      { id: '1', type: 'trigger', label: 'Inventory Change' },
      { id: '2', type: 'action', label: 'Sync Systems' },
      { id: '3', type: 'condition', label: 'Check Stock' },
      { id: '4', type: 'action', label: 'Generate PO' },
      { id: '5', type: 'output', label: 'Stock Alert' },
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
      { id: '1', type: 'trigger', label: 'Zoom Recording' },
      { id: '2', type: 'action', label: 'Transcribe' },
      { id: '3', type: 'action', label: 'Extract Actions' },
      { id: '4', type: 'action', label: 'Create Tasks' },
      { id: '5', type: 'output', label: 'Send Summary' },
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
      { id: '1', type: 'trigger', label: 'Schedule' },
      { id: '2', type: 'action', label: 'Backup DB' },
      { id: '3', type: 'action', label: 'Validate Data' },
      { id: '4', type: 'action', label: 'Generate Report' },
      { id: '5', type: 'output', label: 'Distribute' },
    ]
  },
];
