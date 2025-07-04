import React, { Suspense, lazy } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import CursorEffect from './components/CursorEffect';

// Lazy load all components for consistent performance
const Header = lazy(() => import('./components/Header'));
const Intro = lazy(() => import('./components/Intro'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Footer = lazy(() => import('./components/Footer'));
function App() {
  return (
    <ErrorBoundary>
      <CursorEffect />
      <Suspense fallback={<LoadingSpinner />}>
        <div className="app-wrapper">
          <Header />
          <main>
            <Intro />
            <About />
            <Projects />
            <Footer />
          </main>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;