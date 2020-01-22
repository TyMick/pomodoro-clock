// Observation function (source: https://github.com/reduxjs/redux/issues/303#issuecomment-125184409)
export default (store, select, onChange) => {
  let currentState;
  
  function handleChange() {
    let nextState = select(store.getState());
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState, store);
    }
  }
  
  let unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}
