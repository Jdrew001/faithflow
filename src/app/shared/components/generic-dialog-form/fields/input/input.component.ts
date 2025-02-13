import { Component, Inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputField } from '../../models/InputField';

@Component({
  selector: 'app-input-field',
  standalone: false,
  template: `
    <div class="field">
      <label>{{ field?.label }}</label>
      <input pInputText [type]="field?.type" [formControl]="control" />
    </div>
  `,
  styleUrls: ['./input.component.scss']
})
export class InputFieldComponent {
  @Input() field!: InputField;
  @Input() control!: FormControl;
}
