import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import SpinnerLoading from './components/Layout/SpinnerLoading/SpinnerLoading';
import { StationContextProvider } from './context/StationContext';
import { SlotContextProvider } from './context/SlotContext';
import { BikeContextProvider } from './context/BikeContext';


const Home = React.lazy(() => import('./pages/Home/Home'));
const StationsList = React.lazy(() => import('./pages/admin/stations/StationsList'));
const StationsCreate = React.lazy(() => import('./pages/admin/stations/StationsCreate'));
const StationsEdit = React.lazy(() => import('./pages/admin/stations/StationsEdit'));
const SlotsCreate = React.lazy(() => import('./pages/admin/slots/SlotsCreate'));
const SlotsList = React.lazy(() => import('./pages/admin/slots/SlotsList'));
const BikesList = React.lazy(() => import('./pages/admin/bikes/BikesList'));
const BikesCreate = React.lazy(() => import('./pages/admin/bikes/BikesCreate'));
const BikesEdit = React.lazy(() => import('./pages/admin/bikes/BikesEdit'));


const StationsListClient = React.lazy(() => import('./pages/client/stations/StationsListClient'));
const StationDetails = React.lazy(() => import('./pages/client/stations/StationDetails'));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<SpinnerLoading />}>
        <BrowserRouter>
          <StationContextProvider>
            <SlotContextProvider>
              <BikeContextProvider>
                <Header />

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />

                  <Route path="/dashboard/stations" element={<StationsList />} />
                  <Route path="/dashboard/stations/create" element={<StationsCreate />} />
                  <Route path="/dashboard/stations/:id/edit" element={<StationsEdit />} />

                  <Route path="/dashboard/slots" element={<SlotsList />} />
                  <Route path="/dashboard/slots/create" element={<SlotsCreate />} />

                  <Route path="/dashboard/bikes" element={<BikesList />} />
                  <Route path="/dashboard/bikes/create" element={<BikesCreate />} />
                  <Route path="/dashboard/bikes/:slug/edit" element={<BikesEdit />} />


                  <Route path="/stations" element={<StationsListClient />} />
                  <Route path="/station/:id" element={<StationDetails />} />

                </Routes>

                <Footer />
              </BikeContextProvider>
            </SlotContextProvider>
          </StationContextProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;