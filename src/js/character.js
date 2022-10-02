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

export const storeListState = () => {
  let currentState = [];
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = [...newState]; //98
    return newState;
  };
};

export const hitPlayer1 = changeCharacterState("rock_player1")(-2);
export const hit2Player1 = changeCharacterState("bow_player1")(-5);
export const hit3Player1 = changeCharacterState("sword_player1")(-7);

export const getHealthPlayer1 = changeCharacterState("rock_player1")(3);
export const getMoreHealthPlayer1 = changeCharacterState("eat_food_player1")(7);
export const getEvenMoreHealthPlayer1 = changeCharacterState(
  "super_health_player1"
)(15);

export const hitPlayer2 = changeCharacterState("rock_player2")(-2);
export const hit2Player2 = changeCharacterState("bow_player2")(-5);
export const hit3Player2 = changeCharacterState("sword_player2")(-7);

export const getHealthPlayer2 = changeCharacterState("rock_player2")(3);
export const getMoreHealthPlayer2 = changeCharacterState("eat_food_player2")(7);
export const getEvenMoreHealthPlayer2 = changeCharacterState(
  "super_health_player2"
)(15);
