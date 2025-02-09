export interface InlineFilterModel {
  id: string;
  label?: string;
  type: InlineFilterType;
  options: any[];
  selectedOption: any;
  multiple?: boolean;
  optionLabel?: string;
  optionValue?: string;
}

export enum InlineFilterType {
  SPLIT_BUTTON = 'splitButton'
}
