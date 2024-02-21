import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Invitados from '../pages/Invitados'

function Public() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invitados" element={<Invitados />} />
    </Routes>
  )
}

export default Public
