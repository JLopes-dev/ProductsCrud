import { useState } from "react"
import axios from "axios"
import "./Header.css"
const Header = () => {

  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [quantidade, setQuantidade] = useState("")

  async function pegarTodosOsDados(e){
    e.preventDefault()
    const dados = {
      nome,
      preco,
      quantidade
    };
    await axios.post("http://localhost:3001/produtos", dados)
  }

  return ( 
      <form onSubmit={pegarTodosOsDados} className="form">
        <div className="inputsContainer">
          <input 
          type="text" 
          placeholder="Nome do Produto"
          onChange={(e) => setNome(e.target.value)}/>
        </div>
        <div className="inputsContainer">
          <input 
          type="text" 
          placeholder="Preço"
          onChange={(e) => setPreco(e.target.value)}/>
        </div>
        <div className="inputsContainer">
          <input 
          type="text" 
          placeholder="Quantidade"
          onChange={(e) => setQuantidade(e.target.value)}/>
        </div>
        <div className="inputsContainer">
          <button>Cadastrar</button>
        </div>
      </form>
  )
}
export default Header