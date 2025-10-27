import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setUserFilter } from '../store/usersSlice';

const FilterUsers = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.users.filter);

  return (
    <div className="filter">
      <button onClick={() => dispatch(setUserFilter('all'))} className={filter === 'all' ? 'active' : ''}>
        {t('filterAll')}
      </button>
      <button onClick={() => dispatch(setUserFilter('admin'))} className={filter === 'admin' ? 'active' : ''}>
        {t('filterAdmin')}
      </button>
      <button onClick={() => dispatch(setUserFilter('user'))} className={filter === 'user' ? 'active' : ''}>
        Пользователи
      </button>
    </div>
  );
};

export default FilterUsers;