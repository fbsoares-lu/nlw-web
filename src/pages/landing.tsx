import React from 'react';

import '../styles/pages/landing.css';
import Logo from '../images/Logo.svg';

function Landing() {
    return(
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={Logo} alt="happy"/>

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                    <strong>Recife</strong>
                    <span>Pernambuco</span>
                </div>

                <a href="/">></a>
            </div>
        </div>
    );
}

export default Landing;