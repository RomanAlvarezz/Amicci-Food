import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { ajax } from "./helpers/ajax.js";

export const App = () => {
    const $root = document.getElementById('root');

    $root.appendChild(Header());
    // $root.appendChild(Main());

    // ajax({
    //     url: 'https://api.edamam.com/api/recipes/v2/2e9b699be433fab7da069629e1699455?type=public&app_id=9c838449&app_key=1428c2bae400b1284a67b5aaa47286ac',
    //     callback: data => console.log(data)
    // })

    //Router();
}