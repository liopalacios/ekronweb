import React, { Fragment } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, 
  faBrain, 
  faFileAlt, 
  faCode,
  faLightbulb,
  faFistRaised,
  faMobileAlt} from "@fortawesome/free-solid-svg-icons";

export const Landing = () => {
  return (
    <Fragment>
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="container" data-aos="fade-in">
          <h1>Descubre la Transformacion digital</h1>
          <h2>Alcanza tus sueños </h2>
        </div>
      </section>


      <main id="main">
        <section id="why-us" className="why-us">
          <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-5" data-aos="fade-up">
                  <div className="content pl-3">
                    <blockquote className="h2">
                      <p>Transformación centrada en las personas</p>
                    </blockquote>
                    
                    <p> Te ayudamos a alcanzar tus sueños en base a tecnología de vanguardia, a un precio que te sorprenderá! </p>
                    <div className="text-center">
                      <a href="#" className="more-btn">Conoce mas <FontAwesomeIcon size="xs" icon={faChevronRight} /></a>                      
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-7 d-flex">
                  <div className="icon-boxes d-flex flex-column justify-content-center">
                    <div className="row">
                      <div className="col-xl-3 d-flex align-items-stretch p-1" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon-box mt-4 mt-xl-0">
                          <FontAwesomeIcon  icon={faBrain} size="2x" className="fuente"/>
                          <h4>Machine Learning</h4>
                          <p>Incrementa tus ventas con las preferencias y necesidades inmediatas de tus clientes. </p>
                        </div>
                      </div>
                      <div className="col-xl-3 d-flex align-items-stretch p-1" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon-box mt-4 mt-xl-0">
                          <FontAwesomeIcon  icon={faFileAlt} size="2x" className="fuente"/>
                          <h4>Infraestructura Cloud</h4>
                          <p>Servicios de administracion de servidores, bases de datos, redes en plataforma (laaS,PaaS,SaaS) sobre arquitecturas hidridas y onpremise.</p>
                        </div>
                      </div>
                      <div className="col-xl-3 d-flex align-items-stretch p-1" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon-box mt-4 mt-xl-0">
                          <FontAwesomeIcon  icon={faFileAlt} size="2x" className="fuente"/>
                          <h4>Proyectos Agiles SCRUM</h4>
                          <p>Transforma los procesos de tu negocio utilizando SCRUM</p>
                        </div>
                      </div>
                      <div className="col-xl-3 d-flex align-items-stretch p-1" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon-box mt-4 mt-xl-0">
                          <FontAwesomeIcon  icon={faCode} size="2x" className="fuente"/>
                          <h4>Software Development</h4>
                          <p>Te ayudamos a construir soluciones escalables</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section id="about" className="about section-bg">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-6 justify-content-center 
                align-items-stretch">
                  <iframe width="100%" className="align-middle mt-5" height="50%" src="https://www.youtube.com/embed/OrQujWzwAdg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                  <h4 data-aos="fade-up">Sobre Nosotros</h4>
                  <h3 data-aos="fade-up">Ekron System</h3>
                  <p data-aos="fade-up">Te ayudamos a alcanzar tus sueños en base a tecnología de vanguardia, a un precio que te sorprenderá! Contamos con profesionales especialistas en Transformación Digital, Inteligencia Artificial, Desarrollo de Software y agilidad. </p>
                  <p data-aos="fade-up">Contamos con profesionales especialistas en Transformación Digital, Inteligencia Artificial, Desarrollo de Software y agilidad. </p>


                  <div className="icon-box" data-aos="fade-up">
                    <div className="icon"><FontAwesomeIcon  icon={faLightbulb} size="2x" className="fuente2"/></div>
                    <h4 className="title"><a href="">Somos Inteligentes</a></h4>
                    <p className="description">Nuestras soluciones se basan en estrategias. Conocer al cliente final, maximizar su experiencia, empatizar y encontrar sus verdaderas necesidades son el punto de partida.  </p>
                  </div>

                  <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon"><FontAwesomeIcon  icon={faFistRaised} size="2x" className="fuente2"/></div>
                    <h4 className="title"><a href="">Somos Capaces</a></h4>
                    <p className="description">Contamos con experiencia en diversos proyectos de tecnología, en empresas de gran envergadura y prestigio, como Grupo Credicorp, IBM, Cosapidata, empresas de Banca y Seguros, educación, salud, etc.</p>
                  </div>

                  <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon"> <FontAwesomeIcon  icon={faMobileAlt} size="2x" className="fuente2"/></div>
                    <h4 className="title"><a href="">Somos Digitales</a></h4>
                    <p className="description">Desarrollar software es un arte. Te ayudamos a construir soluciones escalables, que perduren en el tiempo. Se flexible a los cambios para estar un paso delante de los deseos de tus clientes.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Fragment>
    )
  }
  export default Landing;