import * as React from 'react';
import type { AstronomicalObject } from '../../interfaces/AstronomicalObject.ts';

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  handleSearchClick = () => {
    this.props.onResult([]);
  };

  render() {
    return (
      <div>
        <label>
          Enter search term:
          <input
            value={this.state.searchTerm}
            onChange={(event) =>
              this.setState({ searchTerm: event.target.value })
            }
            type="text"
          />
        </label>
        <button onClick={this.handleSearchClick}>Search</button>
      </div>
    );
  }
}

interface SearchProps {
  onResult: (searchResult: AstronomicalObject[]) => void;
}

interface SearchState {
  searchTerm: string;
}

export default Search;
