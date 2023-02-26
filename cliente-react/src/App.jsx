import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Link, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthGuard from "./AuthGuard";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Error404 from "./pages/Error404";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardClientes from "./pages/dashboard/DashboardClientes";
import DashboardColaboradores from "./pages/dashboard/DashboardColaboradores";
import DashboardProyectos from './pages/dashboard/DashboardProyectos';
import DashboardPanel from "./pages/dashboard/DashboardPanel";

function App() {
  return (
    <div className="App ">
      <Header />
      {/* RUTAS */}
      <Routes>
  <Route path="*" element={<Error404 />}/>

  <Route path="/" element={<HomePage />}/>
  <Route path="/about" element={<AboutPage />}/>
  <Route path="/login" element={<LoginPage />}/>
  <Route path="/register" element={<RegisterPage />}/>

  <Route path="/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
  <Route path="/dashboard/clientes" element={<AuthGuard><DashboardClientes /></AuthGuard>} />
  <Route path="/dashboard/colaboradores" element={<AuthGuard><DashboardColaboradores /></AuthGuard>} />
  <Route path="/dashboard/proyectos" element={<AuthGuard><DashboardProyectos /></AuthGuard>} />
  <Route path="/dashboard/panel" element={<AuthGuard><DashboardPanel /></AuthGuard>} />

</Routes>

      <Footer />
    </div>
  );
}

export default App;
