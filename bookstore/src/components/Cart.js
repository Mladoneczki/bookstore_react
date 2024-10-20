import CartItem from "./CartItem"

export default function Cart(props) {
    return(
        props.list.map((book, i)=>{
            return <CartItem book={book} index={i} key={i}/>
        })
    )
    
};
