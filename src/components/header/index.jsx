import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons'

function Header({name}) {

    return(
        <header className='main-header'>
            <h1>Bonjour <i>{name}</i></h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier <FontAwesomeIcon className='hand-clapping-icon' icon={faHandsClapping}/> </h2>
        </header>
    )
}

export default Header;