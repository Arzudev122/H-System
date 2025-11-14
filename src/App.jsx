import './App.css'
// import authReducer from './hooks/reducer/authReducer'
import Navbar from './component/shared/navbar/navbar'
import Login from './auth/login/login'
import Register from './auth/register/register'
// import { AuthContext } from './hooks/context/authcontext'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { AuthProvider } from './hooks/context/authcontext'
import Sidebar from './component/shared/sidebar/sidebar'
import Dashboard from './component/dashboard/dashboard'
import MainLayout from './component/shared/MainLayout/mainLayout'
import Appointment from './component/Appointment/appointment'
import ForgotPassword from './auth/forgotpassword/forgotpass'
import ProtectedRoute from './protectedRoute/protectedRoute'


function App() {
  

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
          
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgotpass" element={<ForgotPassword/>} />

      <Route path="/navbar" element={<ProtectedRoute><Navbar/></ProtectedRoute>}/>
      <Route path="/" element={<ProtectedRoute><Login/></ProtectedRoute>} />
      <Route path="/sidebar" element={<ProtectedRoute><Sidebar/></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
      <Route path="/mainlayout" element={<ProtectedRoute><MainLayout/></ProtectedRoute>} />
      <Route path="/appointment" element={<ProtectedRoute><Appointment/></ProtectedRoute>} />
      
    </Routes>
    </BrowserRouter>
    </AuthProvider>
     
    </>
  )
}

export default App
