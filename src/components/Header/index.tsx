import { Link } from 'react-router-dom';
import powerlinkImg from '../../assets/Logo.svg';
import menuImg from '../../assets/hamburger.svg';
import instagramImg from '../../assets/instagram.svg';
import linkedinImg from '../../assets/linkedin.svg';

import './styles.css';

export default function Header() {
    return(
        <>
            <header className="pwl-header">
                <nav className="pwl-navbar">
                    <a href="/">
                        <img className="pwl-powerlink-logo" src={powerlinkImg} alt="Logo" />
                    </a>
                    <div className="pwl-menu-itens">
                        <img className="pwl-menu-img" src={menuImg} alt="Menu" />    
                        <div className="pwl-menu-text">
                            <h3 className="pwl-display-none">Home</h3>
                            <h3 className="pwl-display-none">Sobre nós</h3>
                            <h3 className="pwl-display-none">Catalog</h3>
                            <a href="mailto:contato@powerlinkco.com.br" target='_blank'>
                                <h3>Contato</h3>
                            </a>
                            <Link to="customerArea">
                                <h3>Área do Cliente</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="pwl-social-media">
                        <a href="https://www.instagram.com/powerlinkcompany?igsh=MTF3bnQ0bTNpa3Rvcw==" target='_blank'>
                            <img src={instagramImg} alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/company/powerlink-co/" target='_blank'>
                            <img src={linkedinImg} alt="Linkedin" />
                        </a>    
                    </div>
                </nav>
            </header>
        </>
    )
}