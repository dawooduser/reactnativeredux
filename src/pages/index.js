import React from 'react';
import {View, Text, Button, ScrollView, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions';
import {bindActionCreators} from 'redux';

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({increment, decrement}, dispatch);
}

class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  onPressLearnMore = (a) => {
    debugger;
    this.props.increment();
  };
  render() {
    return (
      <View>
        <Text>Counter {this.props.counter}</Text>
        <Button
          onPress={this.onPressLearnMore.bind(this, '1')}
          title="INCREMENT"
        />
        <Button
          onPress={this.onPressLearnMore.bind(this, '2')}
          title="DECREMENT"
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Page);
