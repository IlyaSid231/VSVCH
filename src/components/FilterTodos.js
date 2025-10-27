import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setFilter } from '../store/todosSlice';

const FilterTodos = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todos.filter);

  return (
    <div className="filter">
      <button onClick={() => dispatch(setFilter('all'))} className={filter === 'all' ? 'active' : ''}>
        {t('filterAll')}
      </button>
      <button onClick={() => dispatch(setFilter('active'))} className={filter === 'active' ? 'active' : ''}>
        {t('filterActive')}
      </button>
      <button onClick={() => dispatch(setFilter('completed'))} className={filter === 'completed' ? 'active' : ''}>
        {t('filterCompleted')}
      </button>
    </div>
  );
};

export default FilterTodos;