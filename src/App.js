import Boost from './components/Boost/Boost.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js'
import MobileHeader from './components/Header/MobileHeader.js';
import Hero from './components/Hero/Hero';
import Link from './components/Link/Link.js';
import Stats from './components/Stats/Stats.js';

function App() {
  return (
    <>
    {window.innerWidth > 980 ? <Header /> : <MobileHeader />}
      <Hero />
      <Link />
      <Stats />
      <Boost />
      <Footer />
    </>
  );
}

export default App;
