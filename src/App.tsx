import './App.css';
import { Home } from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import { LoginPage } from './pages/auth/login';
import { SingupPage } from './pages/auth/signup';
import { EmailVerificationPage } from './pages/auth/emailVerification';

const App = () => {
  return (
    <div className=" h-auto w-auto text-xl font-semibold">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SingupPage />} />
          <Route path="/email-verification" element={<EmailVerificationPage />} />
          {/* <Route path="/about" element={<Community />} />
          <Route path="/team" element={<Session />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
