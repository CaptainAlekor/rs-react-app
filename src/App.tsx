import './App.css';
import * as React from 'react';
import Search from './components/Search/Search.tsx';
import type { AstronomicalObject } from './interfaces/AstronomicalObject.ts';

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
        <div></div>
      </div>
    );
  }
}

interface AppState {
  searchResult: AstronomicalObject[];
}

export default App;
