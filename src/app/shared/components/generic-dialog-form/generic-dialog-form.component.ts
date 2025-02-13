import { Component, Injector } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseField } from './models/base-field';
import { FieldRendererService } from './factory/services/field-renderer.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FieldMapperService } from './services/field-mapper.service';
import { FormConfigService } from './services/form-config.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-generic-dialog-form',
  standalone: false,
  templateUrl: './generic-dialog-form.component.html',
  styleUrl: './generic-dialog-form.component.scss'
})
export class GenericDialogFormComponent {
  protected fields: BaseField<any>[] = [];
  protected formId!: string;
  form: FormGroup = new FormGroup({});

  constructor(
    private fieldRendererService: FieldRendererService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private fieldMapperService: FieldMapperService,
    private formConfigService: FormConfigService
  ) {}

  ngOnInit() {
    if (this.config.data) {
      this.formConfigService.getFormConfig(this.config.data).pipe(
        catchError(err => this.handleError(err))
      ).subscribe((response: any) => this.handleInitResponse(response));
    }
  }

  private handleInitResponse(response: any) {
    if (response && response.fields) {
      this.fields = this.fieldMapperService.mapJsonToFields(response.fields || []);
      this.formId = response.formId;
      this.initializeForm();
    }
  }

  private handleError(err: any) {
    console.error('Error fetching form config:', err);
    this.ref.close();
    return EMPTY;
  }

  private initializeForm() {
    let group: any = {};

    this.fields.forEach(field => {
      this.form.addControl(field.key, new FormControl(field.value, field.extractValidation()));
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
      this.ref.close(this.form.value);

    }
  }

  getComponentForField(field: BaseField<any>) {
    return this.fieldRendererService.getRenderer(field);
  }

  createInjector(field: BaseField<any>): Injector {
    return Injector.create({
      providers: [
        { provide: 'field', useValue: field },
        { provide: 'control', useValue: this.form.controls[field.key] }
      ]
    });
  }
}
