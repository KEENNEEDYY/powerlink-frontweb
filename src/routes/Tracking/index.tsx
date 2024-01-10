import cellphoneOneImg from '../../assets/cellphone.png';
import frotaTwoImg from '../../assets/section-two-cars.png';
import frotaThreeImg from '../../assets/section-three-frota.png';

import './styles.css';

export default function Tracking() {
    return (
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
                    <div className="pwl-tracking-section-two-container">
                        <div className="pwl-two-top-container">
                            <div className="pwl-title-two">
                                <h1>sua parceira confiável</h1>
                                <h1>em rastreamento</h1>
                                <h1>veicular</h1>
                            </div>
                            <img src={frotaTwoImg} alt="PowerLink Frota" />
                        </div>
                        <p>
                            A Powerlink é sua parceira confiável em rastreamento veicular. 
                            Com tecnologias inovadoras e um compromisso com a segurança, 
                            estamos aqui para oferecer a você a tranquilidade que merece. 
                            Conheça nossas soluções e experimente a diferença.
                        </p>
                    </div>
                </section>
                <section id="pwl-tracking-section-tree">
                    <div className="pwl-tracking-section-three-container">
                        <div className="pwl-section-three-top">
                            <div className="pwl-section-three-title">
                                <h1>SEJA QUAL FOR SUA NECESSIDADE</h1>
                                <h1>DE RASTREAMENTO VEICULAR</h1>
                                <h1>a Powerlink tem a solução perfeita para você</h1>
                            </div>
                            <div className="pwl-section-three-middle-content">
                                <div className="pwl-section-three-middle">
                                    <img src={frotaThreeImg} alt="Powerlink Frota" />
                                </div>
                                <div className="pwl-section-three-bottom">
                                    <div className="pwl-section-three-card-line">
                                        <div className="pwl-section-three-card pwl-section-three-card-left">
                                            <h1>✔ Carro</h1>
                                            <p>Você sabe a localização do seu veículo em tempo real 24 horas por dia.</p>
                                        </div>
                                        <div className="pwl-section-three-card pwl-section-three-card-right">
                                            <h1>✔ Caminhões</h1>
                                            <p>Não perca seu caminhão de vista, acompanhe o deslocamento.</p>
                                        </div>
                                    </div>
                                    <div className="pwl-section-three-card-line">
                                        <div className="pwl-section-three-card pwl-section-three-card-left">
                                            <h1>✔ Motocicletas</h1>
                                            <p>Nano é feito para todos os tipos, marcas e modelos de motocicletas.</p>
                                        </div>
                                        <div className="pwl-section-three-card pwl-section-three-card-right">
                                            <h1>✔ Frota</h1>
                                            <p>A gestão da sua frota precisa de um equipamento confiável.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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