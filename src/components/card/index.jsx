import './style.scss';
// import burger from '../../assets/burger.png';

function Card({name, data, imgName, backgroundColor}) {
    const pathAssets = './assets/';
    // const [apple, setApple] = useState();
    // useEffect(() => {
    //     setApple(require(imgName));
    // }, []);

    return (
        <section className="card">
            <div className='card-icon' style={{backgroundColor: backgroundColor}}>
                <img src={pathAssets+imgName} alt={name+' icon'}></img>
            </div>
            <div className='card-content'>
                <p className='card-data'>{data}</p>
                <p className='card-name'>{name}</p>
            </div>
        </section>
    )
}

export default Card;