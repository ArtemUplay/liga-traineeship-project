import { FILTER } from 'constants/constants';

export interface ITask {
  id: number;
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
}

export interface IEditTask {
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
}

export type FiltersType = typeof FILTER[keyof typeof FILTER];

export interface ISearchForm {
  searchValue: string;
  filterType: FiltersType;
}
