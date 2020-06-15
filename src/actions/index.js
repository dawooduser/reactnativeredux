export function increment() {
  return {
    type: '_Increment',
  };
}
export function decrement() {
  return {
    type: '_Decrement',
  };
}

export function ADD(data) {
  return {
    type: 'ADD',
    data,
  };
}
export function REMOVE(data) {
  return {
    type: 'REMOVE',
    data,
  };
}
export function EDIT(data) {
  // debugger
  return {
    type: 'EDIT',
    data,
  };
}

