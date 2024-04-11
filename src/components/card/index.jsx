import './style.scss';

function Card({name, data, imgName, backgroundColor}) {
    const pathAssets = './assets/';
    const formatedData = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(parseInt(data, 10));
    return (
        <section className="card">
            <div className='card-icon' style={{backgroundColor: backgroundColor}}>
                <img src={pathAssets+imgName} alt={name+' icon'}></img>
            </div>
            <div className='card-content'>
                <p className='card-data'>{formatedData}{data < 1000 ? 'g' : 'kCal'}</p>
                <p className='card-name'>{name}</p>
            </div>
        </section>
    )
}

export default Card;