export interface ITaskButtonProps {
  id: string;
  isImportantValue: boolean;
  isCompletedValue: boolean;
  setIsImportantValue: (value: boolean) => void;
  setIsCompletedValue: (value: boolean) => void;
}
