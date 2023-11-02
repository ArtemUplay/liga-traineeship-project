export interface ITask {
  id: string;
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
}

export const tasks: ITask[] = [
  {
    id: '1',
    name: 'Task 1',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam.',
    isImportant: true,
    isCompleted: false,
  },
  {
    id: '2',
    name: 'Task 2',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam.',
    isImportant: false,
    isCompleted: true,
  },
  {
    id: '3',
    name: 'Task 3',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam.',
    isImportant: true,
    isCompleted: true,
  },
  {
    id: '4',
    name: 'Task 4',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam.',
    isImportant: false,
    isCompleted: false,
  },
];
