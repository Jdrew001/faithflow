import { Component, OnInit } from '@angular/core';
import { WorkflowSummary } from './models/workflow-summary.model';
import { DashboardService } from './services/dashboard.service';
import { ActivityLogList } from './models/activity-log.model';
import { GuestMetricModel } from './models/guest-metrics.model';
import { UserService } from '../../core/services/user.service';
import { WorkflowAssignment } from './models/workflow-assignment.model';
import { InlineFilterModel, InlineFilterType } from '../../shared/components/inline-filter/model/inline-filter.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  // TODO: Move this to the service
  completionMetricFilter: InlineFilterModel[] = [
    {
      id: 'completionMetric',
      type: InlineFilterType.SPLIT_BUTTON,
      options: [
        { name: 'All-Time', value: 'all' },
        { name: 'This Month', value: 'this_month' },
        { name: 'This Week', value: 'this_week' },
        { name: 'Today', value: 'today' }
      ],
      selectedOption: 'all',
      multiple: false,
      optionLabel: 'name',
      optionValue: 'value'
    }
  ];
  get summary(): WorkflowSummary[] { return this.dashboardService?.workflowSummary || []; }
  get activityLogs(): ActivityLogList[] { return this.dashboardService?.activityLogList || []; }
  get guestMetrics(): GuestMetricModel[] { return this.dashboardService?.guestMetrics || []; }
  get workflowAssignments(): WorkflowAssignment[] { return this.dashboardService?.assignments || []; }
  get assignmentMetrics(): any[] { return this.dashboardService?.assignmentMetrics || []; }
  responsiveOptions: any[] = [];
  paginatedTasks: any[] = [];
  pageSize: number = 5;

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly userService: UserService
  ) {}

  ///region: life cycle hooks
  ngOnInit(): void {
    this.initializeSummary();
    this.initializeActivityLogs();
    this.initializeTodoTasks();
    this.initializeResponsiveOptions();
    this.initializeGuestMetrics();
    this.initializeAssignmentMetrics();
  }
  ///endregion

  workflowAssignmentPaginate(event: any) {
    const startIndex = event.first;
    const endIndex = startIndex + event.rows;
    this.paginatedTasks = this.workflowAssignments.slice(startIndex, endIndex);
  }

  updateCompletionMetrics(filter: Record<string, any>) {
    this.dashboardService.getAssignmentMetrics(filter);
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
    this.dashboardService.getUserTasks().subscribe(() => {
      this.workflowAssignmentPaginate({first: 0, rows: this.pageSize});
    });
  }

  private initializeAssignmentMetrics() {
    this.dashboardService.getAssignmentMetrics({completionMetric: 'all'});
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

  markAsIncomplete(taskId: string): void {
    // const task = this.todoTasks.find((t) => t.id === taskId);
    // if (task) {
    //   task.status = 'TODO';
    // }
  }

  markAsCompleted(taskId: string): void {
    // const task = this.todoTasks.find((t) => t.id === taskId);
    // if (task) {
    //   task.status = 'Completed';
    // }
  }
}
