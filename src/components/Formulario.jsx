import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { guardarInvitado } from '../services/invitadosServices'
import AlertCustom from './AlertCustom'

function Formulario() {
  const [nombre, setNombre] = useState('')
  const [alert, setAlert] = useState({ variant: '', text: '' })
  const [apellido, setApellido] = useState('')
  const [edad, setEdad] = useState('')
  const [tomaAlcohol, setTomaAlcohol] = useState(false)

  const handleSwitchChange = () => {
    setTomaAlcohol(!tomaAlcohol)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      nombre,
      apellido,
      edad,
      tomaAlcohol,
    }
    try {
      const response = await guardarInvitado(data)
      setAlert({ variant: 'success', text: `Usted a sido confirmado,lo esperamos` })
      console.log(response)
    } catch (error) {
      setAlert({ variant: 'danger', text: `Usted no ha sido confirmado` })
      console.log(error)
    }
  }

  return (
    <>
      <AlertCustom {...alert} />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-1 text-center" controlId="formBasicNombre">
          <Form.Label className="Montserrat-bold fs-2">Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-1 text-center" controlId="formBasicApellido">
          <Form.Label className="Montserrat-bold fs-2">Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 text-center" controlId="formBasicEdad">
          <Form.Label className="Montserrat-bold fs-2">Edad</Form.Label>
          <Form.Control type="number" placeholder="Ingrese su edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
        </Form.Group>

        {parseInt(edad, 10) >= 18 && (
          <Form.Group className="mb-1 text-center fs-2" controlId="formBasicSwitch">
            <Form.Check type="switch" id="custom-switch" label="¿Toma alcohol?" className="colorSwitch" checked={tomaAlcohol} onChange={handleSwitchChange} />
          </Form.Group>
        )}

        <Button className="btn-lg w-100 cambioFS200 colorBoton Abril mb-5" type="submit">
          Confirmar
        </Button>
      </Form>
    </>
  )
}

export default Formulario
