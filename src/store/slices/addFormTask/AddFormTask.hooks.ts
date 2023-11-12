import { useAppSelector } from 'src/store/hooks';

export const useAddTaskFormSlice = () => {
  const newTask = useAppSelector((state) => state.addFormTask.newTask);
  const isLoading = useAppSelector((state) => state.addFormTask.isLoading);
  const error = useAppSelector((state) => state.addFormTask.error);

  return {
    newTask,
    isLoading,
    error,
  };
};
