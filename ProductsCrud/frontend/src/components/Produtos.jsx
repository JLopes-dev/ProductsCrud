import axios from "axios"
import { useState, useEffect } from "react"
const Produtos = () => {
    const [produtos, setProdutos] = useState([])
    useEffect(() => {
        async function fetchProdutos() {
          try {
            const response = await axios.get('http://localhost:3001/produtos');
            setProdutos(response.data.message);
          } catch (error) {
            console.error('Erro ao buscar produtos:', error);
          }
        }
    
        fetchProdutos();
      }, [produtos]);
    return (
        <div className="bodyContainer">
            <div>
                {produtos.map(e => (
                    <h2 key={e._id}>{e.nome} - {e.preco} - {e.quantidade}</h2>
                ))}
            </div>
        </div>
    )
}
export default Produtos