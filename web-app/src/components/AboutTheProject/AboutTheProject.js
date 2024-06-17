import React from 'react';
import { Link } from 'react-router-dom';
import './AboutTheProject.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const markdown = `
# 1. O problema
Diversos gestores e desenvolvedores passam por desconforto ao buscar por informações a cerca de usuários no GitHub de maneira clara e intuitiva, visto que o layout das aplicações existentes para esse propósito possuem layout confuso, o que dificulta a navegação e análise de infromações relevantes.

# 2. A Solução
O github profile viewer é uma aplicação web em REACT.js que permite buscar, listar e visualizar detalhes e repositórios de um usuário do Github.O projeto é capaz de consumir a API do Github e exibir as informações no frontend com REACT.js.

# 2.1.Funcionalidades
- Listar Usuários: A aplicação deve exibir uma lista de usuários obtidos da API do GitHub.
- Busca de Usuários: A aplicação deve permitir a busca de usuários por nome, login ou título, utilizando a barra de pesquisa
- Detalhes de Usuário: Ao selecionar um usuário na lista, a aplicação deve exibir detalhes do usuário, incluindo nome, login, email e link para o perfil do GitHub.
- Listar Repositórios Ao selecionar um usuário, a aplicação deve exibir uma lista dos repositórios desse usuário.

# 3. Arquitetura
O projeto é composto por duas camadas: frontend e backend, este que inclui uma API remota do GitHub.

## Vantagens de não conter um componente backend para consumo da API: 
- Simplicidade: Menos componentes para gerenciar
- Performance: Reduzo a latência, pois a comunicação com a API é direta no frontend

## Desvantagens de não conter um componente backend para consumo da API:
- Segurança: Como é observável, a chave de API do GitHub fica exposta no frontend, o que leva a vulnerabilidades da conta do github do desenvolvedor, portanto, é necessário que, ao dar fork no projeto, o cliente gere sua própria chave de API.

# 3.1.Frontend
## UX & UI Design
Frequentemente o desenvolvimento de interfaces gráficas é acompanhado por atrasos e retrabalho quando não é acompanhado de boas práticas de design de interface humano computador.Bons designs usam a UX em consideração para desenvolver a UI ao se basear no UCD(Design Centrado no Usuário), de forma que ela seja responsiva, interativa e amigável.Para este projeto, o UX Design foi trabalhado bem sutilmente ao usar como base outras interfaces de buscadores de informação com design amigável e simples de utilizar.O design da interface pode ser visualizado no seguinte link: https://www.figma.com/design/SGEFXM7N7UQ2220jCJ5iQz/GitHub-Profile-Viewer?node-id=0-1&t=WEURuGDAJeq2kvms-1 

## REACT.js
Descrição: A inteface do usuário é desenvolvida com REACT.js, HTML(JSX) e CSS(CSS -in -Js), visando ser atraente, intuitiva e responsiva. 

## Bootstrap
Descrição: O framework foi utilizado para agilizar no desenvolvimento da interface, visto que possui layouts responsivos e customizáveis.

# 3.2.Backend
Descrição: A API REST do github possui serviços de busca por informações do usuário e informações do repositório do usuário.
    Ref: https://docs.github.com/pt/rest/quickstart?apiVersion=2022-11-28
`;

function AboutTheProject() {
    return (
        <div>
            <Header />
            <main>
                <div className='project-info'>
                    <div className='project-details-section'>
                        <div className='home-link'><Link to="/">Go Back to Home</Link></div>
                        <p className='project-name'>About The Project</p>
                        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default AboutTheProject;
