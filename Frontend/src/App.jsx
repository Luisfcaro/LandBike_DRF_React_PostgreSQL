import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home/Home'));
const StationsList = React.lazy(() => import('./pages/admin/stations/StationsList'));
const StationsCreate = React.lazy(() => import('./pages/admin/stations/StationsCreate'));
const StationsEdit = React.lazy(() => import('./pages/admin/stations/StationsEdit'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to='/Home ' />} />
          <Route path="/home" element={<Home />} />

          <Route path="/dashboard/stations" element={<StationsList />} />
          <Route path="/dashboard/stations/create" element={<StationsCreate />} />
          <Route path="/dashboard/stations/:id/edit" element={<StationsEdit />} />

          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;