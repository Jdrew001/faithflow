import { Injectable } from '@angular/core';
import { BaseField, FieldType } from '../models/base-field';
import { DropdownField } from '../models/dropdown-field';
import { InputField } from '../models/InputField';
import { objMapper } from '../constants/obj-mapper';

@Injectable({
  providedIn: 'root'
})
export class FieldMapperService {

  constructor() {}

  /**
   * Maps JSON field definitions to BaseField instances.
   */
  mapJsonToFields(jsonFields: any[]): BaseField<any>[] {
    console.log(jsonFields);
    return jsonFields.map(field => objMapper[(field?.type as FieldType)](field));
  }
}
