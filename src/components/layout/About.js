import React, { Fragment } from 'react'


export const About = () => {
  return (
    <Fragment>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center  section-bg">
          <div className="col-md-5 p-lg-5 mx-auto  icon-boxes my-5">
            <h1 className="display-4 font-weight-normal">Sobre Nosotros</h1>
            <p className="lead font-weight-normal"> Ekron System es una empresa nativa digital, y nuestros colaboradores son amantes de la tecnología.</p>
            <br/>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <section id="values" className="values">
          <div className="container">

            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                <div className="card imagen1">
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Nuestra Misión</a></h5>
                    <p className="card-text">Brindar servicios que favorezcan al crecimiento digital de nuestros clientes contribuyendo al bien común, y con ello al desarrollo digital del país.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="100">
                <div className="card imagen2">
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Nuestro Plan</a></h5>
                    <p className="card-text">Nuestro plan es acompañar, orientar, dar soporte y encaminar el crecimiento de ventas y utilidades de nuestros clientes.</p>
                  </div>
                </div>

              </div>
              <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card imagen3">
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Nuestra Visión</a></h5>
                    <p className="card-text">Ser una empresa referente y líder en el sector de consultoría de tecnologías de la información basada en la responsabilidad, transparencia, ética y buenas costumbres.</p>                    
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="300">
                <div className="card imagen4">
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Nuestro Cuidado</a></h5>
                    <p className="card-text">La experiencia del cliente final, basada en la excelencia operativa y solidos modelos de negocio.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </Fragment>
  )
}
export default About