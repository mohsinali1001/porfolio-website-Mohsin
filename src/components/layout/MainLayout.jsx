import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const THEME_STORAGE_KEY = 'portfolio_theme';

const ROUTE_TITLES = {
  '/': 'Mohsin Ali | Full-Stack Developer & Software Engineer',
  '/about': 'About | Mohsin Ali - Full-Stack Developer',
  '/skills': 'Technical Skills & Expertise | Mohsin Ali',
  '/projects': 'Selected Projects & Practical Work | Mohsin Ali',
  '/contact': 'Contact & Collaboration | Mohsin Ali',
};

function MainLayout() {
  const location = useLocation();

  // Theme state: defaults to 'light' unless a saved preference exists
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
    }
    return 'light';
  });

  // Synchronize the HTML documentElement 'dark' class with theme state
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  // Update dynamic document title and scroll to top on route change
  useEffect(() => {
    document.title = ROUTE_TITLES[location.pathname] || 'Mohsin Ali | Full-Stack Developer';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
