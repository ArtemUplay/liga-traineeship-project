import { FormEvent, memo, useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FilterButtons } from '../filterButtons/filterButtons';
import styles from './searchForm.module.scss';
import { ISearchFormValidation } from './searchForm.types';
import { validationSchema } from './searchForm.schema';
import { SearchInput } from 'components/SearchInput';
import { FILTER } from 'constants/constants';
import { FiltersType } from 'types/app';
import { useAppDispatch } from 'src/store';
import { fetchTasks, useTasksSlice } from 'src/store/slices/Tasks';

const SearchFormComponent = () => {
  const { isLoading } = useTasksSlice();
  const dispatch = useAppDispatch();

  const defaultValues: ISearchFormValidation = {
    searchValue: '',
    filter: FILTER.ALL,
  };

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const { handleSubmit, control, setValue } = useForm<ISearchFormValidation>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSearchChange = useCallback((value: string) => {
    setValue('searchValue', value);
  }, []);

  const onFilterChange = useCallback((filter: FiltersType) => {
    setValue('filter', filter);
  }, []);

  const onResetHandler = () => {
    if (isSubmitted) {
      dispatch(
        fetchTasks({
          searchValue: '',
          filterType: FILTER.ALL,
        })
      );
    }

    setValue('searchValue', '');
  };

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    handleSubmit((data: ISearchFormValidation) => {
      dispatch(
        fetchTasks({
          searchValue: data.searchValue,
          filterType: data.filter,
        })
      );
    })();

    setIsSubmitted(true);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Controller
        control={control}
        name="searchValue"
        render={({ field, fieldState: { error } }) => (
          <div>
            <SearchInput
              disabled={isLoading}
              value={field.value}
              onChange={onSearchChange}
              onReset={onResetHandler}
              isInvalid={error?.message ? 'is-invalid' : ''}
            />
            <div>{error?.message}</div>
          </div>
        )}
      />
      <Controller
        control={control}
        name="filter"
        render={({ field, fieldState: { error } }) => (
          <div>
            <FilterButtons
              disabled={isLoading}
              tasksType={field.value}
              onChange={onFilterChange}
              isInvalid={error?.message ? 'is-invalid' : ''}
            />
            <div>{error?.message}</div>
          </div>
        )}
      />
      <button className={styles.form__button} type="submit">
        Find
      </button>
    </form>
  );
};

export const SearchForm = memo(SearchFormComponent);
