import * as React from 'react';
import './Spinner.css';

class Spinner extends React.Component<{ isDisplayed: boolean }, unknown> {
  render() {
    return this.props.isDisplayed ? <div className="spinner">|</div> : <></>;
  }
}

export default Spinner;
