import { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Carro() {

  const [tipoSelecionado, setTipoSelecionado] = useState(0);
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
          <h1>Elite</h1>
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
                <option value={item.id_tipo}> {item.nm_tipo} </option>
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

          <button onClick={salvar} >Salvar</button>

        </nav>

        <nav>
          <h1>Lista de Veículos</h1>

          <nav>
            <div className='listarclientes'>
              <label>Modelo, Marca, Placa
                Prius</label>
              <input></input>

            </div>
            <button className='lupa'>
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

              <tr>
                <td>HB20</td>
                <td>Hyundai</td>
                <td>2016</td>
                <td>Carro</td>
                <td>ABC-123</td>
                <img src='/assets/images/lixo.svg'></img>
                <img src='/assets/images/edit.svg'></img>
              </tr>

              <tr>
                <td>Prius</td>
                <td>Toyota</td>
                <td>2020</td>
                <td>Carro</td>
                <td>ABC-124</td>
                <img src='/assets/images/lixo.svg'></img>
                <img src='/assets/images/edit.svg'></img>
              </tr>

              <tr>
                <td>Corsa Hatch</td>
                <td>Chevrolet</td>
                <td>2008</td>
                <td>Carro</td>
                <td>ABC-125</td>
                <img src='/assets/images/lixo.svg'></img>
                <img src='/assets/images/edit.svg'></img>
              </tr>

              <tr>
                <td>CG 160 Titan</td>
                <td>Honda</td>
                <td>2017</td>
                <td>Moto</td>
                <td>ABC-126</td>
                <img src='/assets/images/lixo.svg'></img>
                <img src='/assets/images/edit.svg'></img>
              </tr>

            </tbody>
          </table>


        </nav>




      </div>

    </div>
  );
}


