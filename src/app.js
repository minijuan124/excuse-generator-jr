/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let what = ["My dog", "The neighbour's cat"];
  let action = [
    "was chewing",
    "was annoying",
    "was peeing the",
    "was barking at",
    "was meowing at"
  ];
  let who = ["everything", "my family", "the shoes", "on the furniture"];
  let when = ["right now", "Five minutes ago", "Two days ago"];

  let randomWhat = Math.floor(Math.random() * what.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWho = Math.floor(Math.random() * who.length);
  let randomWhen = Math.floor(Math.random() * when.length);
  document.querySelector(
    "#excuse"
  ).innerHTML = `${what[randomWhat]} ${action[randomAction]} ${who[randomWho]} ${when[randomWhen]}`;
};
