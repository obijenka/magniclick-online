import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import AboutSection from './components/frames/AboutSection/AboutSection';

export default function App() {
  return (
    <BrowserRouter>
      <Layout> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
