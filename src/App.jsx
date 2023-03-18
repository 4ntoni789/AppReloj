import reactLogo from './assets/react.svg'
import './App.css'
import Reloj from './componentes/Reloj'
import { Route, Routes } from 'react-router-dom'
import Header from './componentes/Header'
import RelojPag from './Pag/RelojPag'
import AlarmaPag from './Pag/AlarmaPag'
import CronometroPag from './Pag/CronometroPag'
import CuentaRegresivaPag from './Pag/CuentaRegresivaPag'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<RelojPag/>} />
        <Route path='/alarma' element={<AlarmaPag/>} />
        <Route path='/cronometro' element={<CronometroPag/>} />
        <Route path='/temporizador' element={<CuentaRegresivaPag/>} />
      </Routes>
    </div>
  )
}

export default App