import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import {
  hitPlayer1,
  hitPlayer2,
  hit2Player2,
  hit3Player2,
  hit2Player1,
  getMoreHealthPlayer1,
  getMoreHealthPlayer2,
  getHealthPlayer1,
  getHealthPlayer2,
  hit3Player1,
  stateControl,
} from "./js/character.js";

// Character 1
$(document).ready(function () {
  $("#character-1-hit").click(function () {
    const typeOfWeapon1 = $("#weapons1").val();

    switch (typeOfWeapon1) {
      case "hitPlayer2":
        $("#rock-character1").trigger("click");
        break;
      case "hit2Player2":
        $("#bow-character1").trigger("click");
        break;
      case "hit3Player2":
        $("#sword-character1").trigger("click");
        break;
    }
  });

  $("#sword-character1").click(function () {
    const state = stateControl(hit3Player2);
    $("#character-2-characterPoints").text(`${state.rock_player2}`);
  });

  $("#bow-character1").click(function () {
    const state = stateControl(hit2Player2);
    $("#character-2-characterPoints").text(`${state.rock_player2}`);
  });

  $("#rock-character1").click(function () {
    const state = stateControl(hitPlayer2);
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

  //Character 2

  $("#character-2-hit").click(function () {
    const typeOfWeapon2 = $("#weapons2").val();

    switch (typeOfWeapon2) {
      case "hitPlayer1":
        $("#rock-character2").trigger("click");
        break;
      case "hit2Player1":
        $("#bow-character2").trigger("click");
        break;
      case "hit3Player1":
        $("#sword-character2").trigger("click");
        break;
    }
  });

  $("#sword-character2").click(function () {
    const state = stateControl(hit3Player1);
    $("#character-1-characterPoints").text(`${state.rock_player1}`);
  });

  $("#bow-character2").click(function () {
    const state = stateControl(hit2Player1);
    $("#character-1-characterPoints").text(`${state.rock_player1}`);
  });

  $("#rock-character2").click(function () {
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
