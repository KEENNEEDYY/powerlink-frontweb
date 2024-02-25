import './styles.css';

type Props = {
    itemName: string;
    imgUrl: string;
    itemDescription: string;
    textButton: string;
    urlButton: string;
}

export default function CatalogCard(
    { itemName, imgUrl, itemDescription, textButton, urlButton }: Props
) {

    return (
        <div className="pwl-section-card">
            <img src={imgUrl} alt="TrackingService" />
            <h1>{itemName}</h1>
            <div className="pwl-section-card-item-description">
                <p>
                    <i>
                        {itemDescription}
                    </i>
                </p>
            </div>

            <button className="pwl-button-primary pwl-card-button">
                <a href={urlButton} target='_blank'>
                    {textButton}
                </a>
            </button>

        </div>
    )
}
