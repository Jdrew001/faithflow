import { Injectable } from '@angular/core';
import { WorkflowSummary } from '../models/workflow-summary.model';
import { HttpHelperService } from '../../../core/services/http-helper.service';
import { ActivityLogList } from '../models/activity-log.model';
import { GuestMetricModel } from '../models/guest-metrics.model';
import { UserService } from '../../../core/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _workflowSummary: WorkflowSummary[] = [];
  get workflowSummary(): WorkflowSummary[] { return this._workflowSummary; }
  set workflowSummary(value: WorkflowSummary[]) { this._workflowSummary = value; }

  private _activityLogList: ActivityLogList[] = [];
  get activityLogList(): ActivityLogList[] { return this._activityLogList; }
  set activityLogList(value: ActivityLogList[]) { this._activityLogList = value; }

  private _guestMetrics: GuestMetricModel[] = [];
  get guestMetrics(): GuestMetricModel[] { return this._guestMetrics; }
  set guestMetrics(value: GuestMetricModel[]) { this._guestMetrics = value; }

  private _assignments: any[] = [];
  get assignments(): any[] { return this._assignments; }
  set assignments(value: any[]) { this._assignments = value; }

  constructor(
    private readonly httpHelperService: HttpHelperService,
    private readonly userService: UserService
  ) { }

  getWorkflowSummary() {
    this.httpHelperService.get<WorkflowSummary[]>('workflows/summary').subscribe((data) => {
      this.workflowSummary = data;
    });
  }

  getActivityLogList() {
    this.httpHelperService.get<ActivityLogList[]>('activityLogs').subscribe((data) => {
      this.activityLogList = data;
    });
  }

  getGuestMetrics() {
    this.httpHelperService.get<GuestMetricModel[]>('member/fetchGuestMetrics').subscribe((data) => {
      this.guestMetrics = data;
    });
  }

  getUserTasks() {
    this.httpHelperService.get<[]>(`workflow-assignments/user`).subscribe((data) => {
      this.assignments = data;
    });
  }
}
