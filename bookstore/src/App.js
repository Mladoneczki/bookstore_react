import logo from './logo.svg';
import './App.css';

import Products from './components/Products.js';
import konyvLista from './components/konyvLista.js';
import { useState } from 'react';

function App() {
  const bookList=konyvLista;
  const [buyList, setlist]=useState("")
  function click(adat){
    console.log("app",adat)}
  return (
    <div className="App">
      <header className="App-header">
      <h2>Pages & Co.</h2>
      </header>
      <article>
        <div className='products'>
          <Products list={bookList} click={click}/>
        </div>
        <div className='cart'>
          <Cart list={buyList}/>
        </div>

      </article>
    </div>
  );
}

export default App;
