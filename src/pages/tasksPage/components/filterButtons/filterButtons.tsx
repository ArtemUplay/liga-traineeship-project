import { memo } from 'react';
import { IFilterButtonsProps } from './filterButtons.types';
import styles from './filterButtons.module.scss';
import { FILTER } from 'constants/constants';
import { FiltersType } from 'types/app';

const FilterButtonsComponent = ({ onChange, tasksType, disabled, isInvalid }: IFilterButtonsProps) => {
  const onFilterChange = (evt: React.MouseEvent<HTMLDivElement> & { target: HTMLButtonElement }) => {
    if (!disabled) onChange(evt.target.textContent as FiltersType);
  };

  return (
    <div className={`${styles.form__buttons} ${isInvalid}`} onClick={onFilterChange}>
      <button
        className={`${styles.form__button} ${tasksType === FILTER.ALL ? styles.form__button_active : ''}`}
        type="button">
        {FILTER.ALL}
      </button>
      <button
        className={`${styles.form__button} ${tasksType === FILTER.ACTIVE ? styles.form__button_active : ''}`}
        type="button">
        {FILTER.ACTIVE}
      </button>
      <button
        className={`${styles.form__button} ${tasksType === FILTER.DONE ? styles.form__button_active : ''}`}
        type="button">
        {FILTER.DONE}
      </button>
      <button
        className={`${styles.form__button} ${tasksType === FILTER.IMPORTANT ? styles.form__button_active : ''}`}
        type="button">
        {FILTER.IMPORTANT}
      </button>
    </div>
  );
};

export const FilterButtons = memo(FilterButtonsComponent);
