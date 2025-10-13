import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Страница не найдена</h2>
        <p>Извините, но страница, которую вы ищете, не существует.</p>
        <div className="not-found-actions">
          <Link to="/" className="home-button">
            ← Вернуться на главную
          </Link>
          <button onClick={() => window.history.back()} className="back-button">
            Назад
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound