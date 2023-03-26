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

    return `
    <article>
        <img src="${cardInfo.images.REGULAR.url}">
        <h4>${cardInfo.label}</h4>
        <a href="#/${slug}" data-id="${id}" data-url="${info._links.self.href}">See more</a>
    </article>
    `
}