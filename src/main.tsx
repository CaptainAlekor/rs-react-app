import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import ErrorBoundaryFallback from './components/ErrorBoundaryFallback/ErrorBoundaryFallback.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
