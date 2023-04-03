import './App.css';
import Header from './components/Header';
import BannerSection from './components/BannerSection';
import About from './components/About';
import OurOfferings from './components/OurOfferings';
import OurTeam from './components/OurTeam';



function App() {
  return (
    <div className="App mb-5">
      <Header />
      <BannerSection />
      <About />
      <OurOfferings />
      <OurTeam />
    </div>
  );
}

export default App;
