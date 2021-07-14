import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/*
CRUD (Create, Read (Single & All), Update, Delete)
Create -> Formulário de criação
Read All -> Listagem de itens cadastrados
Read Single -> Visualização de um item específico
Update -> Formulário de edição
Delete -> Remover um item específico
*/

// Read All
// Precisa dos dados que serão exibidos
// A estrutura desses dados precisa possuir 'Nome' e 'URL da Imagem'

// Decidam qual será o tema da sua aplicação

//construir uma lista
const lista = [
  {
    id: 1,
    nome: 'mustang',
    imagemUrl:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    nome: 'fusca',
    imagemUrl:
      'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
]

function Item(props) {
  
  const indice = props.indice;

  const item = lista[indice];

  return (<div>
    {item.nome}
  <br />
  <img src={item.imagemUrl} alt={item.nome} width="200" />

  </div>);
}

function Lista() {
  return (
    <div>
      {lista.map((item,index) => (<Item indice={index} />))}
      
    </div>
  )
}

function App() {
  return (
    <div>
      <Lista />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
