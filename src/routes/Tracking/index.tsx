import cellphoneOneImg from '../../assets/cellphone.png';
import frotaTwoImg from '../../assets/section-two-cars.png';
import frotaThreeImg from '../../assets/section-three-frota.png';
import mapFourImg from '../../assets/section-four-map.png';
import foneHandFourImg from '../../assets/section-four-foneHand.png';
import phoneFiveImg from '../../assets/section-five-image.png';

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
                    <div className="pwl-section-four-top-container">
                        <div className="pwl-section-four-top">
                            <div className="pwl-section-four-title pwl-section-four-flex-item-1">
                                <div className="pwl-section-four-title-h1">
                                    <h1>Sua parceria confiável</h1>
                                    <h1>em rastreamento</h1>
                                    <h1>veicular</h1>
                                </div>
                                <img src={mapFourImg} alt="Map" />
                            </div>
                            <div className="pwl-section-four-flex-item-2">
                                <div className="pwl-section-four-middle">
                                    <p>
                                        Você controla tudo através do nosso aplicativo exclusivo disponível para dispositivos
                                        ANDROID e IOS.
                                    </p>
                                </div>
                                <div className="pwl-section-four-bootom-main">
                                    <div className="pwl-section-four-bottom">
                                        <img src={foneHandFourImg} alt="Phone Hand" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pwl-four-footer"></div>
                    </div>
                </section>











                <section id="pwl-tracking-section-five">
                    
                <div className="pwl-section-five-top-container">
                    <div className="pwl-section-five-top pwl-section-top">
                        <div className="pwl-section-five-top-left-content">
                            <div className="pwl-section-five-title">
                                <h1>A escolha inteligente</h1>
                                <h1>para sua</h1>
                                <h1>segurança</h1>
                            </div>
                            <div className="pwl-section-five-bottom">
                                <p>
                                    Nossos rastreadores são resultado de um desenvolvimento que segue os padrões de
                                    qualidade
                                    mais elevados do mundo.
                                </p>
                            </div>
                            <div className="pwl-section-five-bottom-list">
                                <div className="pwl-section-five-bottom-list-line">
                                    <span>✔</span>
                                    <h3>Eles são resistentes</h3>
                                </div>
                                <div className="pwl-section-five-bottom-list-line">
                                    <span>✔</span>
                                    <h3>Não causam interferências na eletrônica do seu veículo</h3>
                                </div>
                                <div className="pwl-section-five-bottom-list-line">
                                    <span>✔</span>
                                    <h3>São extremamente fáceis de instalar e usar</h3>
                                </div>
                            </div>
                        </div>
                        <div className="pwl-section-five-middle">
                            <img src={phoneFiveImg} alt="Powerlink" />
                        </div>
                    </div>
                </div>












                </section>
                <section id="pwl-tracking-section-six">
                    
                 <div className="pwl-section-six-container">
                        <div className="pwl-section-six-left">
                            <img src="images/section-six-car-alert-image.png" alt="PowerLink"/>
                        </div>
                        <div className="pwl-seciotn-six-card">
                            <h4 className="">Plano</h4>
                            <h5 className="pwl-seciotn-six-card-line-bottom">RASTREAMENTO 24H</h5>
                            <h5 className="pwl-seciotn-six-card-line-bottom">APLICATIVO MÓVEL</h5>
                            <h5 className="pwl-seciotn-six-card-line-bottom">CENTRAL 0800 - FURTO E ROUBO</h5>
                            <h5 className="pwl-seciotn-six-card-line-bottom">Alerta de ignição</h5>
                            <div className="pwl-seciotn-six-card-last-item">
                                <h5 className="pwl-seciotn-six-card-line-bottom">Alerta de cerca virtual</h5>
                                <p>* CONSULTE CONDIÇÕES</p>
                            </div>
                            <div className="pwl-seciotn-six-card-button">Contratar</div>
                        </div>
                        <div className="pwl-section-six-right">
                            <img src="images/section-six-wokers.png" alt="PowerLink"/>
                        </div>
                </div>
                    
                </section>
            </main>
        </>
    )
}