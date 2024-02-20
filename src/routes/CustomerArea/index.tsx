import CatalogCard from '../../components/CatalogCard';
import imgUrl from '../../assets/car-tracking-card.png';
import './styles.css';

export default function CustomerArea() {
  return(
    <>
        <main>
            <section id="pwl-customer-area-section">       
                <div className="pwl-customer-area-container">
                    <div className="pwl-customer-section">
                        <CatalogCard
                            imgUrl={imgUrl}
                            itemName='Plataforma de rastreamento veívular'
                            itemDescription='
                            Aqui você poderá ter acesso a localização do seu veículo em tempo real e usar das 
                            diversas funções contratadas como: bloqueio/desbloqueio da ignição e muito mais.
                            '
                            textButton='Acessar'

                         />
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}
