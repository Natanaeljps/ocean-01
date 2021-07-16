import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
// O meu será de Raças de Cachorro

const lista = [
  {
    id: 1,
    nome: 'Camarro',
    imagemUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtYXJvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    nome: 'Mercedes',
    imagemUrl:
      'https://images.unsplash.com/photo-1501066927591-314112b5888e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVyY2VkZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    nome: 'Mustang',
    imagemUrl:
      'https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwc3BvcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    nome: 'BMW',
    imagemUrl:
      'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJtd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 5,
    nome: 'Audi',
    imagemUrl:
      'https://images.unsplash.com/photo-1551727324-355cda9f1884?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF1ZGl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60123'
  }
]

function Item(props) {
  const indice = props.indice

  const item = lista[indice]

  return (
    <a href={'/visualizar/' + indice}>
      <div className="item">
        <h1 className="item__title">{item.nome}</h1>
        <img src={item.imagemUrl} alt={item.nome} width="200" />
      </div>
    </a>
  )
}

function Lista() {
  return (
    <div className="lista">
      {lista.map((item, index) => (
        <Item indice={index} key={index} />
      ))}
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img
          src="https://www.oceanbrasil.com/img/general/logoOceanI.png"
          alt="Samsung Ocean"
          width="300"
        />
      </a>
    </header>
  )
}

function Footer() {
  return <footer className="footer">Todos os direitos reservados.</footer>
}

function ListarItens() {
  return (
    <div>
      <Lista />
    </div>
  )
}

function VisualizarItem(props) {
  return (
    <div>
      <Item indice={props.match.params.id} />
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact={true} component={ListarItens} />

        <Route path="/visualizar/:id" component={VisualizarItem} />
      </Switch>
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
