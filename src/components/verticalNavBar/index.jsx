import './style.scss'
import yoga from '../../assets/yoga.png'
import swim from '../../assets/swim.png'
import bike from '../../assets/bike.png'
import muscle from '../../assets/muscle.png'


function VerticalNavBar() {

    const listNavLogos = [["yoga", yoga], ["nage",swim], ["vélo", bike], ["muscle", muscle]];

    return (
        <div className='vertical-nav-bar'>
            <nav>
                <ul>
                    {listNavLogos.map((logo) => {
                        return <li key={logo[0]}><img src={logo[1]} alt={logo[0]}></img></li>
                    })}
                </ul>
            </nav>
            <p className='copiryght-text'>Copiryght, SportSee 2020</p>
        </div>
    )
}

export default VerticalNavBar;