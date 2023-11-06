import { useNavigate, useParams } from 'react-router-dom';
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import styles from './TaskEditPage.module.scss';
import { Checkbox, TextField } from 'components/index';
import { Paths } from 'constants/constants';
import { addEditedTask, addTask, editTask, postNewTask, resetEditedTask, resetNewTask } from 'src/store/slices';
import { useAppDispatch, useAppSelector } from 'src/store/hooks/hooks';

export const TaskEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasksArray);

  const [inputTaskNameValue, setInputTaskNameValue] = useState<string>('');
  const [inputTaskInfoValue, setInputTaskInfoValue] = useState<string>('');
  const [checkboxTaskIsImportantValue, setCheckboxTaskIsImportantValue] = useState<boolean>(false);
  const [checkboxTaskIsCompletedValue, setCheckboxTaskIsCompletedValue] = useState<boolean>(false);
  const [submitButtonClicked, setSubmitButtonClicked] = useState<boolean>(false);

  const onInputTaskNameChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setInputTaskNameValue(evt.target.value);
  }, []);

  const onInputTaskInfoChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setInputTaskInfoValue(evt.target.value);
  }, []);

  const onCheckboxTaskIsImportantChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setCheckboxTaskIsImportantValue(evt.target.checked);
  }, []);

  const onCheckboxTaskIsCompletedChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setCheckboxTaskIsCompletedValue(evt.target.checked);
  }, []);

  const currentTask = tasks.find((task) => {
    return task.id === id;
  });

  useEffect(() => {
    if (currentTask) {
      setInputTaskNameValue(currentTask.name);
      setInputTaskInfoValue(currentTask.info);
      setCheckboxTaskIsImportantValue(currentTask.isImportant);
      setCheckboxTaskIsCompletedValue(currentTask.isCompleted);
    }
  }, []);

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    setSubmitButtonClicked(true);

    if (inputTaskInfoValue && inputTaskInfoValue) {
      if (!id) {
        dispatch(
          postNewTask({ name: inputTaskNameValue, info: inputTaskInfoValue, isImportant: checkboxTaskIsImportantValue })
        );
        // Данный экшен добавлен временно, потому что пока нет запросов на сервер
        dispatch(
          addTask({ name: inputTaskNameValue, info: inputTaskInfoValue, isImportant: checkboxTaskIsImportantValue })
        );
        dispatch(resetNewTask());
      } else {
        dispatch(
          addEditedTask({
            id,
            name: inputTaskNameValue,
            info: inputTaskInfoValue,
            isImportant: checkboxTaskIsImportantValue,
            isCompleted: checkboxTaskIsCompletedValue,
          })
        );
        // Данный экшен добавлен временно, потому что пока нет запросов на сервер
        dispatch(
          editTask({
            id,
            name: inputTaskNameValue,
            info: inputTaskInfoValue,
            isImportant: checkboxTaskIsImportantValue,
            isCompleted: checkboxTaskIsCompletedValue,
          })
        );
        dispatch(resetEditedTask());
      }

      navigate(Paths.TASK_LIST, { replace: true });
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <TextField
          label="Task name"
          value={inputTaskNameValue}
          onChange={onInputTaskNameChange}
          errorText={!inputTaskNameValue && submitButtonClicked ? 'Type name of the task' : ''}
        />
        <TextField
          label="Task info"
          value={inputTaskInfoValue}
          onChange={onInputTaskInfoChange}
          errorText={!inputTaskInfoValue && submitButtonClicked ? 'Type info of the task' : ''}
        />
        <Checkbox
          label="isImportant"
          checked={checkboxTaskIsImportantValue}
          onChange={onCheckboxTaskIsImportantChange}
        />
        {id && (
          <Checkbox
            label="isCompleted"
            checked={checkboxTaskIsCompletedValue}
            onChange={onCheckboxTaskIsCompletedChange}
          />
        )}
        <button type="submit" className={styles.form__button}>
          {id ? 'Edit task' : 'Add task'}
        </button>
      </form>
    </>
  );
};
