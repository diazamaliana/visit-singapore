import './styles.scss';
import pinIcon from 'assets/icons/pin.png';
import browseIcon from 'assets/icons/browse-icon.svg';

const Card = ({src, alt, name, desc, href, address}) => {
    return (
        <div className="card">
            <div className="card__container">
                <div className="card__container-image">
                    <img src={src} alt={alt} loading={'lazy'} />
                </div>
                <p className="card__container-name">{name}</p>
                <p className="card__container-desc">{desc}</p>
                <a className="card__container-pin" href={address}>
                    <img src={pinIcon} alt="location" />
                    <span>{address}</span>
                </a>
                <a className="card__container-link" href={href}>
                    <img src={browseIcon} alt="link" />
                    <span>{href}</span>
                </a>
            </div>
        </div>
    )
}

export default Card;
