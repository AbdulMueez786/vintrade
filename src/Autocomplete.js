import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import './Autocomplete.css';
class Autocomplete extends Component {

  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
    };
  }

  // Event fired when the input value is changed
  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  // Event fired when the user clicks on a suggestion
  onClick = e => {
    
    if(e.currentTarget.innerText==this.props.suggestions[0]){
        this.props.setoption(0);
    }
    else if(e.currentTarget.innerText==this.props.suggestions[1]){
        this.props.setoption(1);
    }
    else if(e.currentTarget.innerText==this.props.suggestions[2]){
        this.props.setoption(2);
    }
    else if(e.currentTarget.innerText==this.props.suggestions[3]){
        this.props.setoption(3);
    }
    else if(e.currentTarget.innerText==this.props.suggestions[4]){
        this.props.setoption(4);
    }
    else if(e.currentTarget.innerText==this.props.suggestions[5]){
        this.props.setoption(5);
    }
    else if(e.currentTarget.innerText==this.props.suggestions[6]){
        this.props.setoption(6);
    }
    else if(e.currentTarget.innerText==this.props.suggestions[7]){
        this.props.setoption(7);
    }
    else if(e.currentTarget.innerText==this.props.suggestions[8]){
        this.props.setoption(8);
    }
    else if(e.currentTarget.innerText==this.props.suggestions[9]){
        this.props.setoption(9);
    }
    else if(e.currentTarget.innerText==this.props.suggestions[10]){
        this.props.setoption(10);
    }
    else if(e.currentTarget.innerText==this.props.suggestions[11]){
        this.props.setoption(11);
    }
    else {
        this.props.setoption(89);
    }




  
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  // Event fired when the user presses a key down
  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
  
    //if(e.currentTarget.value==""){
         //this.props.setoption(0);
    //} 
  

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <div>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
      
        {suggestionsListComponent}
        </div>
      </Fragment>
    );
  }
}

export default Autocomplete;