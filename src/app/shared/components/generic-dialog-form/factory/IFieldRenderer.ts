import { Type } from '@angular/core';
import { BaseField } from '../models/base-field';

export interface IFieldRenderer {
  supports(field: BaseField<any>): boolean;
  getComponent(): Type<any>;
}
