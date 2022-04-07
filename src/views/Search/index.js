
import { useState } from 'react';
import SearchBox from './components/SearchBox/';
import data from '../../data/users.json';
import SearchResults from './components/SearchResults';

import "./style.css";

export default function Search() {
  //constantes de estado
  const [isAtTop, setIsAtTop] = useState(false);//para validar la posicion del buscador en el dom
  const [userData] = useState(data);//para guardar los datos json, por el momento no es optimo usarlo en un estado porque no es un dato cambiante pero cuando venga de un API si
  const [results, setResults] = useState([]);

  const handleSearchClick = (searchText/*viene del hijo*/) => { //se ejecuta cuando el se da click en el botón buscar
    setIsAtTop(true);
    searchText = searchText.toLowerCase(); //para poder buscar discriminando mayusculas o minusculas
    if(userData.length) {
      const filterData = userData.filter((v) => (//si el item actual contine el searchTExt en alguna de sus props entonces lo devuelve 
      v.name.toLowerCase().includes(searchText) || 
      v.phone.toLowerCase().includes(searchText) ||
      v.email.toLowerCase().includes(searchText) ||
      v.username.toLowerCase().includes(searchText)
        )
      );
      setResults(filterData);
    }
  }
  
  //baja el buscador y limpia results
  const handleCloseClick = () => {
    setIsAtTop(false);
    setResults([]);
  }

  return (
    <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
      <SearchBox
        //props enviadas al hijo
        onSearch={handleSearchClick}
        onClose={handleCloseClick}  
        isSearching={isAtTop}
      />
      <SearchResults
        results={results}
        isSearching={isAtTop}
      />
    </div>
  );
}