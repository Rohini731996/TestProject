import React, { Component } from 'react';
import { Provider } from 'react-redux'
import MusicApp from './Container/MusicApp';
import ExampleComponent from './HOCExaample/ExampleComponent'
import { store } from './Redux/Store/CreateStore'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MusicApp />
        
        
        {/* <ExampleComponent/> ---  uncomment this for HOC component example */}

      </Provider>
    );
  }
}
