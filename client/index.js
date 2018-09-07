import { FirstBlock } from "../components/FirstBlock";
import { SecondBlock } from "../components/SecondBlock";
import { ThirdBlock } from "../components/ThirdBlock";

const body = document.getElementsByClassName('root');

const inn = body[0].innerHTML;
body[0].innerHTML = inn + FirstBlock + SecondBlock + ThirdBlock;

console.log(body[0]);
