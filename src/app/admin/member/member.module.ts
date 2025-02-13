import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { MemberService } from './services/member.service';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    MemberComponent,
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModule
  ],
  providers: [
    MemberService
  ]
})
export class MemberModule { }
