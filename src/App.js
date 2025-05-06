import React, { Suspense, lazy } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components for better performance
const Header = lazy(() => import('./components/Header'));
const Intro = lazy(() => import('./components/Intro'));
const Projects = lazy(() => import('./components/Projects'));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="app-wrapper">
          <Header />
          <main>
            <Intro />
            <Projects />
          </main>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;