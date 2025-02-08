import { Component, OnInit } from '@angular/core';
import { WorkflowSummary } from './models/workflow-summary.model';
import { DashboardService } from './services/dashboard.service';
import { ActivityLogList } from './models/activity-log.model';
import { GuestMetricModel } from './models/guest-metrics.model';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  get summary(): WorkflowSummary[] { return this.dashboardService?.workflowSummary || []; }
  get activityLogs(): ActivityLogList[] { return this.dashboardService?.activityLogList || []; }
  get guestMetrics(): GuestMetricModel[] { return this.dashboardService?.guestMetrics || []; }
  todoTasks: any[] = [];
  responsiveOptions: any[] = [];
  taskMetrics: any[] = [];

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly userService: UserService
  ) {}


  ngOnInit(): void {
    this.initializeSummary();
    this.initializeActivityLogs();
    this.initializeTodoTasks();
    this.initializeResponsiveOptions();
    this.initializeGuestMetrics();
    this.initializeTaskMetrics();
  }

  private initializeGuestMetrics(): void {
    this.dashboardService.getGuestMetrics();
  }

  private initializeSummary(): void {
    this.dashboardService.getWorkflowSummary();
  }

  private initializeActivityLogs(): void {
    this.dashboardService.getActivityLogList();
  }

  private initializeTodoTasks(): void {
    this.dashboardService.getUserTasks();
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