import React from "react";
import Main from '../template/main/Main'

export default props =>
    <Main icon="home" title="Inicio"
        subtitle="Projeto CRUD React">
        <div className='display-4'>
            Bem vindo
        </div>
        <hr />
        <p className="mb-0">Este sistema foi desenvolvido para demonstrar a construção de um cadastro utilizando o React. O objetivo principal é exemplificar a implementação de um CRUD (Create, Read, Update, Delete), permitindo a manipulação eficiente de dados.</p>

        <br />
        <p>Este projeto foi criado com o intuito de ajudar a entender a sintaxe do React e como utilizá-lo para desenvolver aplicações práticas, como um sistema de cadastro de usuários.</p>

        <br/>

        <p>Para cadastrar um novo usuário, basta navegar até o menu e acessar a página "Usuários".</p>
        <br />
        
    </Main>