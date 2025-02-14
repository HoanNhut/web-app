import Header from './components/Header';
import './App.css';
import Banner from './components/Banner';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
      <Banner />
      <Category />
      </div>
    </div>
  );
}

export default App;
