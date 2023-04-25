import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Menu from './components/menu/Menu';
import Footer from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        {/* <Route exact path="/" component={AboutPage} /> */}
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<AboutPage />} />
        {/* <Route path="/blog" component={BlogPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
