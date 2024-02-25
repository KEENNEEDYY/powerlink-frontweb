import CatalogCard from '../../components/CatalogCard';
import carTrackingImg from '../../assets/car-tracking-card.png';
import customerAreaImg from '../../assets/customer-area-card-Img.png';
import './styles.css';

export default function CustomerArea() {
    return (
        <>
            <main>
                <section id="pwl-customer-area-section">
                    <div className="pwl-customer-area-container">
                        <div className="pwl-customer-section">
                            <CatalogCard
                                imgUrl={carTrackingImg}
                                itemName='Plataforma de rastreamento veícular'
                                itemDescription='
                            Aqui você poderá ter acesso a localização do seu veículo em tempo real e usar das 
                            diversas funções contratadas como: bloqueio/desbloqueio da ignição e muito mais.
                            '
                                textButton='Acessar'
                                urlButton='https://monitoramento.powerlinkco.com.br/'
                            />
                            <CatalogCard
                                imgUrl={customerAreaImg}
                                itemName='Financeiro: Rastreamento veícular'
                                itemDescription='Acesse a plataforma de pagamentos e de forma fácil e rápida é possível quitar sua fatura.'
                                textButton='Acessar'
                                urlButton='https://www.azulpay.online/faturas/d68ef19f-bc7b-47bb-8fcc-d3f80ed98cc7/'
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
