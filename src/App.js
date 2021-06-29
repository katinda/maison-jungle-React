import logo1 from './assets/leaf+1.png';
import './App.css';
import Banner from './Components/Banner';
import Cart from './Components/Cart';
import ShoppingList from './Components/ShoppingList';
function App() {
  return (
    <div className="App">
        <Banner>
          <img src={logo1} alt='La maison jungle' />
          <h1 className='lmj-title'>La maison jungle</h1>
        </Banner>
        <Cart/>
        <ShoppingList/>
    </div>
  );
}

export default App;
