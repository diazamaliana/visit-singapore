import './styles.scss';
import { menu } from 'data/menu';
import { markers } from 'data/markers';
import browseIcon from 'assets/icons/browse-icon.svg';

const Sidebar = () => {
    return (
    <div className="container" >
        <div className="container__nav">
            <a href="/" className="container__nav-icon--active">
                <img src={browseIcon} alt="Browse" />
                <p>Browse</p>
            </a>
            {menu.map(({ id, title, src }) => (
                <a  key={id} href="/" className="container__nav-icon">
                    <img src={src} alt={title} />
                    <p>{title}</p>
                </a>
            ))}
        </div>
        <div className="container__menu">
            <div className="container__menu-filter">
                <select name="filters">
                    <option>Filter by  favorite</option>
                </select>
            </div>
            <div className="container__menu-list">
                {markers.map(({ id, name }) => (
                    <a  key={id} href="/" className="container__menu-list-item">
                        <hr />
                        <p>{name}</p>
                    </a>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Sidebar;
