import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { createTodo, updateTodo } from '../store/todosSlice';
import { useParams, useNavigate } from 'react-router-dom';

const TodoForm = ({ todoToEdit, onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { error } = useSelector((state) => state.todos);
  const { items } = useSelector((state) => state.todos);
  const [formData, setFormData] = useState(todoToEdit || { title: '', description: '' });

  React.useEffect(() => {
      if (id) {
        const todo = items.find(todo => todo.id == Number(id));
        setFormData({ title: todo.title, description: todo.description});
      }
    }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoToEdit) {
      dispatch(updateTodo({ id: todoToEdit.id, ...formData }));
    } else {
      dispatch(createTodo(formData));
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>{t('title')}:</label>
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <label>{t('description')}:</label>
      <textarea
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      {error && <p className="error">{t('error', { error })}</p>}
      <button type="submit">{todoToEdit ? t('edit') : t('create')}</button>
      <button type="button" onClick={() => navigate('/todos')}>Отмена</button>
    </form>
  );
};

export default TodoForm;