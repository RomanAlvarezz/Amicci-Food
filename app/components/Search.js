export function Search() {
    const d = document;
    const $form = d.createElement('form');
    const $input = d.createElement('input');
    const $btn = d.createElement('button');

    $input.type = 'text';
    $btn.type = 'submit';

    $btn.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;

    $form.appendChild($input);
    $form.appendChild($btn);

    return $form;
}