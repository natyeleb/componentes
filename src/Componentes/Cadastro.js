import React , { useState} from "react"
import Input from "./Input"
import "./Cadastro.scss"



const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div>
            <h1>Faça seu cadastro</h1>
        <form>
            <Input
            value={nome}
            type="text"
            label="nome"
            placeholder="Nome completo"
            atualizarstate={setNome}

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
        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
