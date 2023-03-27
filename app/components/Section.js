export const Section = (title, $cards) => {
    const d = document;
    const $section = d.createElement('section');
    $section.classList.add('section')
    $section.innerHTML = `
    <h1 class="section__title">${title} <p class="section__line"><span></span></p></h1>
    <div class="card__container">${$cards}</div>
    `;
    // const $h2 = d.createElement('h2');
    // const $cardsContainer = d.createElement('div')
    
    // $h2.textContent = title;
    // $cardsContainer.classList.add('cards-container');
    // $cardsContainer.innerHTML = $cards;

    // $section.appendChild($h2);
    // $section.appendChild($cardsContainer);

    return $section;
}