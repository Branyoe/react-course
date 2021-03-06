import { useState } from "react";
import "./style.css";

export default function SearchBox({ onSearch, onClose, isSearching } /*aquí se reciben las props que provee el padre */) {
  //constates de estado
  const [searchText, setSearchText] = useState("");

  //ejecuta onClose y además limpia el input
  const handleCloseClick = () => {
    setSearchText("");
    onClose();
  }

  return (
    <div className="search-box">
      <h1 className="search-box-title">Buscador de personal</h1>
      <div className="search-box-buttons">
        <label>
          <input
            className="search-box-input"
            value={searchText}
            onChange={({ target: { value } }) => setSearchText(value)}
            onKeyDownCapture={({code}) => (code === "Enter" && onSearch(searchText))}
          />
        </label>
        <button
          disabled={!searchText.length}
          onClick={() => onSearch(searchText)}
        >Buscar</button>
        
        {isSearching && <button
          disabled={!searchText.length}
          onClick={handleCloseClick}
        >Cerrar</button>}
      </div>
    </div>
  );
}