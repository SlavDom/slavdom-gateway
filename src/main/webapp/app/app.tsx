import React from 'react';

export interface IAppProps {}

export default class App extends React.Component<IAppProps> {
  render(): React.ReactNode {
    return (
      <div>
        Loaded from app..
      </div>
    );
  }
}
