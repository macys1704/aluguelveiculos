import { useState } from 'react'
import './index.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Clientes() {


  const [tipos,setTipos] = useState([])
  const [listaClientes, setlistaClientes] = useState([]);
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [cnh, setCnh] = useState('')


  async function tipoSelecionado(){
    let x = await axios.get('http://localhost:5000/veiculo/tipo');
   
    setTipos(x.data)
  }

  async function listarTodos() {
    let url = 'http://localhost:5000/listar';

    let resp = await axios.get(url);
    setlistaClientes(resp.data)
  }

  async function salvarCliente() {
    let cliente = {
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      email: email,
      cnh: cnh
    }

    let url = 'http://localhost:5000/inserir'
    let resposta = await axios.post(url, cliente)

    alert('cliente salvo com sucesso')
  }

  async function apagar(id) {
    let url = `http://localhost:5000/delete?id=${id}`;

    try {
        let resp = await axios.get(url);
        console.log('Recurso apagado:', resp.data);
    } catch (error) {
        console.error('Erro ao apagar recurso:', error);
    }
}

  return (
    <div className="page2">
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

        <div className='hover'>
          <img className='icons' src='/assets/images/2.png'></img>
          <Link to={'/'}>Clientes</Link>
        </div>

        <div>
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


        <h1>Controle de Clientes</h1>

        <nav>
          <h1>Novo Cliente</h1>

          <div>
            <label>Nome</label>
            <input value={nome} onChange={e => setNome(e.target.value)} ></input>
          </div>

          <div>
            <label>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} ></input>
          </div>

          <div>
            <label>Telefone</label>
            <input value={telefone} onChange={e => setTelefone(e.target.value)} ></input>
          </div>

          <div>
            <label>CPF</label>
            <input value={cpf} onChange={e => setCpf(e.target.value)} ></input>
          </div>

          <div>
            <label>CNH</label>
            <input value={cnh} onChange={e => setCnh(e.target.value)}></input>
          </div>

          <button onClick={salvarCliente}>Salvar</button>

        </nav>

        <nav>
          <h1>Lista de Clientes</h1>

          <nav>
            <div className='listarclientes'>
              <label>Nome</label>
              <input></input>
            </div>
            
            <button className='lupa' onClick={listarTodos} > <img src='/assets/images/lupa.jpg'></img> </button>
          </nav>

          <table>
            <thead>
              
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

              {listaClientes.map(item =>
                <tr>
                  <td>{item.nm_cliente}</td>
                  <td>{item.nr_cpf}</td>
                  <td>{item.nr_telefone}</td>
                  <td>{item.nm_email}</td>
                 <button  className='lupa' onClick={apagar} > <img src='/assets/images/lixo.svg'></img> </button>
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

export default Clientes;
