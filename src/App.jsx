import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom"

import LocalStorageService from './services/local-storage'

import HomePage from './pages/home'
import RankingPage from './pages/ranking'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import ProfilePage from './pages/profile'

const Protected = ({ children }) => {
  const token = LocalStorageService.getToken();
  return token ? <Outlet /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />

        <Route exact path="/ranking" element={<Protected />}>
          <Route exact path="/ranking" element={<RankingPage />} />
        </Route>
        <Route exact path="/profile/:userId" element={<Protected />}>
          <Route exact path="/profile/:userId" element={<ProfilePage />} />
        </Route>
        <Route exact path="/" element={<Protected />}>
          <Route exact path="/" element={<HomePage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
