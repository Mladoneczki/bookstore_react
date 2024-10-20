import './cartItem.css'
export default function CartItem(props) {
return(
    <div className="cart">
        <img src={props.book.image} alt={props.book.title} />
        <h3>{props.book.title}</h3>
        <p>{props.book.price}</p>
        <button>X</button>
    </div>
)};
