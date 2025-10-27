import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import { createUser, updateUser } from '../store/usersSlice';

const UserForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { error } = useSelector((state) => state.users);
  const { items } = useSelector((state) => state.users);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'user' });

  React.useEffect(() => {
    if (id) {
      const user = items.find(item => item.id == Number(id));
      setFormData({ name: user.name, email: user.email, role: user.role });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateUser({ id: parseInt(id), ...formData }));
    } else {
      dispatch(createUser(formData));
    }
    navigate('/users');
  };

  return (
    <form onSubmit={handleSubmit} className="form">

      <label>{t('name')}:</label>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <label>{t('email')}:</label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <label>{t('role')}:</label>
      <select
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      >
        <option value="user">Пользователь</option>
        <option value="admin">Админ</option>
      </select>
      
      <button type="submit">{id ? t('edit') : t('create')}</button>
      <button type="button" onClick={() => navigate('/users')}>{t('discard')}</button>
    </form>
  );
};

export default UserForm;