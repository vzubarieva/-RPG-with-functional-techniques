import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import {
  hitPlayer1,
  // hit2Player2,
  getMoreHealthPlayer1,
  getMoreHealthPlayer2,
  getHealthPlayer1,
  getHealthPlayer2,
  stateControl,
} from "./js/character.js";

$(document).ready(function () {
  //$("#weapon1").val();
  //"rock1" || "bow1" || "sword1"

  $("#character-1-hit").click(function () {
    const valPlayer1 = $("#weapons1").val();
    const state = stateControl(valPlayer1); //hitPlayer2
    $("#character-2-characterPoints").text(`${state.rock_player2}`);
  });

  $("#character-1-getHealth").click(function () {
    const state = stateControl(getHealthPlayer1);
    $("#character-1-characterPoints").text(`${state.rock_player1}`);
  });

  $("#character-1-getEvenMoreHealth").click(function () {
    const state = stateControl(getMoreHealthPlayer1);
    $("#character-1-characterPoints").text(`${state.rock_player1}`);
  });

  //$("#weapon2").val();
  $("#character-2-hit").click(function () {
    const state = stateControl(hitPlayer1);
    $("#character-1-characterPoints").text(`${state.rock_player1}`);
  });

  $("#character-2-getHealth").click(function () {
    const state = stateControl(getHealthPlayer2);
    $("#character-2-characterPoints").text(`${state.rock_player2}`);
  });

  $("#character-2-getEvenMoreHealth").click(function () {
    const state = stateControl(getMoreHealthPlayer2);
    $("#character-2-characterPoints").text(`${state.rock_player2}`);
  });
});
