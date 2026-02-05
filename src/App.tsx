import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import JobsPage from './pages/JobsPage';
import JobDetailsPage from './pages/JobDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<JobsPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobDetailsPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;

