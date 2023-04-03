import './App.css';
import Header from './components/Header';
import BannerSection from './components/BannerSection';
import About from './components/About';
import OurOfferings from './components/OurOfferings';
import OurTeam from './components/OurTeam';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <BannerSection />
      <About />
      <OurOfferings />
      <OurTeam />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
