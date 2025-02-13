import { Component, OnInit, ViewChild } from '@angular/core';
import { MemberService } from './services/member.service';
import { MemberModel } from './models/member.model';
import { LazyLoadEvent } from 'primeng/api';
import { Table, TableLazyLoadEvent } from 'primeng/table';
import { Columns } from './config/columns.model';
import { FormDialogService } from '../../shared/components/generic-dialog-form/services/form-dialog.service';
import { FormIdConstant } from '../../shared/components/generic-dialog-form/models/common/form-id.constant';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss'
})
export class MemberComponent implements OnInit {

  @ViewChild('dt') dataTable: Table | undefined;
  first: number = 0;
  public columns = Columns;
  data: MemberModel[] = [];
  length :number = 0;
  ref!: DynamicDialogRef<any>;

  get memberList(): any[] {
    return this.memberService.memberList!;
  }

  constructor(
    private memberService: MemberService,
    private formDialogService: FormDialogService
  ) {}

  ngOnInit() {
  }

  fetchMembers(event: TableLazyLoadEvent) {
    this.memberService.getMembers(event).subscribe(res => {
      this.data = res.data;
      this.length = res.total;
    });
  }

  addNewMember(e: any) {
    const onClose = this.formDialogService.openForm('Add New Member', FormIdConstant.ADD_MEMBER, '50vw');
    onClose.subscribe((response: any) => {
      console.log(response)
    })
  }
}
