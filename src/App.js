import Header from './components/Header';
import './App.css';
import Banner from './components/Banner';
import Category from './components/Category';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
      <Banner />
      <Category />
      </div>
      <Footer />
    </div>
  );
}

export default App;
