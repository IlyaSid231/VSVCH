import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setUserSort } from '../store/usersSlice';

const SortUsers = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.users.sortBy);

  return (
    <div className="sort">
      <button onClick={() => dispatch(setUserSort('name'))} className={sortBy === 'name' ? 'active' : ''}>
        {t('sortByName')}
      </button>
      <button onClick={() => dispatch(setUserSort('email'))} className={sortBy === 'email' ? 'active' : ''}>
        {t('sortByEmail')}
      </button>
    </div>
  );
};

export default SortUsers;