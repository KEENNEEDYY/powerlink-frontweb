import powerlinkImg from '../../assets/Logo.svg';
import menuOpen from '../../assets/hamburger-open.svg';
import menuClose from '../../assets/hamburger.svg';
import instagramImg from '../../assets/instagram.svg';
import linkedinImg from '../../assets/linkedin.svg';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export default function Header() {

    const [btnActive, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!btnActive);
    }

    return (
        <>
            <header className="pwl-header">
                <nav className="pwl-navbar">
                    <a href="/">
                        <img className="pwl-powerlink-logo" src={powerlinkImg} alt="Logo" />
                    </a>
                    <div className="pwl-menu-itens">
                        <div onClick={ToggleMode}>
                            {!btnActive &&
                                <img className="pwl-menu-img" src={menuClose} alt="Menu" />
                            }
                            {btnActive &&
                                <>
                                    <img className="pwl-menu-img pwl-menu-display-show" src={menuOpen} alt="Menu" />
                                </>
                            }
                        </div>
                        <div>
                            <div className={btnActive ? "pwl-menu-display-show" : "pwl-menu-text"}>
                                <h3 className="pwl-display-none">Home</h3>
                                <h3 className="pwl-display-none">Sobre nós</h3>
                                <h3 className="pwl-display-none">Catalog</h3>
                                <a className={btnActive ? "pwl-menu-display-show" : "pwl-menu-hide"}
                                    href="mailto:contato@powerlinkco.com.br" target='_blank'>
                                    <h3>Contato</h3>
                                </a>
                                <NavLink className={({ isActive }) => isActive ?
                                    btnActive ? "pwl-menu-display-show pwl-menu-active-item" : "pwl-menu-hide pwl-menu-active-item"
                                    :
                                    btnActive ? "pwl-menu-display-show pwl-menu-hide" : "pwl-menu-hide pwl-menu-hide"
                                }

                                    to="customerArea">
                                    <h3>Área do Cliente</h3>
                                </NavLink>
                            </div>
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