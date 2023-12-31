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
import EmployerLayout from './Layouts/EmployerLayout';

//Routes import
import Home from './routes/Home';
import Signup from './routes/Signup';
import Login from './routes/Login';
import Profile from './routes/Profile';
import Employer from './routes/Employer';
import EmployerLogin from './routes/EmployerLogin';
import EmployerSignup from './routes/EmployerSignup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='profile' element={<Profile />} />
      </Route>
      <Route path='/employer' element={<EmployerLayout />}>
        <Route index element={<Employer />} />
        <Route path='employer-login' element={<EmployerLogin />} />
        <Route path='employer-signup' element={<EmployerSignup />} />
      </Route>
    </>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
