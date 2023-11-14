import { useNavigate, useParams } from 'react-router-dom';
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { validationSchema, ITaskFormValidation, FormSearch } from 'src/pages/TaskFormPage/TaskForm';
import { Loader, PageButton } from 'src/components';
import { Paths } from 'constants/constants';
import {
  fetchCreateTask,
  useAddTaskFormSlice,
  fetchTaskById,
  fetchUpdateEditFormTask,
  useEditFormTaskSlice,
  useAppDispatch,
} from 'src/store';
import { IAddTaskForm, IEditTaskForm } from 'types/app';

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

  const onTaskInputNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue('name', event.target.value);
  }, []);

  const onTaskInputInfoChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue('info', event.target.value);
  }, []);

  const onTaskIsImportantCheckboxChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue('isImportant', event.target.checked);
  }, []);

  const onTaskIsCompletedCheckboxChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue('isCompleted', event.target.checked);
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
    <FormSearch component={'form'} onSubmit={submitHandler}>
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState: { error } }) => (
          <TextField
            label="Task name"
            error={!!error}
            value={field.value}
            onChange={onTaskInputNameChange}
            placeholder="Clean room"
            disabled={isLoadingEditForm || isAddFormLoading}
            helperText={error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="info"
        render={({ field, fieldState: { error } }) => (
          <TextField
            label="Task info"
            error={!!error}
            value={field.value}
            onChange={onTaskInputInfoChange}
            placeholder="Clean my room"
            disabled={isLoadingEditForm || isAddFormLoading}
            helperText={error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="isImportant"
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                disabled={isLoadingEditForm || isAddFormLoading || watch('isCompleted')}
                checked={field.value}
                onChange={onTaskIsImportantCheckboxChange}
              />
            }
            label="Is important"
          />
        )}
      />

      {id && (
        <Controller
          control={control}
          name="isCompleted"
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  disabled={isLoadingEditForm || isAddFormLoading}
                  checked={field.value}
                  onChange={onTaskIsCompletedCheckboxChange}
                />
              }
              label="Is completed"
            />
          )}
        />
      )}
      <Loader isLoading={isLoadingEditForm || isAddFormLoading}>
        <PageButton type="submit" disabled={buttonDisabled}>
          {errorEditForm || errorAddForm ? `${errorEditForm || errorAddForm}` : id ? 'Edit task' : 'Add task'}
        </PageButton>
      </Loader>
    </FormSearch>
  );
};
