import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Store } from 'views/Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Store />
        </div>
      </Provider>
    );
  }
}

export default App;
