import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';

// Nossa fetchrepos recebe nossa query
function SearchBar({ onSearch }) {
    // Estado inicialmente vazio. useState é um hook (permite se ligar ao estado de um componente)
    const [query, setQuery] = useState('');

    // Objeto que lida com a busca de data
    function handleSubmit(event) {
        // A página não irá recarregar na busca
        event.preventDefault();

        // formato a string para nao haver espaco em branco no final e verifico se existe
        if (query.trim())
            // inicio a busca
            onSearch(query);
    };

    return (
        <section className='section-extern-container'>
            <div className='section-internal-container'>
                <div className='left-section-internal-container'>
                    {/* Link permite navegar para alguma das rotas configuradas no projeto */}
                    <Link to="/about-the-project" className="about-project">After all, what is the GitHub Profile Viewer?</Link>
                </div>
                <div className='right-section-internal-container'>
                    {/* 
                    onSubmit: O objeto handle submit é instanciado a partir daqui, usamos setQuery para atualizar o estado e iniciar a busca.
                    Value: value é então definida como query (string vazia inicialmente),
                    onChange: atualizo query com o valor novo digitado pelo usuário
                    */}
                    <form onSubmit={handleSubmit}>
                        <input className="search-form"
                            value={query} onChange={(e) => setQuery(e.target.value)}
                            type="text" name="search" placeholder="Search...">
                        </input>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default SearchBar;
