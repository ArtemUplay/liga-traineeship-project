export enum Paths {
  TASK_LIST = '/',
  FORM_EDIT_ADD_TASK = '/form_edit',
  FORM_EDIT_EDIT_TASK = '/form_edit/:id',
  NOT_FOUND = '*',
}

export const FILTER = {
  ALL: 'All',
  ACTIVE: 'Active',
  DONE: 'Done',
  IMPORTANT: 'Important',
} as const;
