// This function stores our state.

export const storeCharacterState = () => {
  //store the currentState of an object
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
    //The function that we pass in will specify the exact change that should be made to currentState
    const newState = stateChangeFunction(currentState); //Instead of mutating currentState, we will save the new state in a constant called newState
    currentState = { ...newState }; //We will make a copy of newState and assign it to currentState
    return newState; //because it takes time to update and return currentState (an async operation), we can provide a quick snapshot of state to users by just returning the equivalent of newState.
  };
};

export const stateControl = storeCharacterState();

export const changeCharacterState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 100) + value,
    });
  };
};

const storeListState = () => {
  let currentState = [];
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = [...newState];
    return newState;
  };
};

export const hit = changeCharacterState("rock")(-2);
export const hit2 = changeCharacterState("bow")(-5);
export const hit3 = changeCharacterState("sword")(-7);

export const getHealth = changeCharacterState("drink water")(3);
export const getMoreHealth = changeCharacterState("eat food")(7);
export const getEvenMoreHealth = changeCharacterState("drink Elixir of Life")(
  15
);
