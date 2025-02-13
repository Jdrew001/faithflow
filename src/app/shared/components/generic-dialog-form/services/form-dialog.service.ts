import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BaseField } from '../models/base-field';
import { GenericDialogFormComponent } from '../generic-dialog-form.component';

@Injectable({ providedIn: 'root' })
export class FormDialogService {
  public dialogRef!: DynamicDialogRef;

  constructor(private dialogService: DialogService) {}

  openForm(header: string, data: string, width: string = '50vw') {
    this.dialogRef = this.dialogService.open(GenericDialogFormComponent, {
      header,
      width,
      data
    });

    return this.dialogRef.onClose;
  }

  closeForm() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
