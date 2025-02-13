import { Injectable, Type } from '@angular/core';
import { IFieldRenderer } from '../IFieldRenderer';
import { DropdownField } from '../../models/dropdown-field';
import { DropdownComponent } from '../../fields/dropdown/dropdown.component';

@Injectable({ providedIn: 'root' })
export class DropdownFieldRenderer implements IFieldRenderer {
  supports(field: DropdownField): boolean {
    return field instanceof DropdownField;
  }

  getComponent(): Type<any> {
    return DropdownComponent;
  }
}
