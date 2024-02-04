import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import SpinnerLoading from './components/Layout/SpinnerLoading/SpinnerLoading';
import { StationContextProvider } from './context/StationContext';
import { SlotContextProvider } from './context/SlotContext';


const Home = React.lazy(() => import('./pages/Home/Home'));
const StationsList = React.lazy(() => import('./pages/admin/stations/StationsList'));
const StationsCreate = React.lazy(() => import('./pages/admin/stations/StationsCreate'));
const StationsEdit = React.lazy(() => import('./pages/admin/stations/StationsEdit'));
const SlotsCreate = React.lazy(() => import('./pages/admin/slots/SlotsCreate'));
const SlotsList = React.lazy(() => import('./pages/admin/slots/SlotsList'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<SpinnerLoading />}>
        <BrowserRouter>
          <StationContextProvider>
            <SlotContextProvider>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              <Route path="/dashboard/stations" element={<StationsList />} />
              <Route path="/dashboard/stations/create" element={<StationsCreate />} />
              <Route path="/dashboard/stations/:id/edit" element={<StationsEdit />} />

              <Route path="/dashboard/slots" element={<SlotsList />} />
              <Route path="/dashboard/slots/create" element={<SlotsCreate />} />

            </Routes>

            <Footer />
            </SlotContextProvider>
          </StationContextProvider>
        </BrowserRouter>
      </Suspense>

    </div>
  );
}

export default App;