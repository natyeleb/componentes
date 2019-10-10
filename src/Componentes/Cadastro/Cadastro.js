import React , {useState, useEffect} from "react"
import Input from "../Input"
import "./Cadastro.scss"
import Botao from "../Botao/Botao";

const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [id, setId] = useState(1);

    const gerarPersonagem = () => {
        if (id === 494) {
          setId(1);
        } else {
          setId(id + 1)
        }
      }
    
    const handleSubmit = e => {
        e.preventDefault();
        
    };
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`, {
          method: "GET"
        }).then(result => {
          return result.json()
        }).then(data => {
          console.log(data)
        }).catch(() => {
          console.error("Erroooooooou, internet ruim ou você que é")
        })
      }, [id]) 
    
    


    return (
    <div className="Cadastro">
      <h1>Faça seu cadastro</h1>
      <button onClick={gerarPersonagem}>Gerar personagem</button>
      <form onSubmit={handleSubmit}>
            <Input
            value={nome}
            type="text"
            label="nome"
            placeholder="Nome completo"
            atualizarState={setNome}

        />
         <Input
            value={email}
            type="email"
            label="Email"
            placeholder="Digite seu email"
            atualizarState={setEmail}
        />
        <Input
            value={confirmEmail}
            type="email"
            label="Confirmar Email"
            placeholder="Confirme seu email"
            atualizarState={setConfirmEmail}
             
        />
        <Input
            value={senha}
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            atualizarState={setSenha}
            
        />
        <Botao>Cadastrar</Botao>
      </form>
    </div>
  );
};

export default Cadastro;
