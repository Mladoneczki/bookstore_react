import logo from './logo.svg';
import './App.css';

import Products from './components/Products.js';
import konyvLista from './components/konyvLista.js';

function App() {
  const bookList=konyvLista;
  return (
    <div className="App">
      <header className="App-header">
      <h2>Pages & Co.</h2>
      </header>
      <article>
        <div className='products'>
          <Products list={bookList}/>
        </div>

      </article>
    </div>
  );
}

export default App;
