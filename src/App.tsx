import './App.css';
import { Home } from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './components/NotFound';

const App = () => {
  return (
    <div className=" h-auto w-auto text-xl font-semibold">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
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
