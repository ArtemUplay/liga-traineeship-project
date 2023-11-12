import { useNavigate, useParams } from 'react-router-dom';
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import styles from './TaskFormPage.module.scss';
import { Checkbox, Loader, TextField } from 'components/index';
import { Paths } from 'constants/constants';
import { useAppDispatch } from 'src/store/hooks/hooks';
import { fetchCreateTask, resetNewTask, useAddTaskFormSlice } from 'src/store/slices/addFormTask';
import { fetchTaskById, fetchUpdateEditFormTask } from 'src/store/slices/editFormTask/EditFromTask.thunks';
import { useEditFormTaskSlice } from 'src/store/slices/editFormTask/editFormTask.hooks';

export const TaskFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoadingEditForm, currentTask, errorEditForm } = useEditFormTaskSlice();
  const { isAddFormLoading, errorAddForm } = useAddTaskFormSlice();

  const [inputTaskNameValue, setInputTaskNameValue] = useState<string>('');
  const [inputTaskInfoValue, setInputTaskInfoValue] = useState<string>('');
  const [checkboxTaskIsImportantValue, setCheckboxTaskIsImportantValue] = useState<boolean>(false);
  const [checkboxTaskIsCompletedValue, setCheckboxTaskIsCompletedValue] = useState<boolean>(false);
  const [submitButtonClicked, setSubmitButtonClicked] = useState<boolean>(false);
  const [isLoadingFinished, setIsLoadingFinished] = useState<boolean>(false);

  const navigateAfterLoading = () => {
    if ((!isLoadingEditForm || !isAddFormLoading) && isLoadingFinished && (!errorEditForm || !errorAddForm)) {
      navigate(Paths.TASK_LIST, { replace: true });
    }
  };

  useEffect(() => {
    navigateAfterLoading();
  }, [isLoadingEditForm, isAddFormLoading]);

  useEffect(() => {
    if (id) {
      dispatch(fetchTaskById(+id));
    }
  }, []);

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

  useEffect(() => {
    if (currentTask) {
      setInputTaskNameValue(currentTask.name);
      setInputTaskInfoValue(currentTask.info);
      setCheckboxTaskIsImportantValue(currentTask.isImportant);
      setCheckboxTaskIsCompletedValue(currentTask.isCompleted);
    }
  }, [currentTask]);

  const submitHandler = async (evt: FormEvent) => {
    evt.preventDefault();
    setSubmitButtonClicked(true);

    if (!id) {
      dispatch(
        fetchCreateTask({
          name: inputTaskNameValue,
          info: inputTaskInfoValue,
          isImportant: checkboxTaskIsImportantValue,
        })
      );
      dispatch(resetNewTask());
    } else {
      dispatch(
        fetchUpdateEditFormTask(+id, {
          name: inputTaskNameValue,
          info: inputTaskInfoValue,
          isImportant: checkboxTaskIsImportantValue,
          isCompleted: checkboxTaskIsCompletedValue,
        })
      );
    }

    setIsLoadingFinished(true);
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
        <Loader isLoading={isLoadingEditForm || isAddFormLoading}>
          <button
            type="submit"
            className={`${styles.form__button} ${
              inputTaskInfoValue === '' && inputTaskInfoValue === '' ? styles.form__button_disabled : ''
            }`}
            disabled={inputTaskInfoValue === '' && inputTaskInfoValue === ''}>
            {errorEditForm || errorAddForm
              ? `${errorEditForm?.message || errorAddForm?.message}`
              : id
              ? 'Edit task'
              : 'Add task'}
          </button>
        </Loader>
      </form>
    </>
  );
};
