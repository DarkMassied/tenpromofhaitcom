import './App.css';
import TinderCards from './Card';
import Header from './Header';
import Swipebutton from './Swipebutton';



function App() {
  return (
    <div className="App">
      <h1>Test text</h1>

      {/*Header*/}
      <Header />
      {/*Card*/}
      <TinderCards />
      {/*SwipedButton*/}
      <Swipebutton />
      

    </div>
  );
}

export default App;
