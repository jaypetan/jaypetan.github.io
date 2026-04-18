import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NlbCaseStudy from './pages/NlbCaseStudy'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nlb-case-study" element={<NlbCaseStudy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default App
