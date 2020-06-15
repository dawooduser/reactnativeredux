import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {uniqueIdGenerator} from '../../helper';
const {height} = Dimensions.get('window');
const halfscreen = height * 0.5;
export default class BottomSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeAddress: '',
      name: '',
      mobileNumber: '',
      id: '',
      edit: false,
    };
  }
  editData(data) {
    // debugger;
    this.setState({
      homeAddress: data.homeAddress,
      name: data.name,
      id: data.id,
      mobileNumber: data.mobileNumber,
      edit: true,
    });
  }
  openCloseModalSheet(bool) {
    if (bool === true) {
      return this.Standard.open();
    }
    this.Standard.close();
  }
  closeWithEmptyField() {
    this.Standard.close();
    this.setState({
      homeAddress: '',
      name: '',
      mobileNumber: '',
      edit: false,
      id: '',
    });
  }
  submit() {
    // debugger;
    let id;
    const {homeAddress, name, mobileNumber, edit} = this.state;
    if (homeAddress === '' || name === '' || mobileNumber === '') {
      return Alert.alert('error', 'Please Fillup Required Fields');
    }
    if (!edit) {
      id = uniqueIdGenerator(10);
      this.props.submittedData({homeAddress, name, mobileNumber, id});
      return this.closeWithEmptyField();
    }
    id = this.state.id;
    this.props.editRedux({homeAddress, name, mobileNumber, id});
    return this.closeWithEmptyField();
  }
  render() {
    return (
      <View style={styles.container}>
        <RBSheet
          ref={(ref) => {
            this.Standard = ref;
          }}
          animationType={'fade'}
          closeOnPressMask={false}
          // closeOnPressBack={false}
          height={halfscreen}>
          <View style={styles.listContainer}>
            <Text style={styles.listTitle}>ADD</Text>
            <View
              style={[styles.listButton]}
              // onPress={() => this.Standard.close()}
            >
              <Image
                source={require('../../assets/house.png')}
                style={{marginRight: '5%', height: '35%'}}
              />
              <TextInput
                onChangeText={(text) => this.setState({homeAddress: text})}
                placeholder={'House Address'}
                defaultValue={this.state.homeAddress || ''}
              />
            </View>
            <View style={styles.listButton}>
              <Image
                source={require('../../assets/male.png')}
                style={{marginRight: '5%', height: '40%'}}
              />
              <TextInput
                onChangeText={(text) => this.setState({name: text})}
                placeholder={'Name'}
                keyboardType={'name-phone-pad'}
                defaultValue={this.state.name || ''}
              />
            </View>
            <View style={styles.listButton}>
              <Image
                source={require('../../assets/ringing.png')}
                style={{marginRight: '5%', width: '11%', height: '65%'}}
              />
              <TextInput
                onChangeText={(text) => this.setState({mobileNumber: text})}
                placeholder={'Mobile Number'}
                keyboardType={'number-pad'}
                defaultValue={this.state.mobileNumber || ''}
              />
            </View>
            <View style={{width: '100%', flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  width: '50%',
                  borderRadius: 2,
                  alignItems: 'center',
                }}
                onPress={this.closeWithEmptyField.bind(this)}>
                <Text>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '50%',
                  borderRadius: 2,
                  alignItems: 'center',
                }}
                onPress={this.submit.bind(this)}>
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 25,
  },
  listTitle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  listIcon: {
    fontSize: 26,
    width: 60,
  },
  listLabel: {
    fontSize: 16,
  },
  listButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10%',
    borderBottomWidth: 1,
  },
});
