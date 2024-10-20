import Button from './Button';
import './product.css'
export default function Product(props) {
  function click(adat){
    console.log("product",adat)
    props.click(adat)
}
  return (
    <div className="product">
      <img src={props.book.image} alt={props.book.title} />
      <h3>{props.book.title}</h3>
      <p>{props.book.blurb}</p>
      <p>{props.book.price}</p>
      <Button key={props.index} click={click}/>
    </div>
  );
}
