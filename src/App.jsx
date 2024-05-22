import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TableCell, TableHead, TableRow } from '@mui/material';
import Alert from '@mui/material/Alert';
import { TableBody, Table } from '@mui/material';
import './App.css';


//app de manejo de amigos 
function App() {
  const [amigos, setAmigos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [sobrenombre, setSobrenombre] = useState('');
  const [foto, setFoto] = useState('');
  const [esMejorAmigo, setEsMejorAmigo] = useState(false);
  const [alertaVisible, setAlertaVisible] = useState(false);

  const agregarAmigo = () => {
    if (!nombre || !sobrenombre || !foto) {
      setAlertaVisible(true);
      return;
    }
    const nuevoAmigo = {
      nombre,
      sobrenombre,
      foto,
      esMejorAmigo
    };
    setAmigos([...amigos, nuevoAmigo]);
    setNombre('');
    setSobrenombre('');
    setFoto('');
    setEsMejorAmigo(false);
    setAlertaVisible(false);
    console.log([...amigos, nuevoAmigo]);
  };

  const handleChangeSwitch = (event) => {
    setEsMejorAmigo(event.target.checked);
  };

  return (
    <div>
      {alertaVisible && (
        <Alert severity="warning" style={{ marginBottom: '10px' }}>
          Todos los campos son requeridos para guardar un nuevo amigo.
        </Alert>
      )}
      <div className="caja_1">
        <div className="App">
          <header className="App-header">
            <h1 className="title">Agregar Nuevo</h1>
          </header>
          <div className="section__boxes">
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <label className="form-label">
                <TextField
                  className="form-input"
                  id="outlined-required"
                  label="Nombre"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </label>
              <label className="form-label">
                <TextField
                  className="form-input"
                  id="outlined-required"
                  label="Sobrenombre"
                  name="sobrenombre"
                  value={sobrenombre}
                  onChange={(e) => setSobrenombre(e.target.value)}
                  required
                />
              </label>
              <label className="form-label">
                <TextField
                  className="form-input"
                  id="outlined-required"
                  label="Foto"
                  name="foto"
                  value={foto}
                  onChange={(e) => setFoto(e.target.value)}
                  required
                />
              </label>
            </form>
            <div className="switch_save">
              <Switch
                className="switch"
                checked={esMejorAmigo}
                onChange={handleChangeSwitch}
              />
              <h2 className="pregunta">Es mejor amigo</h2>
            </div>
            <div className="boton">
              <button className="btn" onClick={agregarAmigo}>GUARDAR</button>
            </div>
          </div>
          <div className="table">
            <Table>
              <TableHead className="table_head">
                <TableRow className="tablerow">
                  <TableCell className="tablecell">Foto</TableCell>
                  <TableCell className="tablecell">Nombre</TableCell>
                  <TableCell className="tablecell">Sobrenombre</TableCell>
                  <TableCell className="tablecell">Es mejor amigo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {amigos.map((amigo, index) => (
                  <TableRow key={index} className="tablerow">
                    <TableCell className="tablecell"><img src={amigo.foto} alt={`${amigo.nombre}`} style={{ width: '50px', height: '50px' }} /></TableCell>
                    <TableCell className="tablecell">{amigo.nombre}</TableCell>
                    <TableCell className="tablecell">{amigo.sobrenombre}</TableCell>
                    <TableCell className="tablecell">{amigo.esMejorAmigo ? 'Sí' : 'No'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
