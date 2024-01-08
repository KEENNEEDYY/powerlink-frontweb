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
                    <img className="pwl-powerlink-logo" src={powerlinkImg} alt="Logo" />
                    <div className="pwl-menu-itens">
                        <img className="pwl-menu-img" src={menuImg} alt="Menu" />    
                        <div className="pwl-menu-text">
                            <h3>Home</h3>
                            <h3>Sobre nós</h3>
                            <h3>Catalog</h3>
                            <h3>Contato</h3>
                            <h3>Área do Cliente</h3>
                        </div>
                    </div>
                    <div className="pwl-social-media">
                        <img src={instagramImg} alt="Instagram" />                        
                        <img src={linkedinImg} alt="Linkedin" />                        
                    </div>
                </nav>
            </header>
        </>
    )
}