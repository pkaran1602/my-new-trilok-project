import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-crop/dist/ReactCrop.css'



const Layout = React.lazy(() => import('./components/layout/Layout'));
const Home = React.lazy(() => import('./pages/home/Home'));
const Login = React.lazy(() => import('./pages/login/Login'));

const Appraisal = React.lazy(() => import('./pages/appraisal/Appraisal'));

const Hiring = React.lazy(() => import('./pages/hiring/Hiring'));
const Hirings = React.lazy(() => import('./pages/hiring/Hirings'));
const UploadHiring = React.lazy(() => import('./pages/hiring/UploadHiringDetails'));

const Inquiry = React.lazy(() => import('./pages/inquiry/Inquiry'));
const Inquiries = React.lazy(() => import('./pages/inquiry/Inquiries'));

const Interview = React.lazy(() => import('./pages/interview/Interview'));
const Interviews = React.lazy(() => import('./pages/interview/Interviews'));
const Appraisals = React.lazy(() => import('./pages/appraisal/Appraisals'));
const Users = React.lazy(() => import('./pages/employee/Users'));

function App() {
  const { user: currentUser } = useSelector((state) => state.auth);
  return (
    <Router>
      <Suspense fallback={
        <div className="home_page">
          {/* <Spinner animation="border" variant="info" /> */}
        </div>}
      >
        <Routes>
          <Route exact path="/" element={currentUser ? <Layout /> : <Navigate to="/login" replace />} >
            {currentUser && currentUser.user_type === 'ADMIN' &&
              <>
                <Route exact path="/" element={<Navigate to="/home" replace />} />
                <Route exact path="/home" element={<Home />} />

                <Route exact path="/interviews" element={<Interviews />} />
                <Route exact path="/hirings" element={<Hirings />} />
                <Route exact path="/inquiries" element={<Inquiries />} />
                <Route exact path='/appraisals' element={<Appraisals />} />


                <Route exact path='/users' element={<Users />} />
                <Route exact path="/login" element={<Navigate to="/home" replace />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
              </>
            }
            {currentUser && currentUser.user_type === 'EMPLOYEE' &&
              <>
                <Route exact path="/" element={<Navigate to="/home" replace />} />
                <Route exact path="/login" element={<Navigate to="/home" replace />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
              </>
            }
            {currentUser && currentUser.user_type === 'HR' &&
              <>
                <Route exact path="/" element={<Navigate to="/home" replace />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/interviews" element={<Interviews />} />
                <Route exact path="/hirings" element={<Hirings />} />
                <Route exact path="/inquiries" element={<Inquiries />} />
                <Route exact path='/appraisals' element={<Appraisals />} />

                <Route exact path="/login" element={<Navigate to="/home" replace />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
              </>
            }

          </Route>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/appraisal' element={<Appraisal />} />
          <Route exact path='/hiring' element={<Hiring />} />
          <Route exact path='/hiring/upload_hiring_detail/:hiring_id' element={<UploadHiring />} />
          <Route exact path='/inquiry' element={<Inquiry />} />
          <Route exact path='/interview' element={<Interview />} />

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
