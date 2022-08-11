import './App.css';
import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <div id="nav-bar">
        <NavBar />
      </div>
      <div id="countries">
      <CountriesList />

      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/:countryCode" element={<CountryDetails />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
