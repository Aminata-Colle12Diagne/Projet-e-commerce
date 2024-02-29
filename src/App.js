import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import TousProduits from './Components/mesproduits/TousProduits';
import Deodorant from './Components/deodorant/Deodorant';
import Cheveux from './Components/cheveux/Cheveux'
import Dentifrice from './Components/dentifrice/Dentifrice';
import Visages from './Components/visage/Visages';
import Corps from './Components/corps/Corps';
import Parrainage from './Components/parrainages/Parrainage';
import { BrowserRouter as Router, Route,Routes, Switch, BrowserRouter } from 'react-router-dom';
import Connexion from './Components/authentification/Connexion';
import Login from './Components/authentification/Login';
import SingUp from './Components/authentification/SingUp';
import Help from './Components/help/Help';
import Search from './Components/search/Search';
import Abonne from './Components/abonne/Abonne';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      {/* <Connexion/> */}
      <Routes>
        {/* <Route path="/" element={<Produits />} /> */}
        <Route path="/" exact element={<TousProduits />} />
        <Route path="/DEODORANTS" element={<Deodorant />} />
        <Route path="/CHEVEUX" element={<Cheveux />} />
        <Route path="/DENTIFRICES" element={<Dentifrice />} />
        <Route path="/VISAGE" element={<Visages />} />
        <Route path="/CORPS" element={<Corps />} />
        <Route path="/PARRAINAGE" element={<Parrainage />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hepl" element={<Help />} />
        <Route path="/search" element={<Search />} />
        <Route path="/abonne" element={<Abonne/>} />
    

      </Routes>
    </div>
  </Router>
  );
}

export default App;
