import fotoMile from '../assets/img/fondoMile.svg'
import iconoPercha from '../assets/img/perchaItem.png'
import iconoCalendario from '../assets/img/calendarioItem.png'
import IconoUbicacion from '../assets/img/locationItem.png'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Formulario from '../components/Formulario'
import { useState } from 'react'

function Home() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const handleMaps = () => {
    const direccionGoogleMaps =
      'https://www.google.com/maps/place/Azedinha+-+Multiespacio/@-34.9057908,-58.0931706,16.25z/data=!4m6!3m5!1s0x95a2dd16b865238d:0xf69e8e25a5868113!8m2!3d-34.9058275!4d-58.0891394!16s%2Fg%2F11tcjwq09h?entry=ttu'

    window.location.href = direccionGoogleMaps
  }

  const mostrarForm = () => {
    setMostrarFormulario(true)
  }
  return (
    <>
      <div className="fondo">
        <Container>
          <Row>
            <Col xs={12} xl={6}>
              <div className="text-center p-4">
                <h1 className="Loubag display-1 mb-3 ">XV AÑOS</h1>
                <h2 className="Halimun display-5">Milena</h2>
                <p className="Montserrat-regular text-sm ">Te invito a compartir este día conmigo.</p>
              </div>
              {mostrarFormulario ? (
                // Aquí renderiza el formulario
                <Formulario />
              ) : (
                <>
                  <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center ">
                    <div className="d-inline-flex align-items-start mr-md-3 mb-3 mb-md-0">
                      <img src={iconoCalendario} alt="calendario" className="tamañoIconos" />
                      <h3 className="Montserrat-bold numero2">2</h3>
                      <div className="ml-1">
                        <h3 className="Montserrat-regular">de</h3>
                        <h3 className="Montserrat-regular">marzo</h3>
                        <h5 className="Montserrat-regular">21:30hr</h5>
                      </div>
                    </div>

                    <div className="azedinha-container d-flex flex-column align-items-sm-center">
                      <div className="d-inline-flex align-items-start">
                        <img src={IconoUbicacion} alt="ubicacion" className="tamañoIconos" />
                        <div className="ml-3">
                          <h3 className="Montserrat-bold">Azedinha</h3>
                          <h3 className="Montserrat-regular fs-3">148 entre 446 y 450</h3>
                          <Button className="colorBoton Abril" onClick={handleMaps}>
                            Abrir mapa
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-5 mt-3">
                    <img src={iconoPercha} alt="percha" className="tamañoIconos" />
                    <h5 className="Montserrat-bold">Elegante Sport</h5>
                  </div>
                  <Button className="btn-lg w-100 cambioFS200 colorBoton Abril" onClick={mostrarForm}>
                    Confirmar Asistencia
                  </Button>
                </>
              )}
            </Col>

            {/* Foto Mile */}
            <Col xs={12} xl={6}>
              <div className="containerFoto p-5">
                <img src={fotoMile} alt="foto mile" className="fotoMile img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Home
