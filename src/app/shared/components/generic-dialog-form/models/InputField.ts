import { BaseField, FieldType, Validation } from './base-field';

export class InputField extends BaseField<string> {
  constructor(
    type: FieldType,
    key: string,
    label: string,
    placeholder: string,
    value: string,
    validation: Validation[],
    options: any[]
  ) {
    super(type, key, label, placeholder, value, validation, options);
  }

  getControlType() {
    return this.type;
  }

  getControlConfig() {
    return {
      type: this.type,
      key: this.key,
      label: this.label,
      placeholder: this.placeholder,
      value: this.value,
      validation: this.extractValidation(),
      options: this.options
    };
  }
}
