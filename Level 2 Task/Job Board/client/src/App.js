import React from 'react';

//rrd imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

//Layouts import
import RootLayout from './Layouts/RootLayout';

//Routes import
import Home from './routes/Home';
import Signup from './routes/Signup';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
