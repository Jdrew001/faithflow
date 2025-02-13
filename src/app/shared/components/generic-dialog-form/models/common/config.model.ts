import { BaseField } from '../base-field';

export interface FormConfigJSON {
  id: string;
  formId: string;
  fieldsJson: BaseField<any>[];
}
