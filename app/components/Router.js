import { Section } from './Section.js';
import { Card } from './Card.js';
import { Aside } from './Aside.js';
import { PostCard } from './PostCard.js';
import { ajax } from '../helpers/ajax.js';
import apis from '../helpers/apis.js';

export function Router() {
    const d = document;
    const $main = d.getElementById('main');
    const { hash } = location;

    if (!hash || hash == '#/') {
        /*ajax({
            url: apis.RECIPETYPES + 'Breakfast',
            callback: (data) => {
                console.log(data);
                localStorage.setItem('EDANAMInfo', JSON.stringify(data));
                // const $cards = cardGenerator(cardsInfo);
                // $main.appendChild(Section('Breakfast', $cards));
            }
        })*/

        const EDANAM = JSON.parse(localStorage.getItem('EDANAMInfo'));
        const arrayrecipes = EDANAM.hits;

        let html = '';
        
        for (let i = 0; i < apis.MEALTYPES.length; i++) {
            for (let j = 0; j < 5; j++) {
                html += Card(arrayrecipes[j])
            }
            $main.appendChild(Section(apis.MEALTYPES[i], html))
            html = '';
        }

    } else {
        $main.innerHTML = '<h2>Aquí cargará el contenido de el Post previamente seleccionado</h2>';
        const id = localStorage.getItem('EdanamID');
        const data = JSON.parse(localStorage.getItem('EdanamRecipe'));
        console.log(data);

        const EDANAM = JSON.parse(localStorage.getItem('EDANAMInfo'));
        const arrayrecipes = EDANAM.hits;

        let html = '';
        
        for (let j = 0; j < 3; j++) {
            html += Card(arrayrecipes[j])
        }


        $main.innerHTML = PostCard(data.recipe);
        $main.appendChild(Aside())
        d.querySelector('aside').innerHTML = html;
        
        // ajax({
        //     url: `${apis.EDANAM_API}/${id}?type=public&app_id=${apis.API_ID}&app_key=${apis.API_KEY}`,
        //     callback: data => {
        //          console.log('salio to BIEN    ',data)
        //          localStorage.setItem('EdanamRecipe', JSON.stringify(data));
        //         }
        // })
    }
}