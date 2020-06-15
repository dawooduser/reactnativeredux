import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ActionBar from './header';
import {ADD, REMOVE, EDIT} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BottomSheet from './modals/bottomSheet';
function mapStatToProps(state) {
  // debugger
  // console.log('addclient.js', state);
  return {
    data: state.addClient.arr,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ADD, REMOVE, EDIT}, dispatch);
}
// function AddClient({navigation, data, ADD}) {
//   // var [clientList, setclientList] = useState(data);
// let inputRef = React.createRef();

// const GetSectionListItem = (item) => {
//   // Alert.alert(item);
//   debugger;
//   const _data = data.find(x => x.id === item)
//   inputRef.current.editData(_data);
//   console.log(_data);
//   inputRef.current.openCloseModalSheet(true);
// };
// function abc() {
//   navigation.openDrawer();
// }
// function toggleSheet(bool) {
//   if (bool === true) {
//     return inputRef.current.openCloseModalSheet(true);
//   }
//   inputRef.current.openCloseModalSheet(false);
// }
// function _submittedData(obj) {
//   debugger
//   console.warn('submitted DAta', obj);
//   data.push(obj)
//   ADD(data);
// }
// function editRedux(_data) {
//   debugger;
//   console.log('from addClient EditRedux funtion', _data)
//   data.forEach((val, key) => {
//     if (val.id === _data.id) {
//       data[key].name = _data.name;
//       data[key].mobileNumber = _data.mobileNumber;
//       data[key].homeAddress = _data.homeAddress;
//       // setclientList(clientList)
//     }
//   });
// }
// return (
//   <View style={style.screen}>
//     <ActionBar
//       plusBtn={toggleSheet.bind(this)}
//       showAddBtn
//       title="AddClient"
//       openDrawer={abc.bind(this)}
//     />
//     <View style={style.body}>
//       {data.map((val, key) => (
//     <View key>
//     <Text style={style.SectionHeader}>{val.homeAddress}</Text>
//     <Text
//       style={style.SectionListItemS}
//       onPress={GetSectionListItem.bind(this, val.id)}>
//       {val.name}{' '}
//     </Text>
//   </View>
//   ))}
//     </View>
//     <BottomSheet
//       ref={inputRef}
//       submittedData={_submittedData.bind(this)}
//       editRedux={editRedux.bind(this)}
//     />
//   </View>

// );
// }
let inputRef;
class AddClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.data || [],
    };
  }

  GetSectionListItem(item) {
    // Alert.alert(item);
    debugger;
    const _data = this.state.list.find((x) => x.id === item);
    inputRef.current.editData(_data);
    console.log(_data);
    inputRef.current.openCloseModalSheet(true);
  }
  abc() {
    this.props.navigation.openDrawer();
  }
  toggleSheet(bool) {
    if (bool === true) {
      return inputRef.current.openCloseModalSheet(true);
    }
    inputRef.current.openCloseModalSheet(false);
  }
  _submittedData(obj) {
    debugger;
    console.warn('submitted DAta', obj);
    var {list} = this.state;
    list.push(obj);
    this.setState({
      list,
    });
    this.props.ADD(list);
  }
  editRedux(_data) {
    debugger;
    console.log('from addClient EditRedux funtion', _data);
    var {list} = this.state;
    list.forEach((val, key) => {
      if (val.id === _data.id) {
        list[key].name = _data.name;
        list[key].mobileNumber = _data.mobileNumber;
        list[key].homeAddress = _data.homeAddress;
        this.setState({
          list,
        });
        this.props.ADD(list);
      }
    });
  }
  removeItem(id) {
    debugger;
    var {list} = this.state;
    const data = list.filter((x) => x.id !== id);
    this.setState({
      list: data,
    });
    this.props.ADD(data);
  }
  showAlert1(name, id) {
    Alert.alert('remove', `are you sure to remove this entry ${name}`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => this.removeItem(id)},
    ]);
  }
  render() {
    inputRef = React.createRef();
    return (
      <View style={style.screen}>
        <ActionBar
          plusBtn={this.toggleSheet.bind(this)}
          showAddBtn
          title="AddClient"
          openDrawer={this.abc.bind(this)}
        />
        <View style={style.body}>
          {this.state.list.map((val, key) => (
            <TouchableOpacity
              key
              onLongPress={this.showAlert1.bind(this, val.name, val.id)}
              onPress={this.GetSectionListItem.bind(this, val.id)}>
              <Text style={style.SectionHeader}>{val.homeAddress}</Text>
              <Text
                style={style.SectionListItemS}
                onPress={this.GetSectionListItem.bind(this, val.id)}>
                {val.name}{' '}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <BottomSheet
          ref={inputRef}
          submittedData={this._submittedData.bind(this)}
          editRedux={this.editRedux.bind(this)}
        />
      </View>
    );
  }
}
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
  SectionHeader: {
    backgroundColor: '#91cdff',
    fontSize: 20,
    padding: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
  SectionListItemS: {
    fontSize: 16,
    padding: 6,
    color: '#000',
    backgroundColor: '#F5F5F5',
  },
});

export default connect(mapStatToProps, mapDispatchToProps)(AddClient);
