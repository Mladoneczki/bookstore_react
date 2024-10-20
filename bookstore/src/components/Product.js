
import './product.css'
export default function Product(props) {
  function click(){
    console.log("product", props.index)
    props.click(props.index)
}

  return (
    <div className="product">
      <img src={props.book.image} alt={props.book.title} />
      <h3>{props.book.title}</h3>
      <p>{props.book.blurb}</p>
      <p>{props.book.price}</p>
      <button onClick={()=>{click()}}>Buy</button>
    </div>
  );
}
