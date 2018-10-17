import { div } from "../components/div";

const root = document.getElementById('root');
const inn = root.innerHTML;
root.innerHTML = div + inn;
