// This function stores our state.

export const storeCharacterState = () => {                        //store the currentState of an object
  let currentState = {};
  return (stateChangeFunction = state => state) => {     //The function that we pass in will specify the exact change that should be made to currentState
    const newState = stateChangeFunction(currentState);  //Instead of mutating currentState, we will save the new state in a constant called newState
    currentState = {...newState};                        //We will make a copy of newState and assign it to currentState
    return newState;                                     //because it takes time to update and return currentState (an async operation), we can provide a quick snapshot of state to users by just returning the equivalent of newState.
  };
};

export const stateControl = storeState();

export const changeCharacterState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 100) + value
    });
  };
};

const storeListState = () => {
  let currentState = [];
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = [...newState];
    return newState;
  }
}

export const hit = changeState("rock")(-2);
export const hit2 = changeState("bow")(-5);
export const hit3 = changeState("sword")(-7);

export const getHealth = changeState("drink water")(3);
export const getMoreHealth = changeState("eat food")(7);
export const getEvenMoreHealth = changeState("drink Elixir of Life")(15);




$(document).ready(function(){
  const listControl = storeListState();

  $("#${characterNum}-hit").click(function() {
    const newState = stateControl(hit);
    $("#${characterNum}-character2Points").text(state.rock);
});
});
