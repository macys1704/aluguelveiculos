import './index.scss';
import { Link } from 'react-router-dom';

export default function Carro() {
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
            <label>Tipo</label>
            <input></input>
          </div>

          <div>
            <label>Modelo</label>
            <input></input>
          </div>

          <div>
            <label>Placa</label>
            <input></input>
          </div>

          <div>
            <label>Ano</label>
            <input></input>
          </div>

          <div>
            <label>Placa</label>
            <input></input>
          </div>

          <button>Salvar</button>

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


