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
import Paper from '@mui/material/Paper';
import { TablePagination} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';




import './App.css';


//app de manejo de amigos 
function App() {
  const [amigos, setAmigos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [sobrenombre, setSobrenombre] = useState('');
  const [foto, setFoto] = useState('');
  const [esMejorAmigo, setEsMejorAmigo] = useState(false);
  const [alertaVisible, setAlertaVisible] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [showBottom, setShowBottom] = useState(false);
  const [showMensaje, setShowMensaje] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

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
    setShowBottom(true);
    setShowMensaje(false);
    setShowSuccess(true);
    console.log([...amigos, nuevoAmigo]);
  };

  const handleChangeSwitch = (event) => {
    setEsMejorAmigo(event.target.checked);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 

  return (
    
    
    <div className="Appp">
      <AppBar position="static" className='appbar'>
    <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <Menu />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
        CompasApp
        </Typography>
    </Toolbar>
    </AppBar>
<div>

      <div className="caja_2">
      {alertaVisible && (
        <Alert severity="warning" className='warning'>
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
              <button className="btn" onClick={agregarAmigo} >GUARDAR</button>
              
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
                {(rowsPerPage > 0
                  ? amigos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : amigos
                ).map((amigo, index) => (
                  <TableRow key={index} className="tablerow">
                    <TableCell className="tablecell"><img src={amigo.foto} alt={amigo.nombre} style={{ width: '50px', height: '50px' }} /></TableCell>
                    <TableCell className="tablecell">{amigo.nombre}</TableCell>
                    <TableCell className="tablecell">{amigo.sobrenombre}</TableCell>
                    <TableCell className="tablecell">{amigo.esMejorAmigo ? 'Sí' : 'No'}</TableCell>
                  </TableRow>
                ))}

                
              </TableBody>
              
            </Table>
            {showMensaje && (
              <div className='box_text'>
                <h1 className='mensajito'>No hay amigos :( </h1>
              </div>
            )}
                {showBottom && (
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={amigos.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                )}

                

                


          </div>
        </div>
      </div >
      <div className="caja_success">
      {showSuccess && (
  <Alert severity="success" className='success' onClose={() => setShowSuccess(false)}>
    Amigo guardado con éxito!
  </Alert>
)}   
</div>
      </div>
    </div>
    </div>
  );
}

export default App;

