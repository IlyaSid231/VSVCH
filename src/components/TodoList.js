import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { deleteTodo, readTodos } from '../store/todosSlice';
import FilterTodos from './FilterTodos';
import SortTodos from './SortTodos'; // Аналогично для сортировки
import { Link } from 'react-router-dom';

const TodoList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { items, filter, sortBy, status, error } = useSelector((state) => state.todos);

  React.useEffect(() => {
    dispatch(readTodos([
      { id: 1, title: 'Первая задача', description: 'Описание', completed: false },
      { id: 2, title: 'Вторая задача', description: 'Описание', completed: true },
    ]));
  }, [dispatch]);

  const filteredTodos = items
    .filter((todo) => {
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'date') return new Date(b.id) - new Date(a.id); // По ID как дате
      return 0;
    });

  if (status === 'loading') return <p>{t('loading')}</p>;
  if (error) return <p>{t('error', { error })}</p>;

  return (
    <div className="list-container">
      <h2>{t('todos')}</h2>
      <Link to="/todos/new">{t('create')}</Link>
      <FilterTodos />
      <SortTodos /> 
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>Статус: {todo.completed ? 'Завершено' : 'Активно'}</p>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>{t('delete')}</button>
            <Link to={`/todos/${todo.id}/edit`}>{t('edit')}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;