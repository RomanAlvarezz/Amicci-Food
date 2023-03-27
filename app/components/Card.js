import apis from "../helpers/apis.js";
import { idExtraction } from "../helpers/idExtraction.js";

export function Card(info){
    const cardInfo = info.recipe;
    const slug = cardInfo.label.replaceAll(' ','-').toLowerCase();
    const id = idExtraction(info._links.self.href);
    
    document.addEventListener('click', e => {
        if (e.target.matches('article a')){
            localStorage.setItem('EdanamID', e.target.dataset.id);
        }
    })
console.log(apis.MEALICONS.breakfast)
    return `
    <article class="card">
    <img src="${cardInfo.images.REGULAR.url}" class="card__img">
    <div class="card__text">
    <a href="#/${slug}" data-id="${id}" data-url="${info._links.self.href}" class="card__title">${cardInfo.label}</a>
            <p class="card__icon">
                <img src="./app/assets/${cardInfo.mealType}-icon.svg">
            </p> 
        </div>  
    </article>
    `
}