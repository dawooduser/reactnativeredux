import React from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import ActionBar from 'react-native-action-bar';
class _ActionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionBarAddBtn: [
        {
          name: 'plus',
          onPress: () => this.props.plusBtn(true),
        },
      ],
      showBtn: this.props.showAddBtn || false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ActionBar
          containerStyle={styles.bar}
          titleStyle={{fontSize: 20}}
          disableStatusBarHandling={false}
          title={this.props.title || 'APP'}
          // rightText={'Hello'}
          leftIconName={'menu'}
          leftIconImageStyle={{height: '35%'}}
          leftIconContainerStyle={{borderWidth: 1, marginBottom: '30%'}}
          // leftBadge={''}
          onLeftPress={() => {
            // console.log('Left!');
            this.props.openDrawer();
          }}
          // onTitlePress={() => console.log('Title!')}
          rightIconContainerStyle={{
            borderWidth: 1,
            marginBottom: '30%',
            marginRight: '10%',
          }}
          rightIcons={
            this.props.showAddBtn === true ? this.state.actionBarAddBtn : []
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bar: {
    height: '10%',
    backgroundColor: '#289eff',
  },
});
export default _ActionBar;
