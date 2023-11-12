import { FiltersType } from 'types/app';

export interface IFilterButtonsProps {
  disabled: boolean;
  tasksType: FiltersType;
  onChange: (tasksType: FiltersType) => void;
  isInvalid: string;
}
