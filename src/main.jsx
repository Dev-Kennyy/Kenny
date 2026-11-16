import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, useLocation, useRoutes } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from './context/ThemeContext.jsx';
import SiteLayout from './components/SiteLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import {
  AboutPage,
  ContactPage,
  NotFoundPage,
  PageTransition,
  ProjectDetailPage,
  ProjectsPage,
  ServicesPage,
} from './pages/PortfolioPages.jsx';
import { projects } from './data/portfolio.js';

function AppRoutes() {
  const location = useLocation();
  const currentProject = projects.find(
    (project) => location.pathname === `/projects/${project.slug}`,
  );

  const routeElement = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/services', element: <ServicesPage /> },
    { path: '/projects', element: <ProjectsPage /> },
    { path: '/projects/:slug', element: <ProjectDetailPage /> },
    { path: '/contact', element: <ContactPage /> },
    { path: '/404', element: <NotFoundPage /> },
    { path: '*', element: <NotFoundPage /> },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    let title = 'Kenny | Portfolio';
    if (currentProject) {
      title = `${currentProject.name} | Kenny`;
    } else {
      const titles = {
        '/': 'Kenny | Portfolio',
        '/about': 'About | Kenny',
        '/services': 'Services | Kenny',
        '/projects': 'Projects | Kenny',
        '/contact': 'Contact | Kenny',
        '/404': '404 | Kenny',
      };
      title = titles[location.pathname] || 'Kenny | Portfolio';
    }

    document.title = title;
  }, [currentProject, location.pathname]);

  return (
    <SiteLayout>
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>{routeElement}</PageTransition>
      </AnimatePresence>
    </SiteLayout>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
