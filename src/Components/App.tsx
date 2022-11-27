import { lazy, Suspense } from 'react'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastProvider } from '../contexts/ToastContext'
import { ApiProvider } from '../contexts/ApiContext'
import AppContextProviders from '../contexts/AppContextProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const Signup = lazy(() => import('./Signup'))
const Dashboard = lazy(() => import('./Dashboard'))
const Login = lazy(() => import('./Login'))
const PrivateRoutes = lazy(() => import('./PrivateRoutes'))
const ForgotPassword = lazy(() => import('./ForgotPassword'))
const UpdateProfile = lazy(() => import('./UpdateProfile'))
const Projects = lazy(() => import('./Projects'))
const Getir = lazy(() => import('./Getir'))

const queryClient = new QueryClient()

function App() {
  const providers = [ToastProvider, AuthProvider, ApiProvider]
  return (
    <Suspense fallback={<>Loading...</>}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AppContextProviders components={providers}>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route element={<Dashboard />} path="/" />
                <Route path="/update-profile" element={<UpdateProfile />} />
                <Route path="projects" element={<Projects />} />
              </Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/getir" element={<Getir />} />
            </Routes>
          </AppContextProviders>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Suspense>
  )
}

export default App
