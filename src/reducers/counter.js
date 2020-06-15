// export default function counter(state = 0, action) {
//   console.log('i am here reducer', state, action);
//   switch (action.type) {
//     case '_Increment':
//       return state++;
//     case '_Decrement':
//       return state--;
//     default:
//       return state;
//   }
// }
let defaultState = {
  count: 0,
};
export default function counter(state = 0, action) {
  console.log('i am here reducer', state, action);
  switch (action.type) {
    case '_Increment':
        state++;
      break;
    case '_Decrement':
        state--;
      break;
  }
  return state;
}
