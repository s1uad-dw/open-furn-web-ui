import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import Main from './pages/main/Main';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
