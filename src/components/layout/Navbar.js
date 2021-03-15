import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import imagenlogo from './logoekron.jpg'
import imagenFace from './facebook.png'
import imagenYou from './youtube.png'
import imagenIns from './instagram.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, 
  faBrain, 
  faFileAlt, 
  faCode,
  faLightbulb,
  faFistRaised,
  faMobileAlt} from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top  bg-white">
        <div className="container-xl">
          <a className="navbar-brand"><img src={imagenlogo}  width="190"  className="img-fluid"></img> </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

          <div className="collapse navbar-collapse" id="navbarsExample07XL">
            <div className="mr-auto"></div>
            <div className="form-inline my-2 my-md-0">
              <table>
                <tr>
                  <td>
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active"><Link  className="nav-link" to="/">Home</Link></li>                
                    <li><Link  className="nav-link" to="/services">Servicios</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">Nosotros</Link></li>     
                    <li><Link className="nav-link"  to="/contact">Contacto</Link></li>
                  </ul>   
                  </td></tr>
                <tr>
                  <td>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 justify-content-end">
                      <li className="nav-item ml-3"><div className="icon"> 
                        <a href="https://www.facebook.com/Ekron-System-112380193868979" target="_blan">
                          <img src={imagenFace} width="40"></img></a></div></li>
                      <li className="nav-item ml-3"><div className="icon"> 
                        <a href="https://www.youtube.com/channel/UC_5SF_69MyX56uyKYi2chZQ" target="_blan">
                          <img src={imagenYou} width="40"></img></a></div></li>
                      <li className="nav-item ml-3"><div className="icon"> 
                        <a href="https://www.instagram.com/ekronsystem/?hl=es-la" target="_blan">
                          <img src={imagenIns} width="40"></img></a></div></li>
                    </ul>
                  </td>
                </tr>
              </table>
                   
            </div>
          </div>
        </div>
      </nav>

    </Fragment>
  )
}

export default Navbar