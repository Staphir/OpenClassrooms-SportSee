import './style.scss';
import logo from '../../assets/logo_sportsee.png'

function HorizontalNavBar() {

    const listNavLinks = ["Accueil", "Profil", "Réglage", "Communauté"];
    
    return (
        <div className='horizontal-nav-bar'>
            <img src={logo} alt='logo SportSee'></img>
            <nav>
                <ul>
                    {listNavLinks.map(navLink => {
                        return <li key={navLink}>{navLink}</li>
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default HorizontalNavBar;