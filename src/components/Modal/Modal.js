import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './Modal.css'

const Modal = () => {
  const { modalContent, closeModal } = useContext(AppContext);

  if (!modalContent) return null;

  const { type, content } = modalContent;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>
          {
            type === 'product' ? `Продукт: ${content.name}` : 
            type === 'category' ? `Категория: ${content.name}` : 'Неизвестный тип'
          }
        </h2>
        
        
        {content.image && (
          <img src={content.image} alt={content.name || content.title} className="modal-image" />
        )}
        
        {content.description && <p>{content.description}</p>}
        {content.text && <p>{content.text}</p>}

        {type === 'product' && (
          <>
            <p>Категория: {content.category}</p>
            <p>Старая цена: {content.oldPrice}</p>
            <p>Новая цена: {content.newPrice}</p>
          </>
        )}
        
        <button 
          className="modal-close-button hoverable" 
          onClick={closeModal} 
          title="Закрыть окно"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;

