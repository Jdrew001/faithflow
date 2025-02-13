import { Injectable, Type } from '@angular/core';
import { IFieldRenderer } from '../IFieldRenderer';
import { InputField } from '../../models/InputField';
import { InputFieldComponent } from '../../fields/input/input.component';

@Injectable({ providedIn: 'root' })
export class InputFieldRenderer implements IFieldRenderer {
  supports(field: InputField): boolean {
    return field instanceof InputField;
  }

  getComponent(): Type<any> {
    return InputFieldComponent;
  }
}
