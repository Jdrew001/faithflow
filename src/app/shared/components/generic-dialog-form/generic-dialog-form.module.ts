import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenericDialogFormComponent } from './generic-dialog-form.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputFieldComponent } from './fields/input/input.component';
import { DropdownComponent } from './fields/dropdown/dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { FieldRendererService } from './factory/services/field-renderer.service';
import { FieldMapperService } from './services/field-mapper.service';
import { FormConfigService } from './services/form-config.service';
import { FormDialogService } from './services/form-dialog.service';
import { InputFieldRenderer } from './factory/renders/input-field-renderer';
import { DropdownFieldRenderer } from './factory/renders/dropdown-field-renderer';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    GenericDialogFormComponent,
    InputFieldComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [
    InputFieldRenderer,
    DropdownFieldRenderer,
    FieldRendererService,
    FieldMapperService,
    FormConfigService,
    FormDialogService,
    DialogService
  ],
  exports: [
    GenericDialogFormComponent,
    DynamicDialogModule,
    DropdownModule
  ]
})
export class GenericDialogFormModule { }
