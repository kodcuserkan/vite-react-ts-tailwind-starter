import { lazy } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
const DashNavbar = lazy(() => import('./DashNavbar'))

export default function PrivateRoutes() {
  const { currentUser } = useAuth()

  return currentUser ? (
    <>
      <DashNavbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  )
}
