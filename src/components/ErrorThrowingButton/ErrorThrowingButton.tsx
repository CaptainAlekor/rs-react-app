import * as React from 'react';

class ErrorThrowingButton extends React.Component<
  unknown,
  { throwError: boolean }
> {
  constructor(props: unknown) {
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
        style={{ padding: '10px' }}
        onClick={() => this.setState({ throwError: true })}
      >
        Throw error
      </button>
    );
  }
}

export default ErrorThrowingButton;
