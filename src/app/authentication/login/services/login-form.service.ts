import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../models/login.model';
import { GenericFormService } from '../../../core/services/generic-form.service';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService extends GenericFormService<LoginModel> {
  constructor() {
    super();

    // Initialize the form with controls
    this.initializeForm({
      email: { value: '', validators: [Validators.required, Validators.email] },
      password: { value: '', validators: [Validators.required] },
    });
  }
}
