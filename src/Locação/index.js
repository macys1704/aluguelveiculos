
import './index.scss';
import { Link } from 'react-router-dom';

export default function Locacao() {
  return (
    <div className="page3">
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

        <div>

          <img className='icons' src='/assets/images/3.png'></img>
          <Link to={'/Carros'}>Veículos</Link>
        </div>

        <div  className='hover'>
          <img className='icons' src='/assets/images/4.png'></img>
          <Link to={'/Locação'}>Locações</Link>
        </div>

      </aside>


      <div className='cont'>
        <header>
          <h2>Olá, que bom que você voltou!</h2>
          <h1>A</h1>
        </header>


        <h1>Controle de Locação</h1>

        <nav>
          <h1>Novo Locação</h1>
          
          <div>
          <div>
            <label>Nome</label>
            <input></input>
          </div>
          <img src='/assets/images/seta.jpg'></img>
          <div>
            <label>Cliente</label>
            <input></input>
          </div>
          </div>

          <div>
          <div>
            <label>Modelo</label>
            <input></input>
          </div>
          <img src='/assets/images/seta.jpg'></img>
          <div>
            <label>Veiculo</label>
            <input></input>
          </div>
          </div>

          <div>
          <div>
            <label>Data de Locação</label>
            <input></input>
          </div>
          <div className='lorem'>
            <label>Observações</label>
            <p>Lorem ipsum dolor sit amet consectetur. Est et eu egestas viverra pulvinar sit. Fringilla commodo quis molestie nisl. Nam laoreet porttitor amet ipsum ultricies a risus auctor.</p>
          </div>
          </div>

          <div>
          <div>
            <label>KM Atual</label>
            <input></input>
          </div>
          </div>

          <article>
          <div>
            <input type='checkbox'></input>
            <p>Seguro</p>
          </div>
          </article>
          

          

          <button>Salvar Locação</button>

        </nav>

        <nav>
          <h1>Locações em Andamento</h1>

          <nav>
            <div className='listarclientes'>
              <label>Nome ou CPF</label>
              <input></input>

            </div>
            <button className='lupa'>
              <img src='/assets/images/lupa.jpg'></img>
            </button>
          </nav>

          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>CPF</th>
                <th>Veículo</th>
                <th>Data de Locação</th>
                <th></th>
                <th></th>
                
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>Bruno</td>
                <td>123.345.589-10</td>
                <td>HB20 (ABC-123)</td>
                <td>25/08/2023</td>
                <button>Concluir</button>
                <img src='/assets/images/lixo.svg'></img>
                <img src='/assets/images/edit.svg'></img>
              </tr>

              <tr>
                <td>Helen</td>
                <td>432.543.642-34</td>
                <td>FIT (ABC-432)</td>
                <td>22/02/2023</td>
                <button>Concluir</button>
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


