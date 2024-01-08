import cellphoneOneImg from '../../assets/cellphone.png';

import './styles.css';

export default function Tracking() {
    return(
        <>
            <main className="pwl-tracking-main pwl-align-itens">
                <section id="pwl-tracking-section-one">
                   <div className="pwl-tracking-section-one-container">
                        <div className="pwl-top-content-one">
                            <div className="pwl-title-one">
                                <h1>Tecnologia</h1>
                                <h1>em rastreamento de veículos</h1>
                                <h1>e frota!</h1>
                                <p>
                                    Monitoramento Powerlink, rastreamento  
                                    do seu veículo por satélite e usando tecnologia 4G
                                </p>
                            </div>
                            <div className="pwl-button-one">
                                Peça seu plano
                            </div>
                        </div>
                        <img className="pwl-cellphone-one" src={cellphoneOneImg} alt="Powerlinkcellphone" />
                   </div>
                </section>
                <section id="pwl-tracking-section-two">
                    <h3>Section 2</h3>
                </section>
                <section id="pwl-tracking-section-tree">
                    <h3>Section 3</h3>
                </section>
                <section id="pwl-tracking-section-four">
                    <h3>Section 4</h3>
                </section>
                <section id="pwl-tracking-section-five">
                    <h3>Section 5</h3>
                </section>
                <section id="pwl-tracking-section-six">
                    <h3>Section 6</h3>
                </section>
            </main>
        </>
    )
}