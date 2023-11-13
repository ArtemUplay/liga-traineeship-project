import { useNavigate, useParams } from 'react-router-dom';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './TaskForm.module.scss';
import { ITaskFormValidation } from './TaskForm.types';
import { validationSchema } from './TaskForm.schema';
import { Checkbox, Loader, TextField } from 'components/index';
import { Paths } from 'constants/constants';
import {
  fetchCreateTask,
  resetNewTask,
  useAddTaskFormSlice,
  fetchTaskById,
  fetchUpdateEditFormTask,
  useEditFormTaskSlice,
  resetEditedTask,
} from 'src/store/slices';
import { IAddTaskForm, IEditTaskForm } from 'types/app';
import { useAppDispatch } from 'src/store';

export const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoadingEditForm, currentTask, errorEditForm } = useEditFormTaskSlice();
  const { isAddFormLoading, errorAddForm } = useAddTaskFormSlice();

  const [isLoadingFinished, setIsLoadingFinished] = useState<boolean>(false);

  const navigateAfterLoading = () => {
    if (
      (!isLoadingEditForm || !isAddFormLoading) &&
      isLoadingFinished &&
      errorEditForm === null &&
      errorAddForm === null
    ) {
      navigate(Paths.TASK_LIST, { replace: true });
    }
  };

  const defaultValues: ITaskFormValidation = {
    name: '',
    info: '',
    isImportant: false,
    isCompleted: false,
  };

  const { handleSubmit, control, setValue, watch } = useForm<ITaskFormValidation>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onTaskInputNameChange = useCallback((value: string) => {
    setValue('name', value);
  }, []);

  const onTaskInputInfoChange = useCallback((value: string) => {
    setValue('info', value);
  }, []);

  const onTaskIsImportantCheckboxChange = useCallback((value: boolean) => {
    setValue('isImportant', value);
  }, []);

  const onTaskIsCompletedCheckboxChange = useCallback((value: boolean) => {
    setValue('isCompleted', value);
  }, []);

  const isCompleted = watch('isCompleted');
  const name = watch('name');
  const info = watch('info');
  const isInputFilled = !(name && info);
  const buttonDisabled =
    isInputFilled || errorEditForm !== null || errorAddForm !== null || isAddFormLoading || isLoadingEditForm;

  useEffect(() => {
    navigateAfterLoading();
  }, [isLoadingEditForm, isAddFormLoading]);

  useEffect(() => {
    if (id) {
      dispatch(fetchTaskById(+id));
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      setValue('name', currentTask.name || '');
      setValue('info', currentTask.info || '');
      setValue('isImportant', currentTask.isImportant || false);
      setValue('isCompleted', currentTask.isCompleted || false);
    }
  }, [currentTask]);

  useEffect(() => {
    if (isCompleted) {
      setValue('isImportant', false);
    }
  }, [isCompleted]);

  const submitHandler = async (evt: FormEvent) => {
    evt.preventDefault();

    if (!id) {
      await handleSubmit(async (data: IAddTaskForm) => {
        dispatch(
          fetchCreateTask({
            name: data.name,
            info: data.info,
            isImportant: data.isImportant,
          })
        );
      })();
    } else {
      await handleSubmit((data: IEditTaskForm) => {
        dispatch(
          fetchUpdateEditFormTask(+id, {
            name: data.name,
            info: data.info,
            isImportant: data.isImportant,
            isCompleted: data.isCompleted,
          })
        );
      })();
    }

    setIsLoadingFinished(true);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState: { error } }) => (
          <TextField
            label="Task name"
            value={field.value}
            onChange={onTaskInputNameChange}
            errorText={error?.message}
            placeholder="Clean room"
            isInvalid={error?.message ? 'is-invalid' : ''}
            disabled={isLoadingEditForm || isAddFormLoading}
          />
        )}
      />

      <Controller
        control={control}
        name="info"
        render={({ field, fieldState: { error } }) => (
          <TextField
            label="Task info"
            value={field.value}
            onChange={onTaskInputInfoChange}
            errorText={error?.message}
            placeholder="Clean my room"
            isInvalid={error?.message ? 'is-invalid' : ''}
            disabled={isLoadingEditForm || isAddFormLoading}
          />
        )}
      />

      <Controller
        control={control}
        name="isImportant"
        render={({ field, fieldState: { error } }) => (
          <div>
            <Checkbox
              disabled={isLoadingEditForm || isAddFormLoading || watch('isCompleted')}
              label="isImportant"
              checked={field.value}
              onChange={onTaskIsImportantCheckboxChange}
            />
            <div>{error?.message}</div>
          </div>
        )}
      />

      {id && (
        <Controller
          control={control}
          name="isCompleted"
          render={({ field, fieldState: { error } }) => (
            <div>
              <Checkbox
                disabled={isLoadingEditForm || isAddFormLoading}
                label="isCompleted"
                checked={field.value}
                onChange={onTaskIsCompletedCheckboxChange}
              />
              <div>{error?.message}</div>
            </div>
          )}
        />
      )}
      <Loader isLoading={isLoadingEditForm || isAddFormLoading}>
        <button
          type="submit"
          className={`${styles.form__button} ${buttonDisabled ? styles.form__button_disabled : ''}`}
          disabled={buttonDisabled}>
          {errorEditForm || errorAddForm ? `${errorEditForm || errorAddForm}` : id ? 'Edit task' : 'Add task'}
        </button>
      </Loader>
    </form>
  );
};
