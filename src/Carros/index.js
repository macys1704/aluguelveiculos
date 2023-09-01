import { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Carro() {

  const [tipoSelecionado, setTipoSelecionado] = useState(0);
  const [listarVeiculos,setListarVeiculos] = useState([])
  const [modelo,setModelo] = useState('');
  const [ano,setAno] = useState('');
  const [tipo,setTipo] = useState([]);
  const [marca,setMarca] = useState('');
  const [placa,setPlaca] = useState('');
  const [erro,setErro] = useState('')

  async function salvar(){
    try {
      let veiculo = {
        idTipoVeiculo:tipoSelecionado,
        modelo:modelo,
        marca:marca,
        ano:ano,
        placa:placa
      }

      let x = await axios.post('http://localhost:5000/veiculo', veiculo);
  
      alert('Veículo cadastrado!');
      
    } catch (err) {
      setErro(err.response.data.erro);
    }
    
  }
  async function listar() {
    let r = await axios.get('http://localhost:5000/veiculo');
    setListarVeiculos(r.data);
  }
  
  async function listarTipos() {
    let r = await axios.get('http://localhost:5000/veiculo/tipo');
    setTipo(r.data);
  }

  useEffect (() => {
    listarTipos()
  },[])

 
  return (
    <div className="page1">
      <aside>
        <img className='logo' src='/assets/images/logo.png'></img>
        <div>
          <h1>Elitee</h1>
          <h1>Wheelz</h1>
        </div>

        <div>
          <img className='icons' src='/assets/images/1.svg'></img>
          <a>Home</a>
        </div>

        <div>
          <img className='icons' src='/assets/images/2.png'></img>
          <Link to={'/'}>Clientes</Link>
        </div>

        <div className='hover'>

          <img className='icons' src='/assets/images/3.png'></img>
          <Link to={'/Carros'}>Veículos</Link>
        </div>

        <div>
          <img className='icons' src='/assets/images/4.png'></img>
          <Link to={'/Locação'}>Locações</Link>
        </div>

      </aside>


      <div className='cont'>
        <header>
          <h2>Olá, que bom que você voltou!</h2>
          <h1>A</h1>
        </header>


        <h1>Controle de Veículos</h1>

        <nav>
          <h1>Novo Veículo</h1>

          <div>
            <select  id='veiculo' name='veiculo' value={tipoSelecionado} onChange={e => setTipoSelecionado(e.target.value)}>
            <option value={0}> Selecione </option>
              {tipo.map (item =>
                <option value={item.id}> {item.tipo} </option>
                )}  
            </select>
          </div>

          <div>
            <label>Modelo</label>
            <input value={modelo} onChange={e => setModelo(e.target.value)}></input>
          </div>

          <div>
            <label>Marca</label>
            <input value={marca} onChange={e => setMarca(e.target.value)}></input>
          </div>

          <div>
            <label>Ano</label>
            <input value={ano} onChange={e => setAno(e.target.value)}></input>
          </div>

          <div>
            <label>Placa</label>
            <input value={placa} onChange={e => setPlaca(e.target.value)}></input>
          </div>

          <button onClick={salvar}>Salvar</button>

        </nav>

        <nav>
          <h1>Lista de Veículos</h1>

          <nav  className='listar'>
                
              <input placeholder='Placa,Modelo e Ano' ></input>

    
            <button onClick={listar}>
              <img src='/assets/images/lupa.jpg'></img>
            </button>
          
          </nav>

          <table>
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Marca</th>
                <th>Ano</th>
                <th>Tipo</th>
                <th>Placa</th>
                <th></th>
                
              </tr>
            </thead>
            <tbody>
            {listarVeiculos.map(item =>
                <tr>
                  <td>{item.ds_modelo}</td>
                  <td>{item.ds_marca}</td>
                  <td>{item.nr_ano}</td>
                  <td> {item.id_tipo}</td>
                  <td>{item.ds_placa}</td>
                 <button  className='lupa'> <img src='/assets/images/lixo.svg'></img> </button>
                  <img src='/assets/images/edit.svg'></img>
                </tr>
              )}

            </tbody>
          </table>


        </nav>




      </div>

    </div>
  );
}


