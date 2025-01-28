import { Injectable } from '@angular/core';
import { WorkflowSummary } from '../models/workflow-summary.model';
import { HttpHelperService } from '../../../core/services/http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private readonly httpHelperService: HttpHelperService
  ) { }

  getWorkflowSummary() {
    return this.httpHelperService.get<WorkflowSummary>('workflows/summary');
  }
}
