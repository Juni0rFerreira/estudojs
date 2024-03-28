import { useState } from 'react';

function Condicional() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);

    }

    function limparEmail(e) {
        setUserEmail('');
    }

    function validarEmail(e) {
        const nome = e.target.value;
        setEmail(nome);
        // console.log(nome);
        console.log(e.target);
    }

    return (
        <div>
            <h2>Cadastre seu email:</h2>
            <form>
                <input type="email" placeholder="Digite seu email..." onChange={validarEmail} ></input>
                <button type="submit" onClick={enviarEmail} >Enviar um email</button>
                {userEmail && (
                    <div>
                        O e-mail do usuario é {userEmail}
                        <button onClick={limparEmail} >Limpar E-mail</button>
                    </div>
                )} 
            </form>
        </div>
    )

}

export default Condicional;