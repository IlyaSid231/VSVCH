import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import NewsPage from './pages/NewsPage';
import Modal from './components/Modal/Modal';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Container maxWidth="lg" disableGutters={true} sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1 }}> {/* Основной контент */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Modal />
      </Container>
    </Router>
  );
};

export default App;