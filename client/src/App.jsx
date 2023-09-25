import './App.css';
import InputShortner from './components/inputShortner/inputShortner';
import Navbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom'
import QRcodeGenerator from './components/qrcodeGenerator/qrcodeGenerator';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
      <Routes>
        <Route path='/url-shortner' element={
          <InputShortner />
        } />
        <Route path='/qrcode-generator' element={
          <QRcodeGenerator />
        } />
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
