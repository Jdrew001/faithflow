import { Injectable } from '@angular/core';
import { WorkflowSummary } from '../models/workflow-summary.model';
import { HttpHelperService } from '../../../core/services/http-helper.service';
import { ActivityLogList } from '../models/activity-log.model';

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

  constructor(
    private readonly httpHelperService: HttpHelperService
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
}
