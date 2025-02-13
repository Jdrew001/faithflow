import { Injectable, Type } from '@angular/core';
import { BaseField } from '../../models/base-field';
import { IFieldRenderer } from '../IFieldRenderer';
import { InputFieldRenderer } from '../renders/input-field-renderer';
import { DropdownFieldRenderer } from '../renders/dropdown-field-renderer';

@Injectable({ providedIn: 'root' })
export class FieldRendererService {
  private renderers: IFieldRenderer[] = [];

  constructor(
    inputRenderer: InputFieldRenderer,
    dropdownRenderer: DropdownFieldRenderer
  ) {
    this.renderers = [inputRenderer, dropdownRenderer];
  }

  getRenderer(field: BaseField<any>): Type<any> | null {
    const renderer = this.renderers.find(r => r.supports(field));
    return renderer ? renderer.getComponent() : null;
  }
}
