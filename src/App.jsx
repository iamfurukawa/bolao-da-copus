import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import HomePage from './pages/home'
import RankingPage from './pages/ranking'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import ProfilePage from './pages/profile'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/ranking" element={<RankingPage />} />
        <Route exact path="/profile/:profileId" element={<ProfilePage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
