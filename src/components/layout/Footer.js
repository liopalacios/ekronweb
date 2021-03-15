import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import imagenlogo from './logoekron.jpg'


export const Footer = () => {
  return (
    <Fragment>
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
              <img src={imagenlogo}  className="img-fluid logo-footer"  alt="logo" alt="" loading="lazy" />
          </div>
          <div className="col-6 col-md">
            <h5>Indice</h5>
            <ul className="list-unstyled text-small">
              <li><Link className="text-muted" to="/">Home</Link></li>
              <li><Link className="text-muted" to="/about">Nosotros</Link></li>
              <li><Link className="text-muted" to="/services">Servicios</Link></li>          
              <li><Link className="text-muted" to="/contact">Contacto</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Nuestros Servicios</h5>
            <ul className="list-unstyled text-small">
              <li className="text-muted" ><a className="text-muted" href="#">IA - Machine Learning</a></li>
              <li className="text-muted" ><a className="text-muted" href="#">Infraestructura Cloud</a></li>
              <li className="text-muted" ><a className="text-muted" href="#">Proyectos Agiles</a></li>
              <li className="text-muted" ><a className="text-muted" href="#">Desarrollo de Sofware</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Ubicanos</h5>
            <ul className="list-unstyled text-small">
              <li>
                <p> Av. Tomas Marsano 1623 <br/>
                    Piso 6 Oficina- 601<br/><br/>
                    Lima, Perú<br/><br/>
                </p></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Contactanos</h5>
            <ul className="list-unstyled text-small">
              <li>
                <strong>Telf:</strong> +(51) 01 320 8063<br/>
                <strong>Cel:</strong>  +(51) 987712981<br/><br/>
              </li>
            </ul>
          </div>
        </div>
      </footer>    
    </Fragment>
  )
}
export default Footer