import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Menu from './components/Menu';
// import HomePage from './pages/home_page/HomePage';
import AboutPage from './pages/AboutPage';
import Menu from './components/menu/Menu';
// import BlogPage from './pages/blog_pageBlogPage';
// import PortfolioPage from './pages/portfolio_page/PortfolioPage';
// import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
      </div>
      <Routes>
        {/* <Menu /> */}
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/blog" component={BlogPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
