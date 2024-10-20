export default function Button(props) {
    function click(){
        console.log("click", props.index)
        props.click(props.index)
    }
  return (
    <>
      <button onClick={()=>{click()}}>Buy</button>
    </>
  );
}
