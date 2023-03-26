export function PostCard(recipe) {
    let $lis = '';
    recipe.ingredientLines.forEach(ingredient => $lis += `<li>${ingredient}</li>`)

    return `
    <div class='post'>
    <h2>${recipe.label}</h2>
    <img src="${recipe.images.LARGE.url}">
    <ul>${$lis}</ul>
    </div>
    `;
}