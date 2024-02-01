import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import SpinnerLoading from './components/Layout/SpinnerLoading/SpinnerLoading';
import { StationContextProvider } from './context/StationContext';


const Home = React.lazy(() => import('./pages/Home/Home'));
const StationsList = React.lazy(() => import('./pages/admin/stations/StationsList'));
const StationsCreate = React.lazy(() => import('./pages/admin/stations/StationsCreate'));
const StationsEdit = React.lazy(() => import('./pages/admin/stations/StationsEdit'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<SpinnerLoading />}>
        <BrowserRouter>
          <StationContextProvider>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              <Route path="/dashboard/stations" element={<StationsList />} />
              <Route path="/dashboard/stations/create" element={<StationsCreate />} />
              <Route path="/dashboard/stations/:id/edit" element={<StationsEdit />} />

            </Routes>

            <Footer />
          </StationContextProvider>
        </BrowserRouter>
      </Suspense>

    </div>
  );
}

export default App;