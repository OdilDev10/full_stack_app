import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'

function Rutas(){
    return(
            <Routes>
                    {/* Error Display */}
                    <Route path="*" element={<Error404 />} />
                    {/* Home Display */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/login" element={<Services />} />
                    <Route path="/register" element={<About />} />
                </Routes>
    )
}

