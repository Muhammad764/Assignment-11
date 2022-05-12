import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../../Hooks/useItemDetail';
import './ItemsDetail.css'

const ItemsDetail = () => {
    const {itemId}= useParams()
    const [item] = useItemDetail(itemId)
    
    return (
        <div className='detail'>
            <div>
                <img className='w-50' src={item.img} alt="" />
            </div>
            <h1>Items Name: {item.name}</h1>
            <p>description: {item.description}</p>
            <p>price:{item.price}</p>
            <p>quantity:{item.quantity}</p>
            <p>supplier:{item.supplier}</p>
            <p>sold:{item.sold}</p>
            <Link to={`/checkout/${itemId}`}>
                <button className='btn btn-danger'>Delivery</button>
            </Link>
        </div>
    );
};

export default ItemsDetail;