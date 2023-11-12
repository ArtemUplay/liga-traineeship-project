import { FormEvent, useState } from 'react';
import styles from './searchForm.module.scss';
import { SearchInput } from 'components/SearchInput';
import { FILTER } from 'constants/constants';
import { FiltersType } from 'types/app';
import { setSearchForm } from 'src/store/slices';
import { useAppDispatch } from 'src/store';
import { fetchTasks } from 'src/store/slices/Tasks';

export const SearchForm = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [filterButtonValue, setFilterButtonValue] = useState<FiltersType>(FILTER.ALL);

  const dispatch = useAppDispatch();

  const handleFilterButtonClick = (filter: FiltersType) => {
    setFilterButtonValue(filter);
  };

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault();

    dispatch(
      fetchTasks({
        searchValue: searchInputValue,
        filterType: filterButtonValue,
      })
    );
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <SearchInput value={searchInputValue} onChange={setSearchInputValue} />
      <div className={styles.form__buttons}>
        <button
          className={`${styles.form__button} ${filterButtonValue === FILTER.ALL ? styles.form__button_active : ''}`}
          type="button"
          onClick={() => handleFilterButtonClick(FILTER.ALL)}>
          {FILTER.ALL}
        </button>
        <button
          className={`${styles.form__button} ${filterButtonValue === FILTER.ACTIVE ? styles.form__button_active : ''}`}
          type="button"
          onClick={() => handleFilterButtonClick(FILTER.ACTIVE)}>
          {FILTER.ACTIVE}
        </button>
        <button
          className={`${styles.form__button} ${filterButtonValue === FILTER.DONE ? styles.form__button_active : ''}`}
          type="button"
          onClick={() => handleFilterButtonClick(FILTER.DONE)}>
          {FILTER.DONE}
        </button>
        <button
          className={`${styles.form__button} ${
            filterButtonValue === FILTER.IMPORTANT ? styles.form__button_active : ''
          }`}
          type="button"
          onClick={() => handleFilterButtonClick(FILTER.IMPORTANT)}>
          {FILTER.IMPORTANT}
        </button>
      </div>
      <button className={styles.form__button} type="submit">
        Find
      </button>
    </form>
  );
};
