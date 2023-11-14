export interface ITaskProps {
  id: number;
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
}

export interface IStyledListItemProps {
  completed: string;
}

export interface IStyledListNameProps {
  completed: string;
  hovered: string;
}

export interface IStyledListItemInfoProps {
  completed: string;
  hovered: string;
}
