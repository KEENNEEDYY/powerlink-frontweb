import CatalogCard from '../../components/CatalogCard';
import './styles.css';

export default function CustomerArea() {
  return(
    <>
        <main>
            <section id="pwl-customer-area-section">       
                <div className="pwl-customer-area-container">
                    <div className="pwl-customer-section">
                        <CatalogCard />
                        <CatalogCard />
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}
