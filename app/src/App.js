import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Menu from './components/Menu';
// import HomePage from './pages/home_page/HomePage';
import AboutPage from './pages/AboutPage';
import Menu from './components/menu/Menu';
import Footer from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
      </div>
      <Routes>
        <Route path="/" component={AboutPage} />
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route path="/about" component={AboutPage} />
        {/* <Route path="/blog" component={BlogPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} /> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
