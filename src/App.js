import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TodoList from './components/TodoList';
import UserList from './components/UserList';
import TodoForm from './components/TodoForm';
import UserForm from './components/UserForm';

const App = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className="app">
      <header className="header">
        <h1>{t('title')}</h1>
        <nav>
          <Link to="/todos">{t('todos')}</Link>
          <Link to="/users">{t('users')}</Link>
        </nav>
        <button onClick={switchLanguage}>{t('switchLang')}</button>
      </header>
      <main>
        <Routes>
            <Route path="/todos" element={<TodoList />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/todos/new" element={<TodoForm onClose={() => window.history.back()} />} />
            <Route path="/todos/:id/edit" element={<TodoForm />} />
            <Route path="/users/new" element={<UserForm />} />
            <Route path="/users/:id/edit" element={<UserForm />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;