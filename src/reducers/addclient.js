const initialUserState = {
  arr: [],
};
export default function addClient(state = initialUserState, action) {
  // debugger;
  console.log('addClient reducer', state, action);
  switch (action.type) {
    case 'ADD':
      debugger
      return {
        ...state,
        arr: action.data,
      };
    // case 'REMOVE':
    //   const _fileter = state.filter((x) => x.id !== action.data);
    //   state = Object.assign([], _fileter);
    //   return state;
    // case 'EDIT':
    //   console.log('inside EDIT reducer', state, action);
    //   console.warn('inside EDIT reducer', state, action);
      // state.arr.forEach((val, key) => {
      //   if (val.id === action.data.id) {
      //     state.arr[key].name = action.data.name;
      //     state.arr[key].mobileNumber = action.data.mobileNumber;
      //     state.arr[key].homeAddress = action.data.homeAddress;
      //   }
      // });
    //   return {
    //     ...state,
    //   };
  }

  return state;
}
