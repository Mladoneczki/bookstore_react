import './product.css'
export default function Product(props) {
  return (
    <div className="product">
      <img src={props.book.image} alt={props.book.title} />
      <h3>{props.book.title}</h3>
      <p>{props.book.blurb}</p>
      <p>{props.book.price}</p>
      <button>Buy</button>
    </div>
  );
}
