import { hitPlayer2, stateControl } from "./../src/js/character.js";

describe("Character hit", () => {
  test("should correctly takeaway 2 from character2 if character1 attacked with rock", () => {
    const newState = stateControl(hitPlayer2);
    expect(newState.rock_player2).toEqual(98); /*what i want to pass*/
  });
});
