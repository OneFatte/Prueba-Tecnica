import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './components/context/dataContext';
import PriceContent from './components/cotizaciones/priceContent';
import Home from './components/home';
import './App.css'

function App() {

  return (
    <>
    
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cotizaciones' element={<PriceContent />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  )
}

export default App
