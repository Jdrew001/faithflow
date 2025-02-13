import { ValidatorFn, Validators } from '@angular/forms';

export abstract class BaseField<T> {
  constructor(
    public type: FieldType,
    public key: string,
    public label: string,
    public placeholder: string,
    public value?: T,
    public validation?: Validation[],
    public options?: any[]) {}

  abstract getControlType(): string;
  abstract getControlConfig(): any;
  extractValidation(): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if (this.validation) {
      this.validation.forEach(validation => {
        switch (validation.type) {
          case ValidationType.REQUIRED:
            validators.push(Validators.required);
            break;
          case ValidationType.EMAIL:
            validators.push(Validators.email);
            break;
          case ValidationType.MIN_LENGTH:
            validators.push(Validators.minLength(validation.value as number));
            break;
          case ValidationType.MAX_LENGTH:
            validators.push(Validators.maxLength(validation.value as number));
            break;
          case ValidationType.PATTERN:
            validators.push(Validators.pattern(validation.value as string));
            break;
        }
      });
    }
    return validators;
  }
}

export enum FieldType {
  INPUT = 'input',
  DROPDOWN = 'dropdown',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  DATEPICKER = 'datepicker',
  TIMEPICKER = 'timepicker',
  TEXTAREA = 'textarea'
}

export enum ValidationType {
  REQUIRED = 'required',
  EMAIL = 'email',
  MIN_LENGTH = 'minLength',
  MAX_LENGTH = 'maxLength',
  PATTERN = 'pattern'
}

export interface Validation {
  type: ValidationType;
  value: string | number | boolean;
  message: string;
}
