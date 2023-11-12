import { useAppSelector } from 'src/store/hooks/hooks';

export const useTasksSlice = () => {
  const isLoading = useAppSelector((store) => store.tasks.isLoading);
  const tasks = useAppSelector((store) => store.tasks.tasksArray);
  const error = useAppSelector((store) => store.tasks.error);

  return {
    isLoading,
    tasks,
    error,
  };
};
