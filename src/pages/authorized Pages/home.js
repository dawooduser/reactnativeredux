import React from 'react';

import {Text, View, StyleSheet, Dimensions} from 'react-native';
import ActionBar from '../header';
class Home extends React.Component {
  render() {
    return (
      <View style={style.screen}>
        <ActionBar title="Home" openDrawer={this.abc.bind(this)} />
        <View style={style.body} />
      </View>
    );
  }
}
export default Home;
const style = StyleSheet.create({
  screen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  body: {
    width: Dimensions.get('window').width,
    height: '90%',
    position: 'absolute',
    top: '10%',
    // padding: '1%'
  },
});
