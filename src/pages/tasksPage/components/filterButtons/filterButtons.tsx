import { memo } from 'react';
import { FilterButton, StyledButtonGroup, IFilterButtonsProps } from 'src/pages/tasksPage/components/filterButtons';
import { FILTER } from 'constants/constants';
import { FiltersType } from 'types/app';

const FilterButtonsComponent = ({ onChange, tasksType, disabled }: IFilterButtonsProps) => {
  const onFilterChange = (evt: React.MouseEvent<HTMLDivElement> & { target: HTMLButtonElement }) => {
    if (!disabled) onChange(evt.target.textContent as FiltersType);
  };

  return (
    <StyledButtonGroup onClick={onFilterChange}>
      <FilterButton active={String(tasksType === FILTER.ALL)} type="button">
        {FILTER.ALL}
      </FilterButton>
      <FilterButton active={String(tasksType === FILTER.ACTIVE)} type="button">
        {FILTER.ACTIVE}
      </FilterButton>
      <FilterButton active={String(tasksType === FILTER.DONE)} type="button">
        {FILTER.DONE}
      </FilterButton>
      <FilterButton active={String(tasksType === FILTER.IMPORTANT)} type="button">
        {FILTER.IMPORTANT}
      </FilterButton>
    </StyledButtonGroup>
  );
};

export const FilterButtons = memo(FilterButtonsComponent);
