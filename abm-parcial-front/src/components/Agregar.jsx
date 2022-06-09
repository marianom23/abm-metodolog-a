import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const Agregar = () => {

  const [data, setData] = useState({titulo:"",autor:"",edicion:""})
  let navigate = useNavigate();
  const handleChange = ({target})=> {
      setData({
          ...data,
          [target.name]: target.value
      })
  }

  const handleSubmit = async (e) =>{
      if (data.titulo === '' || data.autor === '' || data.edicion <= 0) {
            alert('Todos los campos son obligatorios y edicion no puede ser 0 o menor')
            return
      }    
      e.preventDefault()
      await axios.post('http://localhost:9000/api', data)
      navigate("/grilla", { replace: true });
  }

  return (  
        <div className="container">  
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">titulo</label>
                    <input value={data.titulo} name="titulo" onChange={handleChange} type="text" id="titulo" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="autor" className="form-label">autor</label>
                    <input value={data.autor} name="autor" onChange={handleChange} type="text" id="autor" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="edicion" className="form-label">edicion</label>
                    <input value={data.edicion} name="edicion" onChange={handleChange} type="number" id="autor" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>     
        </div>   
  )
}

