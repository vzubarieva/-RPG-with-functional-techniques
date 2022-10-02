import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import {
  hitPlayer1,
  hitPlayer2,
  getHealthPlayer1,
  getHealthPlayer2,
  stateControl,
} from "./js/character.js";

$(document).ready(function () {
  $("#character-1-hit").click(function () {
    const state = stateControl(hitPlayer1);
    $("#character-2-characterPoints").text(`${state.rock_player1}`);
  });

  $("#character-1-getHealth").click(function () {
    const state = stateControl(getHealthPlayer1);
    $("#character-1-characterPoints").text(`${state.rock_player1}`);
  });

  $("#character-2-hit").click(function () {
    const state = stateControl(hitPlayer2);
    $("#character-1-characterPoints").text(`${state.rock_player2}`);
  });

  $("#character-2-getHealth").click(function () {
    const state = stateControl(getHealthPlayer2);
    $("#character-2-characterPoints").text(`${state.rock_player2}`);
  });
});
