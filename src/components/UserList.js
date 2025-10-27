import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { deleteUser, readUsers, resetError } from '../store/usersSlice';
import FilterUsers from './FilterUsers';
import SortUsers from './SortUsers';
import { Link } from 'react-router-dom';



const UserList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { items, filter, sortBy, status, error } = useSelector((state) => state.users);

  const handleBackClick = () => {
    dispatch(resetError());
  };

  React.useEffect(() => {
    dispatch(readUsers([
      { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', role: 'user' },
      { id: 2, name: 'Админ Петров', email: 'admin@example.com', role: 'admin' },
    ]));
  }, [dispatch]);

  const filteredUsers = items
    .filter((user) => {
      if (filter === 'admin') return user.role === 'admin';
      if (filter === 'user') return user.role === 'user';
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'email') return a.email.localeCompare(b.email);
      return 0;
    });

  if (status === 'loading') return <p>{t('loading')}</p>;
  if (error) return (
    <div>
      <p>{t('error', { error })}</p>
      <button type="button" onClick={() => handleBackClick()}>{t('back')}</button>
    </div>
  )

  return (
    <div className="list-container">
      <h2>{t('users')}</h2>
      <Link to="/users/new">{t('create')}</Link>
      <FilterUsers />
      <SortUsers />
      <ul className="user-list">
        {filteredUsers.map((user) => (
          <li key={user.id} className="user-item">
            <h3>{user.name}</h3>
            <p>{t('email')}: {user.email}</p>
            <p>{t('role')}: {user.role}</p>
            <button onClick={() => dispatch(deleteUser(user.id))}>{t('delete')}</button>
            <Link to={`/users/${user.id}/edit`}>{t('edit')}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;