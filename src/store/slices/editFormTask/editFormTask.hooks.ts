import { useAppSelector } from 'src/store/hooks';

export const useEditFormTaskSlice = () => {
  const isLoadingEditForm = useAppSelector((state) => state.editFormTask.isLoadingEditForm);
  const currentTask = useAppSelector((state) => state.editFormTask.editedTask);
  const errorEditForm = useAppSelector((state) => state.editFormTask.error);

  return {
    isLoadingEditForm,
    currentTask,
    errorEditForm,
  };
};
