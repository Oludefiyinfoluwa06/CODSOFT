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
import EmployerLogin from './routes/EmployerLogin';
import EmployerSignup from './routes/EmployerSignup';
import PostAJob from './routes/PostAJob';
import HomeLayout from './Layouts/HomeLayout';
import HomeJobs from './routes/HomeJobs';
import JobDetails from './routes/JobDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='profile' element={<Profile />} />
        <Route path='jobs' element={<HomeJobs />} />
        <Route path='jobs/:jobId' element={<JobDetails />} />
      </Route>
      <Route path='/post-a-job' element={<EmployerLayout />}>
        <Route index element={<PostAJob />} />
        <Route path='employer-login' element={<EmployerLogin />} />
        <Route path='employer-signup' element={<EmployerSignup />} />
      </Route>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
