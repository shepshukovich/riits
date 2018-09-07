import { FirstBlock } from "../components/FirstBlock/index.js";

console.log("HELLO WORLD!!!");
const body = document.getElementsByClassName('root');
console.log(body[0]);


const inn = body[0].innerHTML;
body[0].innerHTML = inn + "<article>DOCUMENT2</article>" + FirstBlock;
