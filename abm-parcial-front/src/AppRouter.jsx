import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Agregar } from './components/Agregar'
import { Grilla } from './components/Grilla'
import { Navbar } from './components/Navbar'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Grilla/>}/>
            <Route path="/agregar" element={<Agregar/>}/>
            <Route path="/grilla" element={<Grilla/>}/>
        </Routes>
    </BrowserRouter>
  )
}
