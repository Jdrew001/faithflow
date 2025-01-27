import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    CardModule,
    FloatLabelModule,
    ToastModule
  ],
  providers: [
    MessageService
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    CardModule,
    FloatLabelModule
  ]
})
export class SharedModule { }
