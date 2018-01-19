import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      error: null,
      MyComponent: null
    };
  }

  componentDidMount() {
    import('./async_component')
      .then(module => {
        this.setState({ MyComponent: module.default, loading: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ error: 'Could not load content.', loading: false });
      });
  }

  render() {
    if (this.state.error) return this.state.error;

    if (this.state.loading) return 'Loading...';

    const { MyComponent } = this.state;

    return <MyComponent />;
  }
}
