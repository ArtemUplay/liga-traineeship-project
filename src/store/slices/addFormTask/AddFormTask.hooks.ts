import { useAppSelector } from 'src/store/hooks';

export const useAddTaskFormSlice = () => {
  const newTask = useAppSelector((state) => state.addFormTask.newTask);
  const isAddFormLoading = useAppSelector((state) => state.addFormTask.isLoading);
  const errorAddForm = useAppSelector((state) => state.addFormTask.error);

  return {
    newTask,
    isAddFormLoading,
    errorAddForm,
  };
};
