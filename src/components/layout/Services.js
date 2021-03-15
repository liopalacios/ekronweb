import React, { Fragment } from 'react'

export const Services = () => {
  return (
    <Fragment>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Nuestros Servicios</h1>
          <p className="lead font-weight-normal">Te ayudamos a alcanzar tus sueños en base a tecnología de vanguardia, a un precio que te sorprenderá!</p>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Servicios de Inteligencia Artificial</h2>
            <p className="lead">Construimos modelos predictivos basados en matemática y estadística, con las mejores herramientas del mercado.</p>
          </div>
          <div className="bg-light shadow-sm mx-auto imagen-machine-learning"></div>
        </div>
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 py-3">
            <h2 className="display-5">Servicios de Consultoría e Implementacion CLOUD</h2>
            <p className="lead">Enfrenta y supera tus desafíos empresariales con los servicios de computación en la nube con nosotros.</p>
          </div>
          <div className="bg-light shadow-sm mx-auto imagen-cloud" ></div>
          
          
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 ">
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
            <h2 className="display-5">Servicio de consultoria en agilidad</h2>
            <p className="lead">Incorpora Agilidad a tu cultura organizacional, Scrum esta en todas partes.</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto imagen-agility">
            </div> 
            
            
        </div>
        <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div className="my-3 p-3">
            <h2 className="display-5">Servicios de desarrollo de software</h2>
            <p className="lead">Desarollamos en los framework mas demandantes del mercado y nos adaptamos a tu arquitectura.</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto imagen-software" ></div>
        </div>        
      </div>
      
      <section id="pricing" className="pricing  section-bg">
        <div className="container">

          <div className="section-title">
            <h2 data-aos="fade-up">Detalles</h2>
            <p data-aos="fade-up">Informate de todos los servicios que ofrecemos para que tu empresa mejore.</p>
          </div>

          <div className="row">

            <div className="col-lg-3 col-md-6 " data-aos="fade-up">
              <div className="box featured">
                <h3>Servicios de Inteligencia Artificial </h3>
                <h4>ML/AI</h4>
                <ul>
                  <li> Ejecución de CRISP-DM </li>
                  <li> Modelo predictivo en ejecución, listo para usar </li>
                  <li> Predicción de variables objetivos (ventas, clientes potenciales, etc)</li>
                  <li> Dashboards de toma de decisiones.</li>
                </ul>
                <div className="btn-wrap">
                  <div  className="btn-buy">Contactanos</div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="100">
              <div className="box">
                <h3>Servicios de consultoría en Agilidad</h3>
                <h4>Agile</h4>
                <ul>
                  <li>Agility Inception</li>
                  <li>Talleres de Design Thinking.</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Acompañamiento durante la construcción y despliegue de productos y servicios.</li>
                </ul>
                <div className="btn-wrap">
                  <div className="btn-buy">Contáctanos</div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
              <div className="box  featured">
                <h3>Servicio de Desarrollo de Sofware</h3>
                <h4>Software</h4>
                <ul>
                  <li>Desarrollo end-to-end de productos de software.</li>
                  <li>Diseño de Arquitectura.</li>
                  <li>Prácticas ágiles de desarrollo.</li>
                  <li>Pruebas y test automatizados.</li>
                  <li>Acompañamiento en puestas a producción.</li>
                </ul>
                <div className="btn-wrap">
                  <div href="#" className="btn-buy">Contáctanos</div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 " data-aos="fade-up" data-aos-delay="300">
              <div className="box">
                <h3>Servicios de Consultoría CLOUD</h3>
                <h4>Cloud</h4>
                <ul>
                  <li>Diseño de arquitectura CLOUD</li>
                  <li>Consultoria, recomendación y selección del proveedor (AWS, AZURE, etc.)</li>
                  <li>Consultoria de escalamiento y resilencia de servicios.</li>
                  <li>Estimación de costos por servicios en ambientes CLOUD.</li>
                </ul>
                <div className="btn-wrap">
                  <div href="#" className="btn-buy">Contáctanos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Services