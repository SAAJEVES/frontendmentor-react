import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import ContentProvider from './assets/utilsprovider/ContentProvider';

// CSS
import './App.css';

// Layout
import RootLayout from './assets/layouts/RootLayout';
import Destination from './assets/pages/Destination';

// Pages
import Home from './assets/pages/Home';
import Technology from './assets/pages/Technology';
import Crew from './assets/pages/Crew';

// Data Loader
import { destinationData } from './assets/pages/Destination';
import { crewData } from './assets/pages/Crew';
import { technologyData } from './assets/pages/Technology';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home/>} />
      <Route path='home' element={<Home/>} />
      <Route path='destination' element={<Destination/>} loader={destinationData} />
      <Route path='crew' element={<Crew/>} loader={crewData} />
      <Route path='technology' element={<Technology/>} loader={technologyData} />
    </Route>
  )
);

function App() {

  return (
    <div className="App">
      <ContentProvider>
        <RouterProvider router={router} />
      </ContentProvider>
    </div>
  )
}

export default App
