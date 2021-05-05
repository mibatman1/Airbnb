import './Card.css';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
const Card=({src, title, description, price})=>
{
    const history=useHistory();

    return(
        <div className="card">
            {/* <Link to="/search"> */}
                <img onClick={()=>history.push('/search')} src={src} alt=" "/>
            {/* </Link> */}

                <div className="card__info">
                    <h2>{title}</h2>
                    <h4>{description}</h4>
                    <h3>{price}</h3>
                </div>

        </div>
    );
}

export default Card;