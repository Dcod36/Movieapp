import React from  'react'
import './App.css'
import {action,originals,horror,RomanceMovies,Documentaries} from './urls'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>     
      <RowPost url={originals} title='Netflix Orginals'/> 
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>  
      <RowPost url={RomanceMovies} title='RomanceMovies' isSmall/>
      <RowPost url={Documentaries} title='Documentaries' isSmall/>  
      
          </div>
  );
}

export default App;