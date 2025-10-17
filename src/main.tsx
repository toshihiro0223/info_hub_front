import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store/store'
import './styles/globals.css';

import Home from './pages/Home'
import Inquiry from './pages/Inquiry';
import Ptw from './pages/Ptw'
import Signup from './pages/Signup';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Inquiry' element={<Inquiry />} />
        <Route path='/Ptw' element={<Ptw />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
