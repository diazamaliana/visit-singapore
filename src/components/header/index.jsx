import './styles.scss';
import settingIcon from 'assets/icons/setting-icon.svg';
import helpIcon from 'assets/icons/help-icon.svg';
import closeIcon from 'assets/icons/close-icon.svg';

const Header = () => {
    return (
        <header className="header">
            <h1>TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE</h1>
                <div className="header__cta">
                    <img src={settingIcon} alt="setting"/>
                    <img src={helpIcon} alt="help" />                    
                    <img src={closeIcon} alt="close" />
                </div>
        </header>
    )
}

export default Header;
