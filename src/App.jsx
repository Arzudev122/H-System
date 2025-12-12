import './App.css'
// import authReducer from './hooks/reducer/authReducer'
import Navbar from './component/shared/navbar/navbar'
import Login from './auth/login/login'
import Register from './auth/register/register'
import { useAuth } from './hooks/context/authcontext'
// import { AuthContext } from './hooks/context/authcontext'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { AuthProvider } from './hooks/context/authcontext'
import Sidebar from './component/shared/sidebar/sidebar'
import Dashboard from './component/dashboard/dashboard'
import MainLayout from './component/shared/MainLayout/mainLayout'
import Appointment from './component/Appointment/appointment'
import ForgotPassword from './auth/forgotpassword/forgotpass'
import Patient from './component/Patient'
import Payment from './component/Payment/payment'
import Doctor from './component/Doctor/doctor'
import DoctorSchedule from './component/Doctor/doctorSchedule'
import Calendar from './component/Calendar/calendar'
import ProtectedRoute from './protectedRoute/protectedRoute'


function App() {
  

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
          
      <Route path="/" element={<Dashboard/>} />   
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgotpass" element={<ForgotPassword/>} />
      

      <Route path="/navbar" element={<ProtectedRoute><Navbar/></ProtectedRoute>}/>
      <Route path="/sidebar" element={<ProtectedRoute><Sidebar/></ProtectedRoute>} />
      <Route path="/patient" element={<ProtectedRoute><Patient/></ProtectedRoute>} />
      <Route path="/doctor" element={<ProtectedRoute><Doctor/></ProtectedRoute>} />
      <Route path="/doctorschedule" element={<ProtectedRoute><DoctorSchedule/></ProtectedRoute>} />
      <Route path="/payment" element={<ProtectedRoute><Payment/></ProtectedRoute>} />
      <Route path="/calendar" element={<ProtectedRoute><Calendar/></ProtectedRoute>} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/mainlayout" element={<ProtectedRoute><MainLayout/></ProtectedRoute>} />
      <Route path="/appointment" element={<ProtectedRoute><Appointment/></ProtectedRoute>} />
      
    </Routes>
    </BrowserRouter>
    </AuthProvider>
     
    </>
  )
}

export default App
