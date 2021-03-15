import React, 
  { Fragment, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faMap, 
  faPhoneAlt} from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha";

const Contact = ( ) => {
  const [formData, setFormData ] = useState({
    name: '',
    lastName: '',
    telf: '',
    email: '',
    company: '',
    message: ''
  })

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})  
  
  const {name, lastName, telf, email, company, message } = formData
  
  let recaptchaRef = React.useRef();

  function verifyCallback (recaptchaValue) {
    if (!recaptchaValue || recaptchaValue.trim().length === 0) {
      return false;
    } else {
      return true;
    }     
  }
 

  const onSubmit = async e => {
    e.preventDefault();
    
    let recaptchaValue = await recaptchaRef.current.getValue();
    let isRecaptchaValue = await verifyCallback(recaptchaValue);

    if(!isRecaptchaValue){
      alert("Coloca el Capcha")  
      return 
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff'
      }    
    }

    const body = JSON.stringify({ name, lastName, telf, email, company, message });

    try{
      const res = await axios.post('http://localhost:8080/api/send', body, config)
      console.log("RESPUESTA ", res)
      await setFormData({
        name: '',
        lastName: '',
        telf: '',
        email: '',
        company: '',
        message: '',        
      })      
      recaptchaValue = null;
      recaptchaRef.current.reset();
    } catch(err){
      console.log('ERROR', err)
    }
    
  }


  return (
    <Fragment>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2 data-aos="fade-up">Contáctanos</h2>
             <p data-aos="fade-up">Si tienes dudas o consultas, llena el formulario y comunícate con nosotros. Te responderemos lo más pronto posible.</p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 mt-4" data-aos="fade-up">
              <div className="info-box">
                <FontAwesomeIcon icon={faMap} size="2x" color="#ff5821"/>
                <h3>Dirección</h3>
                <p> Av. Tomas Marsano 1623,  Piso 6 Oficina- 601, Lima, Perú</p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="200">
              <div className="info-box">
                <FontAwesomeIcon icon={faPhoneAlt} size="2x" color="#ff5821" />
                <h3>Llámanos </h3>
                <p><strong>Telf:</strong> +(51) 01 320 8063</p>
                <p><strong>Cel:</strong>  +(51) 987712981</p>
              </div>
            </div>
          </div>

          {/* /////////// F O R M /////////////////////  */}
          <div 
            className="row justify-content-center" 
            data-aos="fade-up" 
            data-aos-delay="300">
            
            <div 
              className="col-xl-9 col-lg-12 mt-4">
              <form className="php-email-form" onSubmit={e => onSubmit(e)}>
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input type="text"  placeholder="Nombres" className="form-control" id="name" name="name" value={name}  onChange={e => onChange(e)} required />
                  </div>
                  <div className="col-md-6 form-group">
                  <input type="text" placeholder="Apellidos" className="form-control" id="lastName" name="lastName" value={lastName}  onChange={e => onChange(e)} required />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input type="telf" placeholder="Celular" className="form-control" id="telf" name="telf" value={telf} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Correo" className="form-control" id="email" name="email" value={email} onChange={e => onChange(e)} required  />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Empresa" className="form-control" id="company" name="company" value={company} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                  <textarea type="text" placeholder="Escriba aqui su consulta" className="form-control" rows="5" id="message" name="message" value={message} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LdAxK8UAAAAAFLqBmEXIXF-5F_x99yygkQDMfPL"
                    required
                    onChange={e => onChange(e)} 
                  />
                </div>
                
                <div className="text-center"><button type="submit">Envia el Mensaje</button></div>
              </form>
            </div>
          </div>     
        </div>
      </section>
    </Fragment>
  )
}

export default Contact;
