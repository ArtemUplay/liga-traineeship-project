import { ChangeEventHandler, FormEvent, memo, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IconButton } from '@mui/material';
import { Clear } from '@mui/icons-material';
import {
  FormSearch,
  SubmitButton,
  validationSchema,
  ISearchFormValidation,
} from 'src/pages/tasksPage/components/searchForm';
import { FilterButtons } from 'src/pages/tasksPage/components/filterButtons';
import { FILTER } from 'constants/constants';
import { FiltersType } from 'types/app';
import { useAppDispatch, fetchTasks, useTasksSlice } from 'src/store';
import { SearchInput } from 'src/components/SearchInput';

const SearchFormComponent = () => {
  const { isLoading } = useTasksSlice();
  const dispatch = useAppDispatch();

  const defaultValues: ISearchFormValidation = {
    searchValue: '',
    filter: FILTER.ALL,
  };

  const { handleSubmit, control, setValue } = useForm<ISearchFormValidation>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = useCallback((evt) => {
    setValue('searchValue', evt.target.value);
  }, []);

  const onFilterChange = useCallback((filter: FiltersType) => {
    setValue('filter', filter);
  }, []);

  const onResetHandler = () => {
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
  };

  return (
    <FormSearch component={'form'} onSubmit={submitHandler}>
      <Controller
        control={control}
        name="searchValue"
        render={({ field, fieldState: { error } }) => (
          <SearchInput
            error={!!error?.message}
            disabled={isLoading}
            value={field.value}
            onChange={onSearchChange}
            onReset={onResetHandler}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => onResetHandler()}>
                  <Clear />
                </IconButton>
              ),
            }}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="filter"
        render={({ field }) => <FilterButtons disabled={isLoading} tasksType={field.value} onChange={onFilterChange} />}
      />
      <SubmitButton type="submit">Find</SubmitButton>
    </FormSearch>
  );
};

export const SearchForm = memo(SearchFormComponent);
