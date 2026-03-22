import React, { useState, useEffect } from 'react';
import '../../styles/navbar.css';
import '../../styles/footer.css'
import '../../styles/content.css';
import '../../styles/education.css';
import '../../styles/project.css';
import '../../styles/theme.css';
import Moon from '../../assets/lucide/moon.tsx';
import Sunn from '../../assets/lucide/sun.tsx';
import Email from '@/assets/lucide/email.tsx';
import Gith from '@/assets/lucide/github.tsx';
import Linkin from '@/assets/lucide/linkedin.tsx';
import Copyr from '../../assets/lucide/copyr.tsx';
import TopArrow from '@/assets/lucide/top-arrow.tsx';

const Navbar: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar-container">
      <div className="nav-links-wrapper">
        <div className="nav-links">
          <a href="#home" className="nav-item">Home</a>
          <a href="#education" className="nav-item">Education</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#contact" className="nav-item">Contact</a>
        </div>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        <span className="icon-sun-moon">
          {theme === 'dark' ? <Sunn /> : <Moon /> }
        </span> 
      </button>
    </nav>
  );
};

const FooterBar = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <TopArrow /> Back to Top
      </div>
      
      <footer className="footer-container">
        <div className="footer-left">
          <Copyr /> 2026
        </div>
        <div className="footer-right">
          <a href="mailto:@email.com"><Email /></a>
          <a href="https://github.com/myprofile"><Gith /></a>
          <a href="https://linkedin.com/in/myprofile"><Linkin /></a>
        </div>
      </footer>
    </div>
  );
};

const Contact = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <main className="layout-root" id="contact">      
      <div className="content-wrapper">  
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <FooterBar />
      </div>
    </main>
  );
};


export default Contact;