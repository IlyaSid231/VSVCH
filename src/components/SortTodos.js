import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setSort } from '../store/todosSlice';

const SortTodos = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.todos.sortBy);

  return (
    <div className="sort">
      <button onClick={() => dispatch(setSort('title'))} className={sortBy === 'title' ? 'active' : ''}>
        {t('sortByTitle')}
      </button>
      <button onClick={() => dispatch(setSort('date'))} className={sortBy === 'date' ? 'active' : ''}>
        По дате
      </button>
    </div>
  );
};

export default SortTodos;