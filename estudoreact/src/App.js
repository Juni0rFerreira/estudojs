import './App.css';
import { useState } from 'react'
// import SeuNome from './components/seunome';
import Condicional from './components/condicional';
// import OutraLista from './components/outralist';
// import Evento from './components/evento';
// import Form from './components/form';
// import HelloWord from './components/helloword';
// import SyMayName from './components/symayname';
// import Pessoa from './components/pessoa';
// import List from './components/list';

function App() {

  const meusItens = ['React', 'HTML', 'CSS'];
  const [nome, setNome] = useState();

  return (
    // <div className="App">
    //   <HelloWord />
    //   <SyMayName nome = "Mariana"/>
    //   <Pessoa 
    //   nome='Junior'
    //   idade='23'
    //   profissao='Programador'
    //   foto='https://via.placeholder.com/150'
    //   />
    //   <List/>
    //  </div>
    // <div className="App">
    //   <Evento />
    //   <Form />
    // </div>
    <div className="App">
      <Condicional/>
    </div>
    // <div className="App">
    //   <h1>Renderizando lista</h1>
    //   <OutraLista itens={meusItens} />
    //   <OutraLista itens={[]} />
    // </div>
    // <div className="App">
    //   <h1>State Lift</h1>
    //   <SeuNome setNome={setNome}/>
    //   {nome}
    // </div>
  );

  
}

export default App;
