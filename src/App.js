import './App.css';
import MusicVideo from './Components/MusicVideo';
import Header from './Components/Header';
import Title from './Components/Title';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <MusicVideo embedId="xq9CosdrjVc?rel=0" />
      <About />
      <Footer />
    </div>
  );
}

export default App;
