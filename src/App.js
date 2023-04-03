import './App.css';
import Header from './components/Header';
import BannerSection from './components/BannerSection';
import About from './components/About';
import OurOfferings from './components/OurOfferings';
import OurTeam from './components/OurTeam';
import Blog from './components/Blog';



function App() {
  return (
    <div className="App mb-5">
      <Header />
      <BannerSection />
      <About />
      <OurOfferings />
      <OurTeam />
      <Blog />
    </div>
  );
}

export default App;
