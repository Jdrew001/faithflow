import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class GenericFormService<T> {
  private _formGroup!: FormGroup;

  // Get the raw value of the form as the generic model
  get value(): T {
    return this._formGroup.getRawValue() as T;
  }

  // Check if the form is valid
  get isValid(): boolean {
    return !this._formGroup.invalid;
  }

  // Get the form group
  get formGroup(): FormGroup {
    return this._formGroup;
  }

  // Initialize the form dynamically
  initializeForm(controls: { [key: string]: any }): void {
    const group: { [key: string]: FormControl } = {};

    Object.keys(controls).forEach((key) => {
      group[key] = new FormControl(
        controls[key].value || '', // Default value
        controls[key].validators || [] // Validators
      );
    });

    this._formGroup = new FormGroup(group);
  }

  // Reset the form to its initial state
  resetForm(): void {
    this._formGroup.reset();
  }

  // Patch form values dynamically
  patchForm(values: Partial<T>): void {
    this._formGroup.patchValue(values);
  }
}