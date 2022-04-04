import SearchResultsItem from "./SearchResultsItem";
import "./style.css";

export default function SearchResults({ results, isSearching }) {

  return (
    <div className="search-results">
      {!results?.length && isSearching && <p>¡No existen resultados!</p>}
      {results?.map(item => {
        return (
          <div key={item.id} className="search-result-item">
            <SearchResultsItem
              {...item}
            />
          </div>
        );
      })}
    </div>
  );
}