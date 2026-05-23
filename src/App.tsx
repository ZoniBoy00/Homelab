import { useState, useEffect, useCallback } from 'react';
import { Analytics } from '@vercel/analytics/react';
import BootScreen from './components/dashboard/BootScreen';
import MatrixRain from './components/common/MatrixRain';
import Scanlines from './components/common/Scanlines';
import CornerDecorations from './components/common/CornerDecorations';
import TerminalBar from './components/layout/TerminalBar';
import Header from './components/layout/Header';
import ServiceCard from './components/dashboard/ServiceCard';
import SystemStats from './components/dashboard/SystemStats';
import NetworkActivity from './components/dashboard/NetworkActivity';
import QuickLinks from './components/dashboard/QuickLinks';
import ActivityLog from './components/dashboard/ActivityLog';
import Footer from './components/layout/Footer';
import KeyboardHint from './components/layout/KeyboardHint';
import NotFound from './components/error/NotFound';
import AccessDenied from './components/error/AccessDenied';
import ServerError from './components/error/ServerError';
import BadGateway from './components/error/BadGateway';
import ServiceUnavailable from './components/error/ServiceUnavailable';
import READMEPage from './components/readme/READMEPage';
import { services } from './data/services';

const KEYMAP: Record<string, string> = {
  j: services[0].url,
  u: services[1].url,
  c: services[2].url,
};

const ERROR_ROUTES: Record<string, () => JSX.Element> = {
  '401': AccessDenied,
  '404': NotFound,
  '500': ServerError,
  '502': BadGateway,
  '503': ServiceUnavailable,
};

function ErrorPage({ code }: { code: string }) {
  const Page = ERROR_ROUTES[code];
  return Page ? <Page /> : null;
}

function DashboardPage() {
  const handleKey = useCallback((e: KeyboardEvent) => {
    const url = KEYMAP[e.key.toLowerCase()];
    if (url) window.open(url, '_blank');
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <>
      <Analytics />
      <MatrixRain />
      <div className="grid-bg" />
      <Scanlines />
      <CornerDecorations />

      <div className="relative z-[2] w-full max-w-[820px] mx-auto px-8 py-8 my-8 max-sm:px-4 max-sm:my-4">
        <TerminalBar />
        <Header />

        <section className="flex flex-col gap-[0.7rem] my-5">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </section>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-[0.7rem] my-4 animate-fade-in"
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          <SystemStats />
          <NetworkActivity />
        </div>

        <QuickLinks />
        <ActivityLog />
        <Footer />
      </div>

      <KeyboardHint />
    </>
  );
}

export default function App() {
  const [booted, setBooted] = useState(false);

  const pathname = window.location.pathname;
  const errorCode = pathname.slice(1);
  const isErrorRoute = errorCode in ERROR_ROUTES;
  
  // Check if it's an unmatched path (not root, not readme, not defined error route)
  const isUnmatchedPath = pathname !== '/' && pathname !== '/readme' && !isErrorRoute;

  const [serverError] = useState(() => {
    const stored = sessionStorage.getItem('error');
    if (stored && stored in ERROR_ROUTES) {
      sessionStorage.removeItem('error');
      return stored;
    }
    return null;
  });

  if (serverError) {
    // Show error boot screen immediately for server errors
    return <ErrorPage code={serverError} />;
  }

  if (isUnmatchedPath) {
    // Show error boot screen for unmatched paths like /admin, /env, etc.
    return <ErrorPage code="404" />;
  }

  if (isErrorRoute) {
    // Show error boot screen immediately for defined error routes
    return <ErrorPage code={errorCode} />;
  }

  if (pathname === '/readme') return <READMEPage />;

  // Only show DashboardPage for root path "/"
  if (pathname === '/' && booted) return <DashboardPage />;

  if (!booted) return <BootScreen onFinish={() => setBooted(true)} />;

  // Should not reach here, but just in case
  return <ErrorPage code="404" />;
}
