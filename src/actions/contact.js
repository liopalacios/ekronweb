import axios from 'axios'

export const contact = ( {name, lastName, telf, email, company, message})  => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Content-Type-Options': 'nosniff'
    }    
  }
  
  const body = JSON.stringify({ name, lastName, telf, email, company, message })
  // const body = { name, lastName, telf, email, company, message }


  try{
    const res = await axios.post('/api/form', body, config)         
  } catch(err){
    const errors = err.response.data.errors;
    console.log('ERROR ', errors)
  }

}



export default contact