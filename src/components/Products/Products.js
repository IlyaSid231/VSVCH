import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import './Products.css'


const Products = () => {
  const { products, addProduct, deleteProduct, selectedItems, toggleSelect, openModal } = useContext(AppContext);
  const [newProduct, setNewProduct] = useState({
    category: '',
    name: '',
    oldPrice: '',
    newPrice: '',
    image: '',
    description: '',
  });

  // Открытие модального окна
  const handleDetailsClick = (product) => {
    openModal({
      type: 'product',
      content: {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.image,
        category: product.category,
        oldPrice: product.oldPrice,
        newPrice: product.newPrice,
      },
    });
  };

  // Добавление нового продукта
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.newPrice) {
      addProduct({ ...newProduct, id: Date.now() });
      setNewProduct({ category: '', name: '', oldPrice: '', newPrice: '', image: '', description: '' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: value }));
  };

  return (

      <div className="fourth-block">
        <div className="our-products-label">
          <i>Organic</i>
          <h1>Our Products</h1>
        </div>

        <div className="list-of-products">

          {products.map((product) => (
            <div
              key={product.id}
              className={`base-rectangle hoverable ${
                selectedItems.includes(`product-${product.id}`) ? 'highlighted' : ''
              }`}
              onClick={() => toggleSelect(product.id, 'product')}
              title={`Выбрать ${product.name}`}
            >
              <img className="product-image" src={product.image} alt={product.name} />
              <div className="product_category">{product.category}</div>
              <h3 className="product_name">{product.name}</h3>
              <div className="rectangle-line"></div>
              <span className="price-line-through">{product.oldPrice}</span>
              <span className="current-price">{product.newPrice}</span>
              <div className="list-of-products-buttons-group flex">
              <button onClick={() => handleDetailsClick(product)} title="Подробнее о продукте" className="more-inf-button">
                Подробнее
              </button>
              <button onClick={() => deleteProduct(product.id)} title="Удалить продукт" className='delete-product-button'>
                Удалить
              </button>
              </div>
            </div>
          ))}
        </div>

        {/* Форма добавления продукта */}
        <form onSubmit={handleAddProduct} className="add-product-form flex">
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            placeholder="Название продукта"
            required
          />
          <input
            type="text"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            placeholder="Категория"
          />
          <input
            type="text"
            name="oldPrice"
            value={newProduct.oldPrice}
            onChange={handleInputChange}
            placeholder="Старая цена (например, $25.00 USD)"
          />
          <input
            type="text"
            name="newPrice"
            value={newProduct.newPrice}
            onChange={handleInputChange}
            placeholder="Новая цена (например, $21.00 USD)"
            required
          />
          <input
            type="text"
            name="image"
            value={newProduct.image}
            onChange={handleInputChange}
            placeholder="URL изображения"
          />
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            placeholder="Описание"
          />
          <button type="submit" className="hoverable" title="Добавить новый продукт">
            Добавить продукт
          </button>
        </form>

      </div>
    );
  };

export default Products;