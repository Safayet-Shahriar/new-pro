let names = [];
let times = [];
let inputname;
const d = new Date();
let text = d.toString();

function check() {
    do {
      inputname = String(prompt("Enter your name to be confirmed."))
    }
    while (inputname == "" || inputname == " ");
    names = names.push(inputname);
    times.push(text);
}