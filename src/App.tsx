import './App.css';
import * as React from 'react';
import Search from './components/Search/Search.tsx';
import type { AstronomicalObject } from './interfaces/AstronomicalObject.ts';
import AstronomicalObjectsTable from './components/AstronomicalObjectsTable/AstronomicalObjectsTable.tsx';

class App extends React.Component<null, AppState> {
  constructor(props) {
    super(props);
    this.state = { searchResult: [], searchError: null };
  }

  handleSearchResult = (result) => {
    this.setState({
      searchResult: result,
      searchError: null,
    });
    console.log(result);
  };

  handleSearchError = (message) => {
    this.setState({
      searchError: message,
      searchResult: [],
    });
  };

  render() {
    return (
      <div>
        <Search
          onResult={this.handleSearchResult}
          onError={this.handleSearchError}
        />
        {this.state.searchError || (
          <AstronomicalObjectsTable
            astronomicalObjects={this.state.searchResult}
          />
        )}
      </div>
    );
  }
}

interface AppState {
  searchResult: AstronomicalObject[];
  searchError: string | null;
}

export default App;
