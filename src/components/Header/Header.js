import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
             <header>
                <nav className='header'>
                    <div>
                        <h1>MOBILE <span>WORLD</span></h1>
                    </div>
                    <div>
                        <a href="/samsung">Samsung</a>
                        <a href="/oppo">Oppo</a>
                        <a href="/vivo">Vivo</a>
                        <a href="/xaomi">Xaomi</a>
                        <a href="/redmi">Redmi</a>
                    </div>
                </nav>
        </header>
        </div>
    );
};

export default Header;