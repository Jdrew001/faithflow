export interface WorkflowAssignment {
  id: string;
  action: string;
  relatedTo: string;
  dueDate: Date;
  status: string;
}
