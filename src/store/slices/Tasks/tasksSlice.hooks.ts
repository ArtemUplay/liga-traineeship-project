import { useAppSelector } from 'src/store/hooks/hooks';

export const useTasksSlice = () => {
  const isOpenModal = useAppSelector((store) => store.tasks.isOpenModal);
  const taskInModal = useAppSelector((store) => store.tasks.taskInModal);
  const isLoading = useAppSelector((store) => store.tasks.isLoading);
  const tasks = useAppSelector((store) => store.tasks.tasksArray);
  const error = useAppSelector((store) => store.tasks.error);

  return {
    taskInModal,
    isOpenModal,
    isLoading,
    tasks,
    error,
  };
};
