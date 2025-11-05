import './App.css'
// import authReducer from './hooks/reducer/authReducer'
// import Navbar from './component/shared/navbar/navbar'
import Login from './auth/login/login'
import Register from './auth/register/register'
// import { AuthContext } from './hooks/context/authcontext'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { AuthProvider } from './hooks/context/authcontext'
import Sidebar from './component/shared/sidebar/sidebar'


function App() {
  

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    {/* <Navbar /> */}
      <Routes>
      
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/sidebar" element={<Sidebar/>} />
    </Routes>
    </BrowserRouter>
    </AuthProvider>
     
    </>
  )
}

export default App
