import * as React from 'react';

class ErrorBoundaryFallback extends React.Component<null, null> {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        Something went wrong. Reload the page!
      </div>
    );
  }
}

export default ErrorBoundaryFallback;
