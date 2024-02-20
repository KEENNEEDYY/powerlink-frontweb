import './styles.css';

type Props = {
    itemName: string;
    imgUrl: string;
    itemDescription: string;
    textButton: string;
}

export default function CatalogCard(
    {itemName, imgUrl, itemDescription, textButton} : Props
) {

    return (
        <div className="pwl-section-card">
            <img src={imgUrl} alt="TrackingService" />
            <h1>{itemName}</h1>
            <p>
                <i>
                    {itemDescription}
                </i>
            </p>
            <button className="pwl-button-primary pwl-card-button">
                {textButton}
            </button>
        </div>
    )
}
