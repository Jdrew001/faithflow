import { Injectable } from '@angular/core';
import { HttpHelperService } from '../../../../core/services/http-helper.service';
import { FormIdConstant } from '../models/common/form-id.constant';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {

  constructor(
    private httpHelperService: HttpHelperService,
  ) { }

  getFormConfig(formId: FormIdConstant) {
    return this.httpHelperService.get<any>(`form-configuration/getFormConfig/${formId}`);
  }
}
