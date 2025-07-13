import './App.css';
import * as React from 'react';
import Search from './components/Search/Search.tsx';
import type { AstronomicalObject } from './interfaces/AstronomicalObject.ts';
import AstronomicalObjectsTable from './components/AstronomicalObjectsTable/AstronomicalObjectsTable.tsx';

class App extends React.Component<null, AppState> {
  constructor(props) {
    super(props);
    this.state = { searchResult: [] };
  }

  handleSearchResult = (result) => {
    this.setState({ searchResult: result });
    console.log(result);
  };

  render() {
    return (
      <div>
        <Search onResult={this.handleSearchResult} />
        <AstronomicalObjectsTable
          astronomicalObjects={this.state.searchResult}
        />
      </div>
    );
  }
}

interface AppState {
  searchResult: AstronomicalObject[];
}

export default App;
