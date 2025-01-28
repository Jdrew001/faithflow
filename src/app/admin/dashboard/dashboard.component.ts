import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cards: any[] = [];
  activityLogs: any[] = [];
  todoTasks: any[] = [];
  responsiveOptions: any[] = [];
  guestMetrics: any[] = [];
  taskMetrics: any[] = [];


  ngOnInit(): void {
    this.initializeCards();
    this.initializeActivityLogs();
    this.initializeTodoTasks();
    this.initializeResponsiveOptions();
    this.initializeGuestMetrics();
    this.initializeTaskMetrics();
  }

  private initializeGuestMetrics(): void {
    this.guestMetrics = [
      {
        value: 25,
        description: 'First-Time Guests This Month',
      },
      {
        value: 15,
        description: 'Returning Guests This Month',
      },
      {
        value: 40,
        description: 'Guests in Follow-Up',
      },
    ];
  }

  private initializeCards(): void {
    this.cards = [
      {
        "value": "15 Workflows",
        "description": "Manage all your workflows seamlessly.",
        "icon": "pi pi-briefcase",
        "iconColor": "#1E88E5" // Blue
      },
      {
        "value": "10 Active",
        "description": "Workflows with steps in progress.",
        "icon": "pi pi-check-circle",
        "iconColor": "#43A047" // Green
      },
      {
        "value": "5 Pending",
        "description": "Workflows with steps TODO.",
        "icon": "pi pi-clock",
        "iconColor": "#FB8C00" // Orange
      },
      {
        "value": "5 Overdue",
        "description": "Workflows with overdue steps.",
        "icon": "pi pi-exclamation-circle",
        "iconColor": "#E53935" // Red
      },
      {
        "value": "10 Completed",
        "description": "Workflows completed successfully.",
        "icon": "pi pi-check",
        "iconColor": "#4CAF50" // Green
      }
    ];
  }

  private initializeActivityLogs(): void {
    this.activityLogs = [
      {
        action: 'Sent Welcome Email',
        relatedTo: 'John Doe',
        performedBy: 'Admin: Sarah Parker',
        timestamp: new Date(),
        icon: 'pi pi-envelope',
        color: '#1E88E5',
      },
      {
        action: 'Completed Step 2',
        relatedTo: 'Workflow: Onboarding',
        performedBy: 'Admin: James Smith',
        timestamp: new Date(new Date().setDate(new Date().getDate() - 1)),
        icon: 'pi pi-check-circle',
        color: '#43A047',
      },
    ];
  }

  private initializeTodoTasks(): void {
    this.todoTasks = [
      {
        id: 'task1',
        action: 'Send follow-up email',
        relatedTo: 'John Doe',
        dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        status: 'TODO',
      },
      {
        id: 'task2',
        action: 'Schedule onboarding meeting',
        relatedTo: 'Alice Johnson',
        dueDate: new Date(new Date().setHours(new Date().getHours() + 5)),
        status: 'COMPLETED',
      },
      {
        id: 'task3',
        action: 'Finalize workflow documentation',
        relatedTo: 'Workflow: New Member Onboarding',
        dueDate: new Date(new Date().setDate(new Date().getDate() + 3)),
        status: 'OVERDUE',
      },
    ];
  }

  private initializeResponsiveOptions(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  private initializeTaskMetrics(): void {
    this.taskMetrics = [
      {
        value: 12,
        description: 'Tasks Completed',
      },
      {
        value: 5,
        description: 'Tasks Overdue',
      },
      {
        value: 8,
        description: 'Tasks Pending',
      },
    ];
  }
  
  markAsIncomplete(taskId: string): void {
    const task = this.todoTasks.find((t) => t.id === taskId);
    if (task) {
      task.status = 'TODO';
    }
  }

  markAsCompleted(taskId: string): void {
    const task = this.todoTasks.find((t) => t.id === taskId);
    if (task) {
      task.status = 'Completed';
    }
  }
}