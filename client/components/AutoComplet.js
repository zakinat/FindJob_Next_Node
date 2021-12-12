import { useState } from "react";





const AutoComplete = ({ suggestions ,setWatchNameComp,watchNameComp}) => {


  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  

//watch over the user input
  const onChange = (e) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setWatchNameComp(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);

    setWatchNameComp(e.target.value)
  };
//choosing one of the suggestion
  const onClick = (e) => {
    setFilteredSuggestions([]);
    setWatchNameComp(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);

    setWatchNameComp(e.target.innerText)
    
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="no-suggestions">
        <em>No suggestions, you're on your own!</em>
      </div>
    );
  };


  return (
    <>
      <input
        type="text"
        onChange={onChange}
        value={watchNameComp}
      />
      {showSuggestions && watchNameComp && <SuggestionsListComponent />}
    </>
  );
};
export default AutoComplete;