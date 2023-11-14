import { Typography } from '@mui/material';
import { Task, StyledTaskList } from 'src/pages/tasksPage/components';
import { useTasksSlice } from 'src/store';
import { Loader } from 'src/components/Loader';

export const TaskList = () => {
  const { tasks, isLoading, error } = useTasksSlice();

  return (
    <StyledTaskList>
      {error ? (
        <Typography variant="h5" color="error">
          {error}
        </Typography>
      ) : (
        <Loader isLoading={isLoading}>
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return <Task key={task.id} {...task} />;
            })
          ) : (
            <Typography variant="h5">Task list is empty</Typography>
          )}
        </Loader>
      )}
    </StyledTaskList>
  );
};
