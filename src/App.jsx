import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

//app de manejo de amigos 
function App() {
  const [amigos, setAmigos] = useState([ ]);

  const agregarAmigo = () => {
    const nombre = prompt('Ingrese el nombre de su amigo');
    setAmigos([...amigos, nombre]);
  }
  
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleToggle = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nuevoAmigo = {
      nombre: formData.get('nombre'),
      sobrenombre: formData.get('sobrenombre'),
      foto: formData.get('foto'),
    };
    setAmigos([...amigos, nuevoAmigo]);
    e.target.reset();
  }


    

  return (
    <div class="caja_1">

      <div className="App">
        <header className="App-header">
        <h1 class="title">Agregar Nuevo</h1>
        </header>
      <div class="section__boxes">
        <form className="form"  onSubmit={manejarSubmit}>
          <label className="form-label">
            Nombre:
            <input className="form-input" type="text" name="nombre" required  />
          </label>
          <label className="form-label">
          Sobrenombre:
            <input  className="form-input" type="text" name="sobrenombre" required  />
          </label>
          <label className="form-label">
            Foto:
            <input className="form-input" type="text" name="foto"  required />
          </label>
        </form>
        <switch className = 'switch' isOn = {isSwitchOn} handleToggle = {handleToggle} />
        <p>{isSwitchOn ? "El switch está encendido" : "El switch está apagado"}</p>





      </div>
      </div>
    </div>
  
  );
}

export default App;
