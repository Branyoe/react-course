
import { useState } from 'react';
import SearchBox from './components/SearchBox/';
import "./style.css";

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false);

  const handleSearchClick = () => setIsAtTop(true);

  const handleCloseClick = () => setIsAtTop(false);

  return (
    <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
      <SearchBox
        //props enviadas al hijo
        onSearch={handleSearchClick}
        onClose={handleCloseClick}
      />
    </div>
  );
}