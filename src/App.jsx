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


function App() {
  

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/sidebar" element={<Sidebar/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    </AuthProvider>
     
    </>
  )
}

export default App
