import logo from './logo.svg';
import './App.css';

import Navbar from './components/layouts/Navbar.component';
import TopBanner from './components/top-banner/TopBanner.component';
import Upcomming from './components/shows/Upcomming.component';
import Reviews from './components/reiews/Reviews.component';

function App() {
  return (
    <div >
      <Navbar />
      <TopBanner />
      <Upcomming />
      <Reviews />
    </div>
  );
}

export default App;
