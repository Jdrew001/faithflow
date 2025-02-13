import { InputField } from '../models/InputField';
import { BaseField, FieldType } from '../models/base-field';
import { DropdownField } from '../models/dropdown-field';

export const objMapper = {
  [FieldType.INPUT]: (field: any) => new InputField(FieldType.INPUT, field.key, field.label, field.placeholder, '', field?.validation, []),
  [FieldType.DROPDOWN]: (field: any) => new DropdownField(FieldType.DROPDOWN, field.key, field.label, field.placeholder, '', field?.validation, field.options || []),
  [FieldType.CHECKBOX]: (field: any) => new InputField(FieldType.CHECKBOX, field.key, field.label, field.placeholder, '', field?.validation, []),
  [FieldType.TEXTAREA]: (field: any) => new InputField(FieldType.TEXTAREA, field.key, field.label, field.placeholder, '', field?.validation, []),
  [FieldType.DATEPICKER]: (field: any) => new InputField(FieldType.DATEPICKER, field.key, field.label, field.placeholder, '', field?.validation, []),
  [FieldType.TIMEPICKER]: (field: any) => new InputField(FieldType.TIMEPICKER, field.key, field.label, field.placeholder, '', field?.validation, []),
  [FieldType.RADIO]: (field: any) => new InputField(FieldType.RADIO, field.key, field.label, field.placeholder, '', field?.validation, []),
}
