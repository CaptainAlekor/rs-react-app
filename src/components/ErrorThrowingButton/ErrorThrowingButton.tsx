import * as React from 'react';

class ErrorThrowingButton extends React.Component<
  null,
  { throwError: boolean }
> {
  constructor(props) {
    super(props);

    this.state = {
      throwError: false,
    };
  }

  componentDidUpdate() {
    if (this.state.throwError) {
      throw new Error('ErrorThrowingButton has been clicked!');
    }
  }

  render() {
    return (
      <button
        id="errorThrowingButton"
        onClick={() => this.setState({ throwError: true })}
      >
        Throw error
      </button>
    );
  }
}

export default ErrorThrowingButton;
