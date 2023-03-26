export const Section = (title, $cards) => {
    const d = document;
    const $section = d.createElement('section');
    const $h2 = d.createElement('h2');
    const $cardsContainer = d.createElement('div')
    
    $h2.textContent = title;
    $cardsContainer.classList.add('cards-container');
    $cardsContainer.innerHTML = $cards;

    $section.appendChild($h2);
    $section.appendChild($cardsContainer);

    return $section;
}