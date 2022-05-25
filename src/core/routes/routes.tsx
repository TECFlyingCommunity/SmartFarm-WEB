import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../../components/layout'
import Dashboard from '../../pages/dashboard'

const AppRoutes: React.FC = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default AppRoutes
