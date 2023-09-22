import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import Work from './components/Work';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Work />
      <Services />
      <Contact></Contact>
      <Footer></Footer>


    </div>
  );
}

export default App;
