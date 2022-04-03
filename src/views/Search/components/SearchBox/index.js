import { useState } from "react";
import "./style.css";

export default function SearchBox({onSearch, onClose} /*aquí se reciben las props que provee el padre */) {
  const [searchText, setSearchText] = useState("");
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
          />
        </label>
        <button
          onClick={onSearch}
        >Buscar</button>
        <button
          onClick={handleCloseClick}
        >Cerrar</button>
      </div>
    </div>
  );
}