import { Injectable } from '@angular/core';
import { HttpHelperService } from '../../../core/services/http-helper.service';
import { MemberListRequest, MemberModel } from '../models/member.model';
import { LazyLoadEvent } from 'primeng/api';
import { TableLazyLoadEvent } from 'primeng/table';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private _memberList: any[] = [];
  private _memberListTotal = 0;

  get memberList(): MemberModel[] {
    return this._memberList;
  }
  get memberListTotal() {
    return this._memberListTotal;
  }
  set memberList(value) {
    this._memberList = value;
  }
  set memberListTotal(value) {
    this._memberListTotal = value
  }

  constructor(
    private httpHelperService: HttpHelperService
  ) { }

  getMembers(event: TableLazyLoadEvent) {
    const body: MemberListRequest = {
      page: event.first ?? 0, // Ensure a valid number
      limit: event.rows ?? 20, // Default to 20 if null or undefined
      sort: event.sortField ?? '',
      dir: event.sortOrder === 1 ? 'ASC' : 'DESC',
      search: null,
      status: 'ACTIVE',
      tags: []
    };
    return this.httpHelperService.post<{data: MemberModel[], total: number}>('member/fetchMemberList', body);
  }
}
