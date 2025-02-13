import { Component, Inject, Input } from '@angular/core';
import { DropdownField } from '../../models/dropdown-field';
import { FormControl } from '@angular/forms';
import { InputField } from '../../models/InputField';

@Component({
  selector: 'app-dropdown',
  standalone: false,
  template: `
    <div class="field">
      <label>{{ field?.label }}</label>
      <p-dropdown [options]="field?.options" [formControl]="control" placeholder="Select an option"></p-dropdown>
    </div>
  `,
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() field!: InputField;
  @Input() control!: FormControl;
}
