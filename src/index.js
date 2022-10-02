import { storeListState, hit } from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

$(document).ready(function () {
  const listControl = storeListState();

  $("#${characterNum}-hit").click(function () {
    const state = listControl(hit);
    $("#${characterNum}-character2Points").text(state.rock);
  });
});
