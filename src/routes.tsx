import {
  BrowserRouter,
  Routes as RoutesList,
  Route,
  Navigate,
} from 'react-router-dom'
import useAuth from './hooks/useAuth'
import Home from './pages/Home'
import Login from './pages/Login'

interface PrivateProps {
  children: React.ReactNode;
}

function Private({ children }: PrivateProps) {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated()) return <Navigate to="/" replace />
  return <>{children}</>
}

function Routes() {
  return (
    <BrowserRouter>
      <RoutesList>
        <Route path="/" element={<Login />} />
        <Route
          path="/books"
          element={(
            <Private>
              <Home />
            </Private>
          )}
        />
      </RoutesList>
    </BrowserRouter>
  )
}

export default Routes
