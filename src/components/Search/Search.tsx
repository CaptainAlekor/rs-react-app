import * as React from 'react';
import type { AstronomicalObject } from '../../interfaces/AstronomicalObject.ts';
import axios from 'axios';
import type { AxiosResponse } from 'axios';

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  handleSearchClick = () => {
    axios
      .post(
        'https://stapi.co/api/v2/rest/astronomicalObject/search',
        {
          name: this.state.searchTerm.trim(),
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then(
        (
          response: AxiosResponse<{ astronomicalObjects: AstronomicalObject[] }>
        ) => {
          this.props.onResult(response.data.astronomicalObjects);
        }
      );
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
