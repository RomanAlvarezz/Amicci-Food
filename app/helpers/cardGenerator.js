export function cardGenerator(arr) {
    const d = document;
    const $cards = d.createDocumentFragment();

    arr.forEach(card => {
        const $article = d.createElement('article');
        const $img = d.createElement('img');
        const $h4 = d.createElement('h4');
        const $btn = d.createElement('button');

        $img.src = card.image;
        $h4.textContent = card.title;
        $btn.textContent = 'See more';

        $btn.id = card.id;

        $article.appendChild($img);
        $article.appendChild($h4);
        $article.appendChild($btn);

        $cards.appendChild($article);
    });

    return $cards;
}