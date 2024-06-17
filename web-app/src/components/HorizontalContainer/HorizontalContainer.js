// Aqui utilizamos a pratica de composição de componentes

import React from 'react';
import './HorizontalContainer.css';

function HorizontalContainer({ children }) {
    return (
        // Observe que as duas divs aqui usam seletores do componente Search Bar, 
        // caso deseja alterar alguma caracteristica troque de seletores
        <div className='horizontal-container'>
            <div className='internal-horizontal-container'>
                {children}
            </div>
        </div>
    );
}

export default HorizontalContainer;