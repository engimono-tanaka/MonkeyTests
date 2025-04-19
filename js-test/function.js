import { pika, log } from "./user.js";


function confirmed(fn){
  const input = window.prompt(`${pika}"実行する？"`);
  fn(input)
}

confirmed(function (input){
  if (input === "a"){
    console.log("zudon");
    log(pika)
  }
})