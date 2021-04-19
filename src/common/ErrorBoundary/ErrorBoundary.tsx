import React, {ErrorInfo, ReactNode} from 'react';

interface IPropTypes {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<IPropTypes, IState> {
  constructor(props: IPropTypes) {
    super(props);

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Sorry, something went wrong</h1>
        </div>
      );
    }

    return this.props.children;
  }
}