import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      title: 'Управление задачами и пользователями',
      todos: 'Задачи',
      users: 'Пользователи',
      create: 'Создать',
      edit: 'Редактировать',
      delete: 'Удалить',
      name: 'Имя',
      email: 'Email',
      titleField: 'Заголовок',
      description: 'Описание',
      role: 'Роль',
      filterAll: 'Все',
      filterActive: 'Активные',
      filterCompleted: 'Завершенные',
      filterAdmin: 'Админы',
      sortByName: 'По имени',
      sortByEmail: 'По email',
      sortByTitle: 'По заголовку',
      error: 'Ошибка: {{error}}',
      loading: 'Загрузка...',
      switchLang: 'EN',
      sortByName: 'По имени',
      sortByEmail: 'По email',
      filterUser: 'Пользователи',
      discard: "Отмена",
      back: "Назад",
    },
  },
  en: {
    translation: {
      title: 'Task and User Management',
      todos: 'Todos',
      users: 'Users',
      create: 'Create',
      edit: 'Edit',
      delete: 'Delete',
      name: 'Name',
      email: 'Email',
      title: 'Title',
      description: 'Description',
      role: 'Role',
      filterAll: 'All',
      filterActive: 'Active',
      filterCompleted: 'Completed',
      filterAdmin: 'Admins',
      sortByName: 'By Name',
      sortByEmail: 'By Email',
      error: 'Error: {{error}}',
      loading: 'Loading...',
      switchLang: 'РУ',
      sortByName: 'By Name',
      sortByEmail: 'By Email',
      filterUser: 'Users',
      discard: "Discard",
      back: "Back",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;