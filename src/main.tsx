import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/globals.css';

import Home from './pages/Home'
import Inquiry from './pages/Inquiry';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Inquiry' element={<Inquiry />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
