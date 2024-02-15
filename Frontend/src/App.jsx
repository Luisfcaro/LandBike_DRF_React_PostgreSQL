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
import { AuthContextProvider } from './context/AuthContext';

import AdminGuard from './services/guards/AdminGuard';
import AuthGuard from './services/guards/AuthGuard';


const Home = React.lazy(() => import('./pages/Home/Home'));
const StationsList = React.lazy(() => import('./pages/admin/stations/StationsList'));
const StationsCreate = React.lazy(() => import('./pages/admin/stations/StationsCreate'));
const StationsEdit = React.lazy(() => import('./pages/admin/stations/StationsEdit'));
const SlotsCreate = React.lazy(() => import('./pages/admin/slots/SlotsCreate'));
const SlotsList = React.lazy(() => import('./pages/admin/slots/SlotsList'));
const BikesList = React.lazy(() => import('./pages/admin/bikes/BikesList'));
const BikesCreate = React.lazy(() => import('./pages/admin/bikes/BikesCreate'));
const BikesEdit = React.lazy(() => import('./pages/admin/bikes/BikesEdit'));

const Register = React.lazy(() => import('./pages/Auth/Register'));
const Login = React.lazy(() => import('./pages/Auth/Login'));


const StationsListClient = React.lazy(() => import('./pages/client/stations/StationsListClient'));
const StationDetails = React.lazy(() => import('./pages/client/stations/StationDetails'));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<SpinnerLoading />}>
        <BrowserRouter>
          <AuthContextProvider>
            <StationContextProvider>
              <SlotContextProvider>
                <BikeContextProvider>
                  <Header />

                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />

                    <Route element={<AdminGuard />}>

                      <Route path="/dashboard/stations" element={<StationsList />} />
                      <Route path="/dashboard/stations/create" element={<StationsCreate />} />
                      <Route path="/dashboard/stations/:id/edit" element={<StationsEdit />} />

                      <Route path="/dashboard/slots" element={<SlotsList />} />
                      <Route path="/dashboard/slots/create" element={<SlotsCreate />} />

                      <Route path="/dashboard/bikes" element={<BikesList />} />
                      <Route path="/dashboard/bikes/create" element={<BikesCreate />} />
                      <Route path="/dashboard/bikes/:slug/edit" element={<BikesEdit />} />

                    </Route>


                    <Route path="/stations" element={<StationsListClient />} />

                    <Route element={<AuthGuard />}>
                      <Route path="/station/:id" element={<StationDetails />} />
                    </Route>

                  </Routes>

                  <Footer />
                </BikeContextProvider>
              </SlotContextProvider>
            </StationContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;