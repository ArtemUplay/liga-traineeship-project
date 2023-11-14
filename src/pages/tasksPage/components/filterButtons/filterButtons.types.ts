import { FiltersType } from 'types/app';

export interface IFilterButtonsProps {
  disabled: boolean;
  tasksType: FiltersType;
  onChange: (tasksType: FiltersType) => void;
}

export interface IFilterButtonProps {
  active: string;
}
