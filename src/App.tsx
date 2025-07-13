import './App.css';
import * as React from 'react';
import Search from './components/Search/Search.tsx';
import type { AstronomicalObject } from './interfaces/AstronomicalObject.ts';
import AstronomicalObjectsTable from './components/AstronomicalObjectsTable/AstronomicalObjectsTable.tsx';
import Spinner from './components/Spinner/Spinner.tsx';

class App extends React.Component<null, AppState> {
  constructor(props) {
    super(props);
    this.state = { searchResult: [], searchError: null, isLoading: false };
  }

  handleSearchResult = (result) => {
    this.setState({
      searchResult: result,
      searchError: null,
      isLoading: false,
    });
  };

  handleSearchError = (message) => {
    this.setState({
      searchError: message,
      searchResult: [],
      isLoading: false,
    });
  };

  render() {
    return (
      <div id="app">
        <Search
          onResult={this.handleSearchResult}
          onError={this.handleSearchError}
          onSearchClick={() =>
            this.setState({ ...this.state, isLoading: true })
          }
        />
        {this.state.isLoading || this.state.searchError || (
          <AstronomicalObjectsTable
            astronomicalObjects={this.state.searchResult}
          />
        )}
        <Spinner isDisplayed={this.state.isLoading} />
      </div>
    );
  }
}

interface AppState {
  searchResult: AstronomicalObject[];
  searchError: string | null;
  isLoading: boolean;
}

export default App;
