import * as React from 'react';
import type { AstronomicalObject } from '../../interfaces/AstronomicalObject.ts';
import axios, { AxiosError } from 'axios';
import type { AxiosResponse } from 'axios';
import './Search.css';

class Search extends React.Component<SearchProps, SearchState> {
  private SEARCH_TERM_LS_KEY = 'searchTerm';

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem(this.SEARCH_TERM_LS_KEY) ?? '',
    };
  }

  handleSearchClick = () => {
    this.props.onSearchClick();
    if (this.state.searchTerm.trim().length !== 0) {
      localStorage.setItem(
        this.SEARCH_TERM_LS_KEY,
        this.state.searchTerm.trim()
      );
    }
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
      )
      .catch((error: AxiosError) => {
        const statusCode = error.response?.status.toString();
        if (statusCode?.startsWith('4')) {
          this.props.onError('Bad request. Try again.');
        } else if (statusCode?.startsWith('5')) {
          this.props.onError('The server failed to fulfill a request.');
        } else {
          this.props.onError('Unexpected error.');
        }
      });
  };

  componentDidMount() {
    this.handleSearchClick();
  }

  render() {
    return (
      <div id="searchSection">
        <label>
          <input
            placeholder="Astronomical object name"
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
  onError: (message: string) => void;
  onSearchClick: () => void;
}

interface SearchState {
  searchTerm: string;
}

export default Search;
