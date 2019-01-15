import React from 'react';
import { Provider } from 'react-redux'
import { View } from 'react-native'
import store from './app/store'
import { setLocalNotification } from './app/utils/helpers'

import Screens from './app/config/screens'

import t from './app/config/themeVariables'

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <View style={{backgroundColor: t.primary, flex: 1}}>
        <Provider store={store}>
          <Screens />
        </Provider>
      </View>
    );
  }
}
