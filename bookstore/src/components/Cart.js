import CartItem from "./CartItem";

export default function Cart(props) {
    if ( props.list.length === 0) {
        return <p>A kosár üres.</p>; 
      }
  return (
    <>
      {props.list.map((book, i) => {
        return <CartItem book={book} index={i} key={i} />
      })}
    </>
  );
}
